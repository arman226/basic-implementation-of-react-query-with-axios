import axios from "axios";
import { REQUEST_TIMEOUT_SECONDS } from "data/constants";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: REQUEST_TIMEOUT_SECONDS * 10000,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
