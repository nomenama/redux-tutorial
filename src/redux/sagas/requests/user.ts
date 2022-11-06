import axios from "axios";

export function fetchUser(): any {
    return axios.request({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/users/1`,

    });
}