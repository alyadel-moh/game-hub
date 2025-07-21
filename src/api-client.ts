import axios from "axios";
export default axios.create({
    baseURL : "https://api.rawg.io/api",   // remove /games
    params : {
        key : 'e9f24d1bcdc644728bdfe321203b99b1'
    }
})