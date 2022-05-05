/*
 * @Description : 播放面板
 * @Author      : Senkita
 * @Date        : 2022-05-03 10:43:12
 * @LastEditTime: 2022-05-05 21:43:32
 * @LastEditors : Senkita
 */
import { useSnapshot } from "valtio";
import { videoStore } from "../stores";
import styles from "../styles/PlayPanel.module.less";
import type { IPlayerProps } from "../types";
import Player from "./Player";
import PlayList from "./PlayList";

const PlayPanel = () => {
  const videoSnap: IPlayerProps = useSnapshot(videoStore);

  return (
    <div className={styles.PlayPanel}>
      <Player source={videoSnap.source} />
      <PlayList />
    </div>
  );
};

export default PlayPanel;
