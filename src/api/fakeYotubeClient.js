import axios from "axios";

//class 멤버 함수이므로 function 안적어도 된다.
//외부에서 class 쓰기위해.
export default class FakeYoutubeClient {
  async search({ params }) {
    return axios.get(
      `/videos/${params.relatedToVideoId ? "related" : "search"}.json`
    );

    // 다른 방법
    //  ? axios.get("/videos/related.json")
    //  : axios.get("/videos/search.json");
  }
  async videos() {
    return axios.get("/videos/popular.json");
  }

  async channels() {
    return axios.get("/videos/channel.json");
  }

  async categories() {
    return axios.get("/videos/category.json");
  }
}

/**
 * 함수 앞에 # js 에서는 private 함수 클래스
 * 내부적으로는 호출이 가능하지만
 * 외부에서는 호출 불가능함
 */

//  ? axios.get("/videos/related.json")
//  : axios.get("/videos/search.json");
