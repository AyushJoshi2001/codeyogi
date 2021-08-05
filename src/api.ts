import axios from "axios";
import { BASE_URL } from "./api/base";
import { User } from "./models/User";

interface MeResponse {
    data : User ;
}

export const me = () => {
    const url = BASE_URL + "/me";
    
    return axios.get<MeResponse>(url).then(response => {
        // console.log("me response: ",response.data.data);
        return response.data.data
    });
}

