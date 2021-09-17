import { useData } from "../../data/useData";
import { Comment } from "../Comment/Comment";

import styles from "./Discussion.module.scss";

// Main area component that holds the discussion and comments
export function Discussion(): JSX.Element {
  const data = useData();

  return (
    <>
      <div className={styles.label}>{data.discussion.category.label}</div>
      <Comment data={data.discussion} key={data.discussion.id} />
      <div className={styles.comments}>
        {data.discussion.commentCount} Comments
      </div>
      {data.comments.map((comment) => (
        <Comment data={comment} key={comment.id} />
      ))}
    </>
  );
}
