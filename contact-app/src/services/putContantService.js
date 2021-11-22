import http from "./HttpService";

export function putContant(id, data){
    return http.put(`/contacts/${id}`, data)
}