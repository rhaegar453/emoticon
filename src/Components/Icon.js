import React, { useState } from "react";
import PropTypes from "prop-types";

import { useSpring, animated } from "react-spring";
import * as easing from "d3-ease";

import "./Icon.css";

const Icon = ({ icon }) => {
    const props = useSpring({
        opacity: 1,
        width: 40,
        from: { opacity: 0, width: 0 },
        config: { duration: 50, easing: easing.easeSinInOut },
    });
    return (
        <animated.img
            src={icon}
            className="icon"
            alt="Hello"
            style={{ ...props, margin: 5 }}
        ></animated.img>
    );
};

Icon.propTypes = {
    icon: PropTypes.any.isRequired,
};

export default Icon;
