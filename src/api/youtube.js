export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.searchByKeyword(keyword) : "";
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: "snippet", id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 10,
          type: "video",
          relatedToVideoId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 1,
          type: "video",
          q: keyword,
        },
      })
      .then(
        (res) => res.data.map((item) => ({ ...item, id: item.id.videoId }))
        // .then((res) => res.data)
      );
  }

  async searchByList(keyword, nextPageTok) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 10,
          type: "video",
          q: keyword,
          pageToken: nextPageTok,
        },
      })
      .then((res) => res.data);
  }

  async mostPopular(category) {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 10,
          chart: "mostPopular",
          regionCode: "kr",
          videoCategoryId: category,
        },
      })
      .then((res) => res.data);
  }

  async mostPopularList(category, nextPageTok) {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 10,
          chart: "mostPopular",
          regionCode: "kr",
          videoCategoryId: category,
          pageToken: nextPageTok,
        },
      })
      .then((res) => res.data);
  }
}
