import axios from "axios";
import CategoriesList from "../util/List/CategoriesList";
//

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const options = {
  method: "GET",
  url: BASE_URL,

  params: {
    // key: "AIzaSyD-ouh6lLHcsu7sjMEk3Cu_bn55yQuc8-g",
    // key: "AIzaSyDEwx3BuGaKBQk6S_G7EDXMl3eO_QMMZpQ", //수아이
    // key: "AIzaSyA229KWb2mwQb9q7Bz5hXjitA2JUc5NsrU",
    // key: "AIzaSyBrPGy2TK9no8ECQzfN9eXdmbItvXE5zhs", // max
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  // console.log(data.items);

  return data;
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
