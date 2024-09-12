import { RxCross2 } from "react-icons/rx";
import styles from "./TabComponent.module.css";

const TabComponent = ({
  activeTab,
  setActiveTab,
  onClose,
  color,
  theme = "light",
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onClose: () => void;
  color?: string;
  theme?: "light" | "dark";
}) => {
  return (
    <div className={`${styles.tabs} ${styles[theme]}`}>
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tabButton} ${
            activeTab === "changelogs" ? styles.active : ""
          }`}
          style={{
            color: activeTab === "changelogs" ? color : "",
            borderColor: activeTab === "changelogs" ? color : "",
          }}
          onClick={() => setActiveTab("changelogs")}
        >
          Changelogs
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === "feedback" ? styles.active : ""
          }`}
          style={{
            color: activeTab === "feedback" ? color : "",
            borderColor: activeTab === "feedback" ? color : "",
          }}
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
