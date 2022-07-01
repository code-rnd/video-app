import { EventDto } from "../../../../../../shared/http/dto";

export interface ProgressBarModel {
  stamp: number;
  duration: number;
  eventsList?: EventDto[];
  changeTimecode: (stamp: number) => void;
}
