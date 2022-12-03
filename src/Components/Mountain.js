import React, { useState } from 'react';

function Mountain() {

    const [triangle, setTriangle] = useState(75)

    const [triangleHeightValue, setTriangleHeightValue] = useState({
        width: "0",
        height: "0",
        border: `75px solid transparent`,
        borderTop: "0",
        borderBottom: `${triangle}px solid black`,
    })

    function makeTriangle() {
        setTriangle((triangle) => triangle + 10)
        setTriangleHeightValue({
            width: "0",
            height: "0",
            border: `75px solid transparent`,
            borderTop: "0",
            borderBottom: `${triangle}px solid black`,
        })
    }
    return(
        <div className="triangle" style={triangleHeightValue} onClick={makeTriangle}></div>
    )
}

export default Mountain;