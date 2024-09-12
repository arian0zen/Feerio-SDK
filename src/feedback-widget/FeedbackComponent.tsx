import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import styles from "./FeedbackComponent.module.css";
import "../index.css";

type FeedbackComponentProps = {
  workspaceId: string;
};

type Board = {
  boardId: string;
  name: string;
  description?: string;
  url: string;
  createdBy: string; // ObjectId as string
  haveAccess: string[]; // Array of ObjectIds as strings
  isDeleted: boolean;
  boardVisibility: "private" | "public";
  isStarred: boolean;
  showOnHomePage: boolean;
  postCount: number;
};

const FeedbackComponent = ({ workspaceId }: FeedbackComponentProps) => {
  const [boards, setBoards] = useState<Board[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const { data } = await axios.post(`${BASE_URL}/sdk/fetch-boards`, {
          workspaceId,
        });
        setBoards(data.boards);
      } catch (error) {
        console.error("Error fetching boards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBoards();
  }, [workspaceId]);

  return (
    <div className={`${styles.container} animateFadeUp`}>
      {boards &&
        boards?.length > 0 &&
        boards?.map((board) => (
          <div key={board.boardId} className={styles.feedbackButton}>
            <div className={styles.buttonContent}>
              <p className={`${styles.boardTitle}`}>{board.name}</p>
              <p className={`${styles.boardDescription}`}>
                {board.description || "What request you got ?"}
              </p>
            </div>
          </div>
        ))}

      {!loading && boards?.length === 0 && <h3>No feedback boards found</h3>}
    </div>
  );
};

export default FeedbackComponent;
