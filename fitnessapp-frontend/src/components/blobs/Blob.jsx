//import React from 'react';

const Blob = ({ top, left, backgroundColor }) => {
    import("./index.css");
    
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