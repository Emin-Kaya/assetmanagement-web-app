import React, { useState, useEffect } from "react";


const AdminBoard = () => {
    const [content, setContent] = useState("");

    useEffect(() => {


                setContent("Admin Board");

    }, []);

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>
        </div>
    );
};

export default AdminBoard;
