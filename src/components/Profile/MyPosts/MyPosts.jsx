import React, { PureComponent } from "react";
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form"
import { stateField, maxWords } from "../../../util/varibals/validators";
import { Textarea, Input, createNewForm } from "../../Common/FormsControl/FormsControl";



let maxLength10 = maxWords(10)

const MyPosts = React.memo( props => {
    const onSubmit = (post) => {
        props.addPost(post.postMessage)
    }
    let listPosts = props.postsData.map((item, index)=>{
        return <Post key={index} message={item.message} likesCount={item.likesCount} />
    })
    return (
        <div className={css.item}>
            My posts
            <div className={css.fieldEntry}>
                <ReduxPostField onSubmit={onSubmit}/>
            </div>
            {listPosts}
        </div>
    )
} )



let PostField = (props) => {
    
    return <form onSubmit={props.handleSubmit}>
        {createNewForm("postMessage", Textarea, "Enter your new post", [stateField, maxLength10])}
        <div><button>App post</button></div>
    </form>
}
let ReduxPostField = reduxForm({form:"postField"})(PostField)
export default MyPosts;