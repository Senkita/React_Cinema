import { proxy } from "valtio";
import type { IPlayListState, IVideoState } from "../types";

const PlayListStore: IPlayListState = proxy<IPlayListState>({
  videos: [],
});

const videoStore: IVideoState = proxy({
  source: "",
});

export { PlayListStore, videoStore };
