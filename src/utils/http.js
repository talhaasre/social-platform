import axios from "axios";
import { toast } from "react-toastify";
import config from "../config/config";

const http = {
  get: async (url, token) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response);
      const { data } = response;
      return data;

      // if (data.status === 200) {
      //   return data;
      // }

      // if (data.status >= 400 || data.status <= 499) {
      //   toast.error(data.message);

      //   return null;
      // }
    } catch (error) {
      toast.error("Internal Server Error");
      console.log("error", error.response);
    }
  },
  post: async (url, request) => {
    try {
      const response = await axios.post(url, request);
      const { data } = response;

      if (data.status === 200) {
        return data;
      }

      if (data.status >= 400 || data.status <= 499) {
        toast.error(data.message);

        return null;
      }
    } catch (error) {
      toast.error("Internal Server Error");
      console.log("error", error.response);
    }
  },
  put: async (url, request) => {
    try {
      const response = await axios.put(url, request);
      const { data } = response;

      if (data.status === 200) {
        return data;
      }

      if (data.status >= 400 || data.status <= 499) {
        toast.error(data.message);

        return null;
      }
    } catch (error) {
      toast.error("Internal Server Error");
      console.log("error", error.response);
    }
  },
  delete: async (url, request) => {
    try {
      const response = await axios.delete(url, request);
      const { data } = response;

      if (data.status === 200) {
        return data;
      }

      if (data.status >= 400 || data.status <= 499) {
        toast.error(data.message);

        return null;
      }
    } catch (error) {
      toast.error("Internal Server Error");
      console.log("error", error.response);
    }
  },
};

export default http;
