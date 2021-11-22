import http from "./HttpService";

export function postContact(data){
    return http.post("/contacts", data)
}