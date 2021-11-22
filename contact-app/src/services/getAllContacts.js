import http from "./HttpService";

export function getContacts(){
    return http.get("/contacts")
}