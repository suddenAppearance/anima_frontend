import axios from "axios";

export default class GatewayService {
    constructor(keycloak) {
        const kcToken = keycloak?.token ?? '';
        this.http = axios.create({
            baseURL: process.env.REACT_APP_API_GATEWAY_HOST,
            timeout: 1000,
            headers: {
                Authorization: keycloak ? `Bearer ${kcToken}` : undefined,
            }
        })
    }

    async getFiles(type) {
        return this.http.get("/api/v1/files/", {params: {type: type}})
    }

    async uploadFile(file) {
        let formData = new FormData();
        formData.append("file", file)
        return this.http.put("/api/v1/files/", formData, {headers: {'Content-Type': 'multipart/formdata'}})
    }

    async uploadMeta(meta) {
        console.log(meta)
        return this.http.post("/api/v1/files/", meta)
    }
}