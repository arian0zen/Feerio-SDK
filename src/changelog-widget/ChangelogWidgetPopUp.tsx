import { useState, useRef, useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import ChangelogWidget from "./ChangelogWidget";
import TabComponent from "./TabComponent";
import styles from "./ChangelogWidgetPopUp.module.css";
import FeedbackComponent from "../feedback-widget/FeedbackComponent";
import { MdClose } from "react-icons/md";

import "../index.css";

const ChangelogWidgetPopUp = ({
  workspaceId,
  workspaceSubdomain,
  theme = "light",
  color = "#0A6847",
}: {
  workspaceId: string;
  workspaceSubdomain: string;
  theme?: "light" | "dark";
  color?: string;
}) => {
  const [showWidget, setShowWidget] = useState(false);
  const [activeTab, setActiveTab] = useState("changelogs");
  const widgetRef = useRef<HTMLDivElement>(null);
  const initializerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showWidget]);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setShowWidget(!showWidget)}
        ref={initializerRef}
        className={` ${styles.button} animateFadeIn`}
        style={{
          backgroundColor: color,
        }}
        aria-label={showWidget ? "Close Widget" : "Open Widget"}
      >
        {/* <FaRegLightbulb size={24} className={styles.icon} /> */}

        {showWidget ? (
          <MdClose size={24} className={`${styles.icon} animateFadeIn`} />
        ) : (
          <FaRegLightbulb
            size={24}
            className={`${styles.icon} animateFadeIn`}
          />
        )}
      </button>
      {showWidget && (
        <div className={styles.widgetContainer} ref={widgetRef}>
          <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className={`${styles.contentContainer} thin-scrollbar `}>
            {activeTab === "changelogs" ? (
              <ChangelogWidget
                title={"Changelog"}
                workspaceId={workspaceId}
                workspaceSubdomain={workspaceSubdomain}
                theme={theme}
                isPopUp={true}
              />
            ) : (
              <FeedbackComponent workspaceId={workspaceId} color={color} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangelogWidgetPopUp;
