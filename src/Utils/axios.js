import axios from "axios";
const instance = axios.create({ baseURL: "https://ejaice.herokuapp.com" });
export default instance;
