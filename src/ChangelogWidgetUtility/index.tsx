import ReactDOM from "react-dom";
import ChangelogWidget from "../changelog-widget/ChangelogWidget";
import ChangelogWidgetPopUp from "../changelog-widget/ChangelogWidgetPopUp";

const renderChangelogWidget = (
  container: HTMLElement,
  props: {
    title: string;
    theme: "light" | "dark";
    workspaceId: string;
    workspaceSubdomain: string;
  }
) => {
  ReactDOM.render(<ChangelogWidget {...props} />, container);
};

const handleOutsideClick = (event: MouseEvent, container: HTMLElement) => {
  let closeButton = document.getElementById("fcb-sdk");
  if (
    !container.contains(event.target as Node) ||
    closeButton?.contains(event.target as Node)
  ) {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    document.removeEventListener(
      "click",
      (e) => container && handleOutsideClick(e, container)
    );
  }
};

const handleButtonClickForChangelogTrigger = (
  event: MouseEvent,
  options: {
    workspaceId: string;
    workspaceSubdomain: string;
    title?: string;
    theme?: "light" | "dark";
    position?:
      | "top-right"
      | "top-left"
      | "bottom-right"
      | "bottom-left"
      | "left"
      | "right"
      | "top-center"
      | "bottom-center";
  }
) => {
  event.stopPropagation(); // Prevent immediate triggering of outside click

  if (
    !options?.position ||
    ![
      "top-right",
      "top-left",
      "bottom-right",
      "bottom-left",
      "left",
      "right",
      "top-center",
      "bottom-center",
    ].includes(options.position)
  ) {
    options.position = "bottom-right";
  }

  const target = event.currentTarget as HTMLElement;
  const elementId = "changelog-root";
  let container = document.getElementById(elementId);

  if (container) {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    document.removeEventListener(
      "click",
      (e) => container && handleOutsideClick(e, container)
    );
  } else {
    container = document.createElement("div");
    container.id = elementId;
    container.style.position = "absolute";
    container.style.zIndex = "9999";

    const rect = target.getBoundingClientRect();

    let mainContainerWidth = 350; // default width
    let mainContainerHeight = 420; // default height

    switch (options.position) {
      case "top-right": //  done
        container.style.top = `${rect.top - mainContainerHeight - 10}px`;
        container.style.left = `${rect.left}px`;
        break;
      case "top-left": // done
        container.style.top = `${rect.top - mainContainerHeight - 10}px`;
        container.style.left = `${rect.right - mainContainerWidth}px`;
        break;
      case "bottom-right": // done
        container.style.top = `${rect.bottom + 10}px`;
        container.style.left = `${rect.left}px`;
        break;
      case "bottom-left": // done
        container.style.top = `${rect.bottom + 10}px`;
        container.style.left = `${rect.right - mainContainerWidth}px`;
        break;
      case "left": // done
        container.style.top = `${rect.top}px`;
        container.style.left = `${rect.left - mainContainerWidth - 10}px`;
        break;
      case "right": // done
        container.style.top = `${rect.top}px`;
        container.style.left = `${rect.right + 10}px`;
        break;
      case "top-center": // done
        container.style.top = `${rect.top - mainContainerHeight - 10}px`;
        container.style.left = `${
          rect.left + (rect.width - mainContainerWidth) / 2
        }px`;
        break;
      case "bottom-center": // done
        container.style.top = `${rect.bottom + 10}px`;
        container.style.left = `${
          rect.left + (rect.width - mainContainerWidth) / 2
        }px`;
        break;
      default: // done
        // Default to bottom-right if an invalid position is provided
        container.style.top = `${rect.bottom + 10}px`;
        container.style.left = `${rect.left}px`;
        break;
    }
    //When in mobile screen make sure no top and left is set
    if (window.innerWidth < 768) {
      container.style.top = "0";
      container.style.left = "0";
      container.style.width = "100vw";
      container.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }

    document.body.appendChild(container);

    renderChangelogWidget(container, {
      title: options?.title || "Changelog",
      theme: options?.theme || "light",
      workspaceId: options?.workspaceId,
      workspaceSubdomain: options?.workspaceSubdomain,
    });

    // Add a slight delay before adding the click listener to prevent immediate closing
    setTimeout(() => {
      document.addEventListener(
        "click",
        (e) => container && handleOutsideClick(e, container)
      );
    }, 0);
  }
};

const renderChangelogWidgetPopup = ({
  theme,
  workspaceId,
  workspaceSubdomain,
  color,
}: {
  theme?: "light" | "dark";
  workspaceId: string;
  workspaceSubdomain: string;
  color?: string;
}) => {
  // Check if the widget already exists
  const existingPortal = document.getElementById("changelog-widget-portal-fc");
  if (existingPortal) return;

  // Create a new div element for the portal
  const portalContainer = document.createElement("div");
  portalContainer.id = "changelog-widget-portal-fc";

  portalContainer.style.position = "fixed";
  portalContainer.style.bottom = "1rem";
  portalContainer.style.right = "1rem";
  portalContainer.style.zIndex = "9999";

  // Append the div to the body
  document.body.appendChild(portalContainer);

  // Use ReactDOM.render instead of createPortal
  ReactDOM.render(
    <ChangelogWidgetPopUp
      workspaceId={workspaceId}
      workspaceSubdomain={workspaceSubdomain}
      theme={theme}
      color={color}
    />,
    portalContainer
  );
};

export {
  handleButtonClickForChangelogTrigger,
  renderChangelogWidget,
  renderChangelogWidgetPopup,
};
