import React from 'react';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import './Header.css';

// ---------HEADER OF OUR CLASSES PAGE------

const Header = () => {
    return (
        <div className="img-fluid banner" style={{ height: "100vh", color: "white", textAlign: "center" }} >
            <HomeNavbar></HomeNavbar>
            <div>
                <h1 style={{ fontSize: "100px", paddingTop: "250px" }}>  OUR CLASSES</h1>
            </div>
        </div>
    );
};

export default Header;