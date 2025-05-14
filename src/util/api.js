
import axios from "./axio.customize";

const createUserApi = (name, email, password) => {
    const URL_API = "/user";
    const data = {
        name, email, password
    }

    return axios.post(URL_API, data);
}

const loginApi = (email, password) => {
    const URL_API = "/login";
    const data = {
        email, password
    }

    return axios.post(URL_API, data);
}

const getUserApi = () => {
    const URL_API = "/user";
    return axios.get(URL_API);
}

export {
    createUserApi, loginApi, getUserApi
}