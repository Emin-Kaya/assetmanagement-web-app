import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import ApplicationUserService from "./services/applicationUser.service";
import JwtUtils from "./utils/JwtUtils";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import EmployeeBoard from "./components/EmployeeBoard";
import AssetManagerBoard from "./components/AssetManagerBoard";
import AdminBoard from "./components/AdminBoard";


const App = () => {
    const [showEmployeeBoard, setShowEmployeeBoard] = useState(false);
    const [showAssetManagerBoard, setShowAssetManagerBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(()=>{
        const jwt = localStorage.getItem("authenticationToken")

        if(jwt){
            const user = ApplicationUserService.getUserDetails();
            const role = JwtUtils.parsJwt(jwt).role

            if(user){
                setCurrentUser(user)
                setShowEmployeeBoard(role.includes("ROLE_EMPLOYEE"))
                setShowAssetManagerBoard(role.includes("ROLE_MANAGER"))
                setShowAdminBoard(role.includes("ROLE_ADMIN"))
            }
        }else{
            console.log("test")
        }




    }, []);

        const logOut = () => {
            AuthService.logout();
            setShowEmployeeBoard(false);
            setShowAssetManagerBoard(false);
            setShowAdminBoard(false);
            setCurrentUser(undefined);
        };

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link">
                            Home
                        </Link>
                    </li>
                    {showEmployeeBoard && (
                        <li className="nav-item">
                            <Link to={"/employee"} className="nav-link">
                                Employee Board
                            </Link>
                        </li>
                    )}

                    {showAssetManagerBoard && (
                        <li className="nav-item">
                            <Link to={"/manager"} className="nav-link">
                               Manager
                            </Link>
                        </li>
                    )}

                    {showAdminBoard && (
                        <li className="nav-item">
                            <Link to={"/admin"} className="nav-link">
                                Admin Board
                            </Link>
                        </li>
                    )}
                </div>

                {currentUser ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={logOut}>
                                    LogOut
                                </a>
                            </li>
                        </div>
                    ): (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </div>
                )}
            </nav>
            <div className="container mt-3">
                <Routes>
                    <Route exact path={"/"} element={<Home />} />
                    <Route exact path={"/home"} element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route path="/employee" element={<EmployeeBoard/>} />
                    <Route path="/manager" element={<AssetManagerBoard />} />
                    <Route path="/admin" element={<AdminBoard />} />
                </Routes>
            </div>
        </div>
    );

}

export default App;
