import http from "./HttpService";

export function getOneContact(id){
    return http.get(`/contacts/${id}`)
}