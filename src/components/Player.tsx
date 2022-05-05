/*
 * @Description : 播放器
 * @Author      : Senkita
 * @Date        : 2022-05-04 00:46:21
 * @LastEditTime: 2022-05-05 21:28:12
 * @LastEditors : Senkita
 */
import styles from "../styles/Player.module.less";
import { IPlayerProps } from "../types";

const Player: (props: IPlayerProps) => JSX.Element = (
  props: IPlayerProps
): JSX.Element => (
  <video className={styles.Player} src={props.source} controls></video>
);

export default Player;
