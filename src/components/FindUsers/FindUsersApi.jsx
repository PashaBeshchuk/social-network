import React, { Component } from "react"
import User from "./User/User"
import Preloader from "../Common/Preloader/Preloader"

class FindUsers extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    updatePage(event) {
        let pageNumber = +event.target.firstChild.data
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.changeCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFinishLoad ? <Preloader /> : null}
            <User
                users={this.props.users}
                updatePage={this.updatePage.bind(this)}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                followingInProgres={this.props.followingInProgres}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
            />
        </>

    }
}

export default FindUsers