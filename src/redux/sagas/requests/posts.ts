import axios from "axios";

export function fetchPost(): any {
    return axios.request({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/posts`,

    });
}