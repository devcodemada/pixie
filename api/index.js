import axios from "axios";

import { PIXABAY_API_KEY } from "@env";

const apiUrl = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}`;

const formatUrl = (params) => {
  let url = apiUrl + "&per_page=25&safeSearch=true&editors_choice=true";
  if (!params) return url;
  let paramsKeys = Object.keys(params);
  paramsKeys.map((key) => {
    let value = key == "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });

  console.log(`got url : ${url}`);

  return url;
};
export const apiCall = async (params) => {
  try {
    const res = await axios.get(formatUrl(params));
  } catch (error) {
    console.log("got error : ", error.message);
    return {
      success: false,
      msg: error.message,
    };
  }
};
