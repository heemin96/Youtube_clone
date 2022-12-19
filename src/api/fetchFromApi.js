import axios from "axios";
import CategoriesList from "../util/List/CategoriesList";
//

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const options = {
  method: "GET",
  url: BASE_URL,

  params: {
    key: "AIzaSyA3mRPgb8NWnOgf0ch66CImJ27X7GuNvKY",
  },
};

export const fetchFromApi = async (url, pageParam = 1) => {
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
