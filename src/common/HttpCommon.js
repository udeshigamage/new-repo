import axios from "axios";

const HttpCommon = axios.create({
    // TODO : Please remove this and use entirely environment variables. This is done to help with the debugging.
    baseURL: process.env.REACT_APP_AXIOS_BASE_URL ? process.env.REACT_APP_AXIOS_BASE_URL : "https://jsonplaceholder.typicode.com",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }
);

export default HttpCommon;