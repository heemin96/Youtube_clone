import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      // params: { key: "AIzaSyAqj2iCBTxmsLWa8LwHkM-QpZicv_BN8ss" },
      // params: { key: "AIzaSyD-ouh6lLHcsu7sjMEk3Cu_bn55yQuc8-g" },
      params: { key: "AIzaSyAS8epuAPbukedp94_5vdsx2tXwaJDszSY" },
    });
  }

  async search(params) {
    return this.httpClient.get("search", params);
  }

  async videos(params) {
    return this.httpClient.get("videos", params);
  }

  async channels(params) {
    return this.httpClient.get("channels", params);
  }

  async categories(params) {
    return this.httpClient.get("categories", params);
  }
}
