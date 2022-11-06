import axios from "axios";

export function fetchUser(id: number): any {
    return axios.request({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/users/${id}`,

    });
}