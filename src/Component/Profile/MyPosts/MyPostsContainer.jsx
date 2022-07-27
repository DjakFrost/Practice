import React from "react";
import {addPostActionCreation} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps =(state) =>{
    return{
        posts: state.profile.posts,
        newPostText:state.profile.newPostText
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
            addPost: (newMessageBody) =>{
                dispatch(addPostActionCreation(newMessageBody))
            }
        }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



export default MyPostsContainer;