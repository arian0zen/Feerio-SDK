import ReactDOM from "react-dom";

// Define interfaces for better type safety
interface UserData {
  email?: string;
  name?: string;
}

interface ChangelogWidgetOptions {
  workspaceId: string;
  workspaceSubdomain: string;
  theme?: "light" | "dark";
  color?: string;
  position?: "left" | "right";
  initializerStyle?: "popup" | "attached";
  attachedButtonStyles?: {
    label?: string;
    backgroundColor?: string;
    color?: string;
    border?: string;
  };
  showChangelog?: boolean;
  absolutePosition?: {
    bottom?: string;
    right?: string;
    left?: string;
  };
  user?: UserData;
}

export class WidgetManager {
  private static instance: WidgetManager;
  private options: ChangelogWidgetOptions | null = null;
  private resetInProgress = false;
  private mountedComponents: Set<string> = new Set();

  private constructor() {
    // Initialize any necessary state
    this.tryRestoreOptions();
  }

  static getInstance(): WidgetManager {
    if (!WidgetManager.instance) {
      WidgetManager.instance = new WidgetManager();
    }
    return WidgetManager.instance;
  }

  private tryRestoreOptions(): void {
    try {
      const stored = sessionStorage.getItem("feerio-widget-options");
      if (stored) {
        this.options = JSON.parse(stored);
      }
    } catch (error) {
      console.error("Error restoring widget options:", error);
      this.options = null;
    }
  }

  setOptions(options: ChangelogWidgetOptions): void {
    try {
      this.options = { ...options };
      sessionStorage.setItem("feerio-widget-options", JSON.stringify(options));
    } catch (error) {
      console.error("Error saving widget options:", error);
    }
  }

  getOptions(): ChangelogWidgetOptions | null {
    if (!this.options) {
      this.tryRestoreOptions();
    }
    return this.options;
  }

  async resetUser(newUser?: UserData): Promise<boolean> {
    if (this.resetInProgress) {
      console.warn("Reset already in progress, please wait...");
      return false;
    }

    try {
      this.resetInProgress = true;
      await this.cleanupExistingWidget();
      //   await this.reinitializeWidget(newUser);
      return true;
    } catch (error) {
      console.error("Error during user reset:", error);
      return false;
    } finally {
      this.resetInProgress = false;
    }
  }

  private async cleanupExistingWidget(): Promise<void> {
    return new Promise((resolve) => {
      const portal = document.getElementById("changelog-widget-portal-fc");
      if (portal) {
        try {
          // Remove all event listeners by cloning
          const clone = portal.cloneNode(true);
          portal.parentNode?.replaceChild(clone, portal);

          // Unmount React component
          ReactDOM.unmountComponentAtNode(portal);
          portal.remove();

          // Clear mounted component references
          this.mountedComponents.clear();
        } catch (error) {
          console.error("Error cleaning up widget:", error);
        }
      }
      // Always resolve, even if there were errors
      resolve();
    });
  }

  //   private async reinitializeWidget(newUser?: UserData): Promise<void> {
  //     const options = this.getOptions();
  //     if (!options) {
  //       throw new Error("Widget has not been initialized yet");
  //     }

  //     // Create new options while preserving all existing properties
  //     const newOptions: ChangelogWidgetOptions = {
  //       ...options, // Spread all existing options
  //       user: newUser || undefined, // Update only the user property
  //     };

  //     // Update stored options
  //     this.setOptions(newOptions);

  //     // Render new widget
  //     await renderChangelogWidgetPopup(newOptions);
  //   }

  trackMount(componentId: string): void {
    this.mountedComponents.add(componentId);
  }

  trackUnmount(componentId: string): void {
    this.mountedComponents.delete(componentId);
  }

  isComponentMounted(componentId: string): boolean {
    return this.mountedComponents.has(componentId);
  }

  clearMountedComponents(): void {
    this.mountedComponents.clear();
  }
}

// Export a type for external use
export type { ChangelogWidgetOptions, UserData };
