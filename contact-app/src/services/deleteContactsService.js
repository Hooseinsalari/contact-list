import http from "./HttpService";

export function deleteOneContact(id){
    return http.delete(`/contacts/${id}`)
}