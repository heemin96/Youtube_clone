import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      // params: { key: "AIzaSyA229KWb2mwQb9q7Bz5hXjitA2JUc5NsrU" },
      // params: { key: "AIzaSyD-ouh6lLHcsu7sjMEk3Cu_bn55yQuc8-g" },
      // params: { key: "AIzaSyDEwx3BuGaKBQk6S_G7EDXMl3eO_QMMZpQ" },
      params: { key: "AIzaSyBrPGy2TK9no8ECQzfN9eXdmbItvXE5zhs" }, //max api key
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
}
