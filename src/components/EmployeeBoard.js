import React, { useState, useEffect } from "react";


const EmployeeBoard = () => {
    const [content, setContent] = useState("");

    useEffect(() => {


        setContent("Employee Board");

    }, []);

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>
        </div>
    );
};

export default EmployeeBoard;
