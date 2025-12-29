import React, { useState } from "react";
import "./Header.css";
import { Menu } from "./Menu/Menu";

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(prev => !prev);
    };

    return (
        <>
            {menuVisible && <Menu />}
            <div className="component-header">
                <div className="logo-restaurante"></div>

                <div className="video-publicitario">
                    
                    <video
                    src={process.env.PUBLIC_URL + "/2.mp4"}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    />

                </div>

                <div className="menu-hamburguesa" onClick={toggleMenu}></div>
            </div>
        </>
    );
}

export { Header };
