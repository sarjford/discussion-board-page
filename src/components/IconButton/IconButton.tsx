import upvote from "../../assets/icon-upvote-14-px@3x.png";
import comment from "../../assets/icon-comment-14-px@3x.png";
import bookmark from "../../assets/icon-bookmark-14-px@3x.png";
import styles from "./IconButton.module.scss";

export enum ButtonTypeEnum {
  upvote = 'UPVOTE',
  comment = 'COMMENT',
  bookmark = 'BOOKMARK',
}

interface Props {
  type: ButtonTypeEnum;
  value?: string | number;
}

const iconMap = {
  [ButtonTypeEnum.upvote]: upvote,
  [ButtonTypeEnum.comment]: comment,
  [ButtonTypeEnum.bookmark]: bookmark,
}

// reusable component to render the icon buttons at the
// bottom of each comment
export function IconButton({
  type,
  value,
}: Props): JSX.Element {
  return (
    <button className={styles.button}>
      <img src={iconMap[type]} alt={`${iconMap[type]} Icon`}/>
      {value && <span>{value}</span>}
    </button>
  );
}
