import { httpClient } from "./http-client";
import { AxiosResponse } from "axios";
import * as apiTypes from "./apiTypes";
import { URLS } from "../constants";

export class Api {
  public static getEvents(): Promise<AxiosResponse<apiTypes.EventDto[]>> {
    return httpClient.get(URLS.events, {
      params: {},
    });
  }
}
