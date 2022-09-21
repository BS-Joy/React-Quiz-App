import React from 'react';
import VideoClasses from "./styles/Video.module.css"
import img from "../assets/images/3.jpg"

const Video = () => {
    return (
        <a href="quiz.html">
            <div className={VideoClasses.video}>
                <img src={img} alt="video thumbnail" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={VideoClasses.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    );
}

export default Video;
