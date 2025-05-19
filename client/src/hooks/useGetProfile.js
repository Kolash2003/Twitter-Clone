import axios from "axios";
import { USER_API_END_POINT } from "../utils/component.js";
import { useEffect } from "react";

const useGetProfile = async (id) => {
  useEffect(() => {
    try {
      const res = axios.get(`${USER_API_END_POINT}/me/${id}`, {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
};

export default useGetProfile;
