import axios from "axios";
import { BASE_URL } from "./base";

export interface ProfileData {
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    education?: string;
  }
  
export const updateProfile = (data: ProfileData) => {
    const url = BASE_URL + "/me";
    return axios.put(url, data, {headers: {"Content-Type": "application/json"}});
}