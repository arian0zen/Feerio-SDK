import React from "react";
import styles from "./TabComponent.module.css";
import { MdClose } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const TabComponent = ({
  activeTab,
  setActiveTab,
  onClose,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onClose: () => void;
}) => {
  return (
    <div className={styles.tabs}>
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
      <div className={styles.closeButton} onClick={onClose}>
        <RxCross2 size={22} />
      </div>
    </div>
  );
};

export default TabComponent;
