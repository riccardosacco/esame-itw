import config from "../config.js";

axios.defaults.baseURL = config.API_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${config.TOKEN}`;
