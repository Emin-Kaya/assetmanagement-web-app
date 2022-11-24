import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/applicationUser/";

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("authenticationToken")}` }
};

const getUserDetails = () => {
    return axios.get(API_URL, config).then((response)=> {
        if (response.data) {
            localStorage.setItem("userAccount", JSON.stringify(response.data))
        }

        return response.data;
    });
};


const ApplicationUserService = {
    getUserDetails,
}

export default ApplicationUserService