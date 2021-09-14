import React, { Fragment } from "react";

import logo from "../assets/logo.jpg"
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Volunteer State Roofing, LLC </h1>
               
            </header>
            <div className={classes["main-image"]}>
                <img src={logo} alt="logo" />
            </div>
        </Fragment>
    );
};

export default Header;

