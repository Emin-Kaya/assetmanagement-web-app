import jwt_decode from "jwt-decode";

const parsJwt = (jwt) => {
    return jwt_decode(jwt);
};


const JwtUtils = {
    parsJwt
}
export default JwtUtils;
