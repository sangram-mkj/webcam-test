import React from "react";


export const ShowImage = (props) => {
    return (
        <div>
            <img src={props.image} alt="Please smile and click 'capture'." />
        </div>
    )
}