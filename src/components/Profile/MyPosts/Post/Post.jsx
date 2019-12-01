import React, { Component } from "react"
import css from "./Post.module.css"


class Post extends React.Component {
    render() {
        return (
            <div className={css.item}>
                <img src="http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg" />
                    {this.props.message}
                <div>
                    <span>like</span>{this.props.likesCount}
                </div>
            </div>
        )
    }
}
export default Post;
