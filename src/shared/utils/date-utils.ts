import moment, { MomentInput } from "moment";

export const DateUtils = {
  formatDate: (date?: MomentInput, format: string = "DD.MM.YYYY"): string =>
    date ? moment(date).format(format) : "",
};
