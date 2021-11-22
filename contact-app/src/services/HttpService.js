import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001"

const http = {
    get: axios.get,
    delete: axios.delete,
    post: axios.post,
    put: axios.put
}

export default http;