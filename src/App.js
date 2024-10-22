import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./App.css";
import ToolTip from "./Components/ToolTip";
import Haha from "./Assets/haha.svg";
import Care from "./Assets/care.svg";
import Like from "./Assets/like.svg";
import Love from "./Assets/love.svg";
import Sad from "./Assets/sad.svg";
import Shiv from "./Assets/shiv.png";

import { useSpring, animated, useTransition } from "react-spring";
import { Keyframes } from "react-spring/renderprops";
import * as easings from "d3-ease";
import Avatar from "./Components/Avatar";

const App = () => {
    const [selectedEmotion, setSelectedEmotion] = useState(null);
    let container = useRef(null);

    const springProps = useSpring({
        opacity: selectedEmotion ? 1 : 0,
        height: selectedEmotion ? 240 : 0,
        config: {
            easing: easings.easeCubicInOut,
        },
    });

    useEffect(() => {
        console.log(springProps);
    });

    return (
        <div
            className="appBackground"
            style={{
                width: "100%",
                height: "100vh",
                textAlign: "center",
                marginTop: 30,
            }}
        >
            <div>
                {selectedEmotion ? (
                    <div style={springProps}>
                        <animated.img
                            src={selectedEmotion.icon}
                            style={{ ...springProps }}
                            alt="Hello"
                        ></animated.img>
                        <h1 style={{ color: "white" }}>
                            {selectedEmotion.label}
                        </h1>
                    </div>
                ) : (
                    <h1 style={{ margin: 0, color: "white", margin: 20 }}>
                        Please Select an Emotion
                    </h1>
                )}
                {!selectedEmotion ? (
                    <div style={{ textAlign: "left", display: "inline-block" }}>
                        <ToolTip
                            ref={container}
                            title="Hello World"
                            chooseEmotion={(data) => {
                                setSelectedEmotion(data);
                            }}
                        />
                        <div
                            id="tooltipContainer"
                            style={{ display: "inline-block" }}
                        >
                            <div
                                id="tooltip"
                                onMouseOver={() => container.current.open()}
                                onMouseLeave={() => container.current.close()}
                            >
                                <button className="buttonItem">
                                    Hover Over Me
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button
                        className="buttonItem"
                        onClick={() => setSelectedEmotion(null)}
                    >
                        Close
                    </button>
                )}
                <div style={{ position: "absolute", bottom: 30, right: 80 }}>
                    <Avatar icon={Shiv} />
                </div>
            </div>
        </div>
    );
};

App.propTypes = {};

export const icons = [
    {
        label: "Haha",
        icon: Haha,
        value: "haha",
    },
    {
        label: "Care",
        icon: Care,
        value: "care",
    },
    {
        label: "Like",
        icon: Like,
        value: "haha",
    },
    {
        label: "Sad",
        icon: Sad,
        value: "sad",
    },
    {
        label: "Love",
        icon: Love,
        value: "love",
    },
];

export default App;
