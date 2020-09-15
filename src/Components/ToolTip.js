import React, { useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";

import ReactDOM from "react-dom";
import "./Icon.css";

import { icons } from "../App";
import Icon from "./Icon";

const ToolTip = forwardRef(({ title, chooseEmotion }, ref) => {
    const [show, setShow] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            open: () => open(),
            close: () => {
                close();
            },
        };
    });

    const iconClick = (data) => {
        chooseEmotion(data);
        close();
    };

    const open = () => setShow(true);
    const close = () => {
        setTimeout(() => {
            if (isHovering) {
                setShow(false);
                setIsHovering(false);
            }
        }, 300);
    };

    if (show) {
        return ReactDOM.createPortal(
            <div
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => {
                    close();
                }}
                className="toolTip"
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {icons.map((item) => {
                        return (
                            <div onClick={() => iconClick(item)}>
                                <Icon icon={item.icon} />
                            </div>
                        );
                    })}
                </div>
            </div>,
            document.getElementById("tooltipContainer")
        );
    }
    return null;
});

ToolTip.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ToolTip;
