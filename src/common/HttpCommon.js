import axios from "axios";

const HttpCommon = axios.create({
    baseURL: process.env.REACT_APP_AXIOS_BASE_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }
);

export default HttpCommon;