import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { BASE_URL, PLAIN_DOMAIN_URL } from "../constants";
import { ChangelogType } from "../types";
import { formatDate } from "../utils";
import styles from "./ChangelogWidget.module.css";
import ChangelogDetailsCard from "./ChangelogWidgetDetails";

type ChangelogWidgetProps = {
  title: string;
  workspaceId: string;
  workspaceSubdomain: string;
  theme?: "light" | "dark";
};

const ChangelogWidget = ({
  title,
  workspaceId,
  workspaceSubdomain,
  theme = "light",
}: ChangelogWidgetProps) => {
  const [changelogLists, setChangelogLists] = useState<ChangelogType[]>([]);
  const [fetching, setFetching] = useState(false);

  const [showingDetails, setShowingDetails] = useState(false);

  const [selectedChangeLog, setSelectedChangeLog] =
    useState<ChangelogType | null>(null);

  useEffect(() => {
    const fetchChangelogsHandler = async () => {
      try {
        setFetching(true);
        const { data: fetchedData } = await axios.post(
          `${BASE_URL}/sdk/fetch-changelogs`,
          {
            workspaceId: workspaceId || "",
            skip: 0,
            limit: 3,
            tags: [],
            labels: [],
          }
        );
        if (!fetchedData.success) {
          throw new Error(fetchedData.message);
        }
        setFetching(false);
        setChangelogLists(fetchedData.changelogs);
      } catch (e: any) {
        setFetching(false);
        setChangelogLists([]);
      }
    };
    fetchChangelogsHandler();
  }, [workspaceId]);

  return (
    <div
      className={`${styles.changelogWidget} ${
        theme === "light" ? styles.light : ""
      }`}
    >
      <div className={styles.title}>
        <div
          className={`${styles.backButton} ${
            showingDetails ? styles.visible : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowingDetails(false);
            setTimeout(() => setSelectedChangeLog(null), 300); // Wait for animation to finish
          }}
        >
          <HiOutlineArrowNarrowLeft size={18} />
        </div>
        {!showingDetails
          ? `${title.length > 28 ? `${title.slice(0, 28)}...` : title} `
          : selectedChangeLog && selectedChangeLog?.title.length > 28
          ? `${selectedChangeLog?.title.slice(0, 28)}...`
          : selectedChangeLog?.title}
        <div
          className={`${styles.closeButton}`}
          id="fcb-sdk"
          // onClick={(e) => {
          //   const elementId = "changelog-root";
          //   let container = document.getElementById(elementId);
          //   if (container) {
          //     ReactDOM.unmountComponentAtNode(container);
          //     container.remove();
          //     // document.removeEventListener(
          //     //   "click",
          //     //   (e) => container && handleOutsideClick(e, container)
          //     // );
          //   }
          // }}
        >
          <RxCross2 size={22} />
        </div>
      </div>

      <div className={`${styles.detailsContainer} ${styles.thinScrollbar}`}>
        {fetching && <div className={styles.noData}>Loading...</div>}
        {changelogLists.length === 0 && !fetching && (
          <div className={styles.noData}>
            No data found. Please check back later.
          </div>
        )}

        {changelogLists?.length > 0 && (
          <div
            className={`${styles.changelogList} ${
              showingDetails ? styles.slideOut : ""
            }`}
          >
            <div className={styles.changelogList}>
              {changelogLists &&
                changelogLists.map((changelog, index) => (
                  <div
                    key={index}
                    className={styles.changelogItem}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedChangeLog(changelog);
                      setShowingDetails(true);
                    }}
                  >
                    <div className={styles.changelogContent}>
                      <div className={styles.changelogTitle}>
                        {changelog.tags.length > 0 && (
                          <div className={styles.changelogLabels}>
                            {changelog.tags.map((tag, index) => (
                              <div
                                key={index}
                                className={styles.label}
                                style={{
                                  backgroundColor:
                                    tag === "Fixed"
                                      ? "#ef4444" // red-500
                                      : tag === "Feature"
                                      ? "#22c55e" // green-500
                                      : tag === "Improvement"
                                      ? "#7c3aed" // indigo-600
                                      : tag === "Documentation"
                                      ? "#f59e0b" // amber-500
                                      : "#44403c", // stone-600
                                }}
                              >
                                {tag}
                              </div>
                            ))}
                          </div>
                        )}

                        {changelog.title}
                      </div>
                      <div className={styles.changelogDescription}>
                        {changelog.plainTextContent.length > 100
                          ? changelog.plainTextContent.slice(0, 100) + "..."
                          : changelog.plainTextContent}
                      </div>

                      <div className={styles.changelogMeta}>
                        {formatDate(changelog.createdAt)}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        <div
          className={`${styles.changelogDetails}  ${
            showingDetails ? styles.slideIn : ""
          }`}
        >
          {selectedChangeLog && (
            <ChangelogDetailsCard
              initialValue_={selectedChangeLog.slateJsDescendantContent}
            />
          )}
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.poweredBy}>
          <a href="https://feerio.io" target="_blank" rel="noreferrer">
            Powered by Feerio
          </a>
        </span>
        <a
          href="https://feedback.feerio.io/dashboard/changelog"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Help
        </a>
        <a
          href={`https://${workspaceSubdomain}.${PLAIN_DOMAIN_URL}/dashboard/changelogs`}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          See all changes
        </a>
      </div>
    </div>
  );
};

export default ChangelogWidget;
