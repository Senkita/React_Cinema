type IPlayerProps = {
  readonly source: string;
};

type IPlayListRowProps = {
  video: string;
  index: number;
};

type IPlayListProps = {
  readonly videos: readonly string[];
};

type IPlayListState = {
  videos: Array<string>;
};

type IVideoState = {
  source: string;
};

export type {
  IPlayerProps,
  IPlayListRowProps,
  IPlayListProps,
  IPlayListState,
  IVideoState,
};
