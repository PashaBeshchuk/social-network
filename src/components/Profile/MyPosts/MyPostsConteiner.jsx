import { updateNewPostTextProfile, addPostProfile} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) =>{
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addPost: (post)=>{
            dispatch(addPostProfile(post))
        }
    }
}
const MyPostsContenier = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContenier;