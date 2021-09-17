import { User } from "../../data/types";

import { getTimeSince } from "../../utils/getTimeSince";

import styles from "./CommentHeader.module.scss";

interface Props {
  user: User;
  createdAt: string;
  viewCount?: number;
}

// User thumbnail component; contains profile pic, skin type, post
// date and view count
export function CommentHeader({
  user,
  createdAt,
  viewCount,
}: Props): JSX.Element {
  const createdAtDate = new Date(createdAt);

  return (
    <div className={styles.commentHeader}>
      <img
        src={user.image_url}
        alt={`user ${user.nick_name}`}
        className={styles.image}
      />
      <div>
        <span className={styles.nickName}>{user.nick_name}</span>
        <span className={styles.skinType}>{user.skin_type}</span>
      </div>
      <div className={styles.timeAndViews}>
        {getTimeSince(createdAtDate)} &middot;{" "}
        {viewCount && `${viewCount.toLocaleString()} Views`}
      </div>
    </div>
  );
}
