/*
 * @Description : 播放列表
 * @Author      : Senkita
 * @Date        : 2022-05-03 10:35:32
 * @LastEditTime: 2022-05-05 22:08:22
 * @LastEditors : Senkita
 */
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { PlayListStore } from "../stores";
import styles from "../styles/PlayList.module.less";
import type { IPlayListProps, IPlayListState } from "../types";
import PlayListRow from "./PlayListRow";

const PlayList: () => JSX.Element = (): JSX.Element => {
  useEffect((): void => {
    fetch("/api")
      .then((res: Response): Promise<IPlayListState> => res.json())
      .then((data: IPlayListState): void => {
        PlayListStore.videos = data["videos"];
      });
  }, []);

  const snap: IPlayListProps = useSnapshot(PlayListStore);

  return (
    <ul className={styles.PlayList}>
      {snap.videos.map(
        (video: string, index: number): JSX.Element => (
          <PlayListRow video={video} index={index} />
        )
      )}
    </ul>
  );
};

export default PlayList;
