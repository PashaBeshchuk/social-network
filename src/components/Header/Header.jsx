import React, { Component } from 'react';
import css from './Header.module.css';
import headerImage from "../../image/headerImage.jpg"
import {NavLink} from "react-router-dom"
class Header extends React.Component {
    render() {
        return <header className={css.header}>
            {/* <img src="https://ru.tokkoro.com/picsup/2866528-nature-trees-forest-sun-rays-leaves-branch-plants-fall-yellow-hill___landscape-nature-wallpapers.jpg" /> */}
            <img src={headerImage} />
            <div className={css.login}>{this.props.userAuth 
            ? <div>
                {this.props.login}
                <div><button onClick={this.props.logoutUser}>Logout</button></div>
            </div> 
            : <NavLink to = "/login">Login</NavLink>}</div>    
        </header>
    }
}
export default Header