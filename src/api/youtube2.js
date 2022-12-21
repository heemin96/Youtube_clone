import axios from "axios";

class Youtube2 {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: "AIzaSyDEwx3BuGaKBQk6S_G7EDXMl3eO_QMMZpQ" },
    });
  }
  async searchVideo(submit, pageToken) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 1,
        q: submit,
        type: "video",
        pageToken: pageToken && pageToken,
      },
    });
    return response.data;
  }
}

export default Youtube2;
