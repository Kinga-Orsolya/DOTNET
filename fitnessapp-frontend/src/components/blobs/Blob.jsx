//import React from 'react';
import "./index.css"

const Blob = ({ top, left, backgroundColor }) => {
    const blobStyle = {
        top: top,
        left: left,
        backgroundColor: backgroundColor
    };

    return (
        <div className="background">
            <div className="blob" style={blobStyle}></div>
        </div>
    );
};

export default Blob;