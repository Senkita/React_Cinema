/*
 * @Description : 视频文件名显示条
 * @Author      : Senkita
 * @Date        : 2022-05-05 19:06:49
 * @LastEditTime: 2022-05-06 12:14:50
 * @LastEditors : Senkita
 */
import { videoStore } from "../stores";
import styles from "../styles/PlayListRow.module.less";
import type { IPlayListRowProps } from "../types";

const PlayListRow: (props: IPlayListRowProps) => JSX.Element = (
  props: IPlayListRowProps
): JSX.Element => {
  const { video, index } = props;

  const handleClick: () => void = (): void => {
    const videoUrl: string = "http://localhost:2333" + "/stream/";
    videoStore.source = videoUrl + video;
  };

  return (
    <li className={styles.itemRow} key={index}>
      <span className={styles.item} onClick={handleClick}>
        {video}
      </span>
    </li>
  );
};

export default PlayListRow;
