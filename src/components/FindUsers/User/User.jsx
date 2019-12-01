import React, { Component } from "react"
import css from "./../FindUsers.module.css"
import image from "./../../../image/image.JPG"
import { NavLink } from "react-router-dom"
import { Pagination } from "./Pagination"


class User extends React.Component {
    render() {
        let listUsers = this.props.users.map((item, index) => {
            return <div key={index}>
                <span>
                    <div><NavLink to={`/profile/${item.id}`}><img src={image} /></NavLink></div>
                    {item.followed ?
                        <button disabled={this.props.followingInProgres.some(id => id === item.id)} onClick={() => {
                            this.props.unfollow(item.id)
                        }}>Unfollow</button> :
                        <button disabled={this.props.followingInProgres.some(id => id === item.id)} onClick={() => {
                            this.props.follow(item.id)
                        }}>Follow</button>}
                </span>
                <span>
                    <span>
                        <div>{item.name}</div>
                        <div>{item.id}</div>
                    </span>
                    <span>
                        <div>{"this.props.location.country"}</div>
                        <div>{"this.props.location.city"}</div>
                    </span>
                </span>
            </div>
        })
        return (
            <div>
                <Pagination currentPage={this.props.currentPage} totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} updatePage={this.props.updatePage}/>
                {listUsers}
            </div>
        )
    }
}

export default User