import React, { Fragment } from "react";
import backgroundImage from '../../Assets/background.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Food Order</h1>
               <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={backgroundImage} alt="A Delicious Food App." />
            </div>
        </Fragment>
    )
}
export default Header;