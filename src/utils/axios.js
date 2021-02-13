import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseUrl: "http://localhost:8000",
  headers,
});

instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export default instance;
