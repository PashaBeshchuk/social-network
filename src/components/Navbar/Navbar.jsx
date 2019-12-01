import React, { Component } from 'react';
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom"

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.state
    }
    render() {
        let listFriends = this.state.friends.map((item, index)=>{
            return <div key={index}><img src={item.img} /> <div>{item.name}</div></div>
        })
        return (
            <nav className={css.nav}>
                <div className={css.item}>
                    <NavLink to="/profile" activeClassName={css.activeLink}>Profile</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/dialogs" activeClassName={css.activeLink}>Messages</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/news" activeClassName={css.activeLink}>News</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/music" activeClassName={css.activeLink}>Music</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/settings" activeClassName={css.activeLink}>Settings</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/find-users" activeClassName={css.activeLink}>Find users</NavLink>
                </div>
                <div className={`${css.item} ${css.friendBlock}`}>
                    <NavLink to="/friends" activeClassName={css.activeLink}>Friends</NavLink>
                    <div className={css.avatar}>{listFriends}</div>
                </div>
            </nav>
        )
    }
}
export default Navbar