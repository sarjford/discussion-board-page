import { CommentData } from "../../data/types";
import { CommentHeader } from "../CommentHeader/CommentHeader";
import { IconButton } from "../IconButton/IconButton";
import { ButtonTypeEnum } from "../IconButton/IconButton";

import styles from "./Comment.module.scss";

interface Props {
  data: CommentData;
}

// Base component used to render Discussion, Comment and Reply components
// Recursively renders reply data and could handle data structure with deeper
// nested replies
export function Comment({ data }: Props): JSX.Element {
  const hasChildren = data.replies ? data.replies.length > 0 : false;
  const isDiscussionLayout = typeof data.title === "string";

  return (
    <div className={styles.comment}>
      <CommentHeader
        user={data.user}
        createdAt={data.createdAt}
        viewCount={data.viewCount}
      />
      {isDiscussionLayout && <h1>{data.title}</h1>}
      <p>{data.content}</p>

      {data.image_urls.length > 0 && (
        <div className={styles.images}>
          {data.image_urls.map((src, index) => (
            <img src={src} alt={`${data.title}`} key={index} />
          ))}
        </div>
      )}
      <div className={styles.buttonContainer}>
        <IconButton
          type={ButtonTypeEnum.upvote}
          value={data.upvoteCount.toLocaleString()}
        />
        <IconButton
          type={ButtonTypeEnum.comment}
          value={isDiscussionLayout ? data.commentCount : "Reply"}
        />
        {isDiscussionLayout && <IconButton type={ButtonTypeEnum.bookmark} />}
      </div>
      {hasChildren && (
        <div className={styles.replies}>
          {data.replies?.map((reply) => (
            <Comment data={reply} key={reply.id} />
          ))}
        </div>
      )}
    </div>
  );
}
