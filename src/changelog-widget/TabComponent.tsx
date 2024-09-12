import React from "react";
import styles from "./TabComponent.module.css";

const TabComponent = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div className={styles.tabContainer}>
      <button
        className={`${styles.tabButton} ${
          activeTab === "changelogs" ? styles.active : ""
        }`}
        onClick={() => setActiveTab("changelogs")}
      >
        Changelogs
      </button>
      <button
        className={`${styles.tabButton} ${
          activeTab === "feedback" ? styles.active : ""
        }`}
        onClick={() => setActiveTab("feedback")}
      >
        Feedback
      </button>
    </div>
  );
};

export default TabComponent;
