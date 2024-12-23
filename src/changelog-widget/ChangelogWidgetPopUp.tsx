import { useState, useRef, useEffect, useCallback } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import ChangelogWidget from "./ChangelogWidget";
import TabComponent from "./TabComponent";
import styles from "./ChangelogWidgetPopUp.module.css";
import FeedbackComponent from "../feedback-widget/FeedbackComponent";
import { MdClose } from "react-icons/md";

import "../index.css";
import { isElementOutsideTopViewport } from "../utils";

const ChangelogWidgetPopUp = ({
  workspaceId,
  workspaceSubdomain,
  theme = "light",
  color = "#0A6847",
  position = "right",
  showChangelog = true,
  user,
  initializerStyle = "popup",

  attachedButtonStyles,
}: {
  workspaceId: string;
  workspaceSubdomain: string;
  theme?: "light" | "dark";
  color?: string;
  position?: "left" | "right";
  showChangelog?: boolean;
  user?: {
    email?: string;
    name?: string;
  };
  initializerStyle?: "popup" | "attached";
  attachedButtonStyles?: {
    color?: string;
    backgroundColor?: string;
    label?: string;
    border?: string; // this is currently not used anywhere
  };
}) => {
  const [showWidget, setShowWidget] = useState(false);
  const [activeTab, setActiveTab] = useState(
    showChangelog ? "changelogs" : "feedback"
  );
  const [isDragging, setIsDragging] = useState(false);

  const widgetRef = useRef<HTMLDivElement>(null);
  const initializerRef = useRef<HTMLButtonElement>(null);
  const dragStartY = useRef<number>(0);
  const startPositionY = useRef<number>(0);

  attachedButtonStyles = {
    ...attachedButtonStyles,
    backgroundColor:
      attachedButtonStyles?.backgroundColor ||
      (theme === "dark" ? "#333" : "#fffaf3"),
    color:
      attachedButtonStyles?.color || (theme === "dark" ? "#fff" : "#0A6847"),
    label: attachedButtonStyles?.label || "Feedback",
  };

  const updatePosition = useCallback(
    (clientY: number) => {
      const portal = document.getElementById("changelog-widget-portal-fc");
      if (!portal || !isDragging) return;

      const windowHeight = window.innerHeight;
      const delta = clientY - dragStartY.current;
      const deltaPercent = (delta / windowHeight) * 100;

      const newPosition = Math.max(
        7,
        Math.min(93, startPositionY.current + deltaPercent)
      );
      portal.style.top = `${newPosition}%`;
      portal.style.transform = "translateY(-50%)";
    },
    [isDragging]
  );

  // Handle drag start for mouse events
  const handleMouseStart = useCallback(
    (e: React.MouseEvent) => {
      if (initializerStyle !== "attached") return;
      e.preventDefault();
      e.stopPropagation();

      const portal = document.getElementById("changelog-widget-portal-fc");
      if (!portal) return;

      setIsDragging(true);
      dragStartY.current = e.clientY;

      const transform = portal.style.top;
      startPositionY.current = transform ? parseInt(transform) : 50;
      document.body.style.userSelect = "none";
    },
    [initializerStyle]
  );

  // Separate handler for touch events
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (initializerStyle !== "attached") return;

      const portal = document.getElementById("changelog-widget-portal-fc");
      if (!portal) return;

      setIsDragging(true);
      dragStartY.current = e.touches[0].clientY;

      const transform = portal.style.top;
      startPositionY.current = transform ? parseInt(transform) : 50;
      document.body.style.userSelect = "none";
    },
    [initializerStyle]
  );

  // Handle mouse movement
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.clientY);
    },
    [isDragging, updatePosition]
  );

  // Handle touch movement
  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.touches[0].clientY);
    },
    [isDragging, updatePosition]
  );

  // Handle drag end
  const handleDragEnd = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      setIsDragging(false);
      document.body.style.userSelect = "";
    },
    [isDragging]
  );

  // Set up event listeners
  useEffect(() => {
    if (!isDragging) return;

    // Add non-passive touch move listener
    const preventDefault = (e: TouchEvent) => e.preventDefault();
    document.addEventListener("touchmove", preventDefault, { passive: false });

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchend", handleDragEnd);
    document.addEventListener("touchcancel", handleDragEnd);

    return () => {
      // Clean up listeners
      document.removeEventListener("touchmove", preventDefault);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchend", handleDragEnd);
      document.removeEventListener("touchcancel", handleDragEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleDragEnd]);

  // Handle clicks outside widget
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node) &&
        !initializerRef.current?.contains(event.target as Node)
      ) {
        setShowWidget(false);
      }
    };

    if (showWidget) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [showWidget]);

  const getWidgetPosition = useCallback(() => {
    if (initializerStyle === "popup") {
      return {
        right: position === "right" ? "0" : "auto",
        left: position === "left" ? "0" : "auto",
        bottom: "4.5rem",
      };
    }

    const initializerElement = initializerRef.current;
    if (!initializerElement) return {};

    const { outsideTop, isMobile } =
      isElementOutsideTopViewport(initializerElement);
    if (isMobile) {
      console.log("THIS IS MOBILE ==> ");

      const portal = document.getElementById("changelog-widget-portal-fc");
      if (!portal) return {};

      portal.style.top = "93%";
      const transform = portal.style.top;
      startPositionY.current = transform ? parseInt(transform) : 50;

      return position === "right"
        ? { marginRight: "16px" }
        : {
            marginLeft: "16px",
          };
    }

    return {
      left: position === "left" ? "2.5rem" : "auto",
      right: position === "right" ? "2.5rem" : "auto",
      bottom: !outsideTop ? 0 : "auto",
      top: outsideTop ? 0 : "auto",
    };
  }, [initializerStyle, position]);

  return (
    <div className={`${styles.container} ${styles.changelogWrapper} `}>
      {initializerStyle === "popup" ? (
        <button
          onClick={() => setShowWidget(!showWidget)}
          ref={initializerRef}
          className={`${styles.button} animateFadeIn`}
          style={{
            backgroundColor: color || "#0A6847",
          }}
          aria-label={showWidget ? "Close Widget" : "Open Widget"}
        >
          {showWidget ? (
            <MdClose size={24} className={`${styles.icon} animateFadeIn`} />
          ) : (
            <FaRegLightbulb
              size={24}
              className={`${styles.icon} animateFadeIn`}
            />
          )}
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setShowWidget(!showWidget);
          }}
          onMouseDown={handleMouseStart}
          onTouchStart={handleTouchStart}
          ref={initializerRef}
          className={` ${styles.attachedButton} animateFadeIn`}
          style={{
            backgroundColor: attachedButtonStyles.backgroundColor,
            color: attachedButtonStyles.color,
            border: `1px solid ${theme === "dark" ? "#333" : "#dadada"}`,
            borderRightWidth: position === "left" ? "0" : "1px",
            borderLeftWidth: position === "right" ? "0" : "1px",
            borderRadius: position === "right" ? "0 4px 4px 0" : "4px 0 0 4px",
            transform: "rotate(180deg)",
            padding: "0.5rem 0",
            cursor: "pointer",
            touchAction: isDragging ? "none" : "auto",
          }}
          aria-label={showWidget ? "Close Widget" : "Open Widget"}
        >
          {attachedButtonStyles.label}
        </button>
      )}
      {showWidget && (
        <div
          className={`${styles[theme]} ${styles.widgetContainer}`}
          style={getWidgetPosition()}
          ref={widgetRef}
        >
          {showChangelog && (
            <TabComponent
              onClose={() => setShowWidget(false)}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              color={color}
              theme={theme}
            />
          )}
          <div
            className={`${styles.contentContainer} ${
              theme === "light" ? "thin-scrollbar" : "thin-scrollbar-dark"
            }`}
          >
            {activeTab === "changelogs" ? (
              <ChangelogWidget
                title="Changelog"
                workspaceId={workspaceId}
                workspaceSubdomain={workspaceSubdomain}
                theme={theme}
                isPopUp={true}
              />
            ) : (
              <FeedbackComponent
                workspaceId={workspaceId}
                color={color}
                theme={theme}
                user={user}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangelogWidgetPopUp;
