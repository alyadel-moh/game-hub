import axios from "axios";
export interface fetchresponse<T>
{
    count : number;
    results : T[]
}
export default axios.create({
    baseURL : "https://api.rawg.io/api",   // remove /games
    params : {
        key : 'e9f24d1bcdc644728bdfe321203b99b1'
    }
})