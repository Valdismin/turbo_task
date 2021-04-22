import axios from "axios";


const instance =axios.create({
    baseURL: "https://api.github.com/"
});


export const GithubAPI = {
    getUsers(q:string) {
        return instance.get(`search/users?q=${q}&page=1`).then(res=>res.data)
    }
}