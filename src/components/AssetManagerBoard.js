import React, { useState, useEffect } from "react";


const AssetManagerBoard = () => {
    const [content, setContent] = useState("");

    useEffect(() => {


        setContent("Asset Manager Board");

    }, []);

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>
        </div>
    );
};

export default AssetManagerBoard;
