import React, { useEffect, useState } from "react";

import './ToTop.scss';

import { VscArrowUp } from "react-icons/vsc";

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);


    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible &&
                <div onClick={scrollToTop}>
                    <VscArrowUp />
                </div>}
        </div>
    );
}

export default ToTop
