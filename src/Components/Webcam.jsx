import React from "react";
import { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import { ShowImage } from "./ShowImage";
import './Webcam.css';

const constrains = {
    audio: false,
    video: {
        width: 1200,
        height: 700,
        facingMode: "user"
    }
};

export const WebcamCapture = () => {

    const [image, setImage] = useState('');
    const WebcamRef = useRef(null);

    const capture = useCallback(() => {
        const image = WebcamRef.current.getScreenshot();
        setImage(image);
    }, 
    [WebcamRef]
    );

    return (
        <>
        <div className="main-container">
            <div className="webcam-container">
                <Webcam
                    audio={false} 
                    height={400} 
                    ref={WebcamRef} 
                    screenshotFormat="image/jpeg" 
                    width={400} 
                    constrains={constrains} 
                />
            </div>
            <ShowImage image={image} className="image-container" />
        </div>
        <div className="button-container">
            <button onClick={(e) => {e.preventDefault(); capture()}}>Capture</button>
        </div>
        </>
    )
}
