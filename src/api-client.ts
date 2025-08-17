import axios, { type AxiosRequestConfig } from "axios";
const axiosinstance = axios.create({
    baseURL : "https://api.rawg.io/api",   // remove /games
    params : {
        key : 'e9f24d1bcdc644728bdfe321203b99b1'
    }
})
class APIClient<T>{
    endpoint : string
    constructor(endpoint : string){
        this.endpoint = endpoint
    }
    getAll = (config : AxiosRequestConfig)  => {
        return axiosinstance.get<fetchresponse<T>>(this.endpoint,config).then(res => res.data)
    }
}
export interface fetchresponse<T>
{
    count : number;
    results : T[]
}
export default APIClient