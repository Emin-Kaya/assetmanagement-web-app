import axios from "axios";
import applicationUserService from "../services/applicationUser.service";


const API_URL = "http://localhost:8080/api/v1/auth/";

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data) {
                localStorage.setItem("authenticationToken", response.data.authenticationToken)
                localStorage.setItem("refreshToken", response.data.refreshToken)
            }

            return response.data;
        });
};

const logout = () => {
    let user = localStorage.getItem("user")
    let refreshToken = localStorage.getItem("refreshToken")

    localStorage.clear()
    return axios.post(API_URL + "signout", {
        user,
        refreshToken
    }).then((response) =>{
        return response.data
    })
}
const AuthService = {
    register,
    login,
    logout
}
export default AuthService;


