export interface ProgressBarModel {
  stamp: number;
  duration: number;
  changeTimecode: (stamp: number) => void;
}
