import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Avatar.css";
import { useSpring, animated } from "react-spring";

const Avatar = ({ icon }) => {
    const [expand, setExpand] = useState(false);
    const textProps = useSpring({
        opacity: expand ? 1 : 0,
        visible: expand ? 1 : 0,
        config: {
            duration: 1000,
        },
    });

    const pProps = useSpring({
        fontSize: expand ? 16 : 0,
        opacity: expand ? 1 : 0,
    });

    return (
        <animated.div
            className="imageContainer"
            onMouseOver={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
            onAnimationStart
        >
            <img src={icon} className="image"></img>
            {expand ? (
                <animated.div style={{ ...textProps, marginLeft: 20 }}>
                    <animated.p className="text1" style={pProps}>
                        Created By
                    </animated.p>
                    <animated.p className="text2" style={pProps}>
                        Shivaraj Bakale
                    </animated.p>
                </animated.div>
            ) : null}
        </animated.div>
    );
};

Avatar.propTypes = {};

export default Avatar;
