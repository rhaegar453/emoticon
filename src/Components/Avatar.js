import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Avatar.css";
import { useSpring, animated } from "react-spring";

const Avatar = ({ icon }) => {
    const [expand, setExpand] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const springProps = useSpring({
        width: expand ? 180 : 60,
    });
    const textProps = useSpring({
        opacity: expand ? 1 : 0,
        width: expand ? "100%" : "0%",
        config: {
            duration: 1000,
        },
    });

    return (
        <animated.div
            style={{ ...springProps }}
            className="imageContainer"
            onMouseOver={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
            onAnimationStart
        >
            <img src={icon} className="image"></img>
            {expand && !isAnimating ? (
                <animated.div style={textProps}>
                    <p className="text1">Created By</p>
                    <p className="text2">Shivaraj Bakale</p>
                </animated.div>
            ) : null}
        </animated.div>
    );
};

Avatar.propTypes = {};

export default Avatar;
