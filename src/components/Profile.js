import React from "react";
import applicationUserService from "../services/applicationUser.service";

const Profile = () => {
    const currentUser = JSON.parse(localStorage.getItem("userAccount"))

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser.username}</strong> Profile
                </h3>
            </header>
            <p>
                <strong>Name:</strong> {currentUser.firstName}
            </p>
            <p>
                <strong>Nachname:</strong> {currentUser.lastName}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
        </div>
    );
};

export default Profile;