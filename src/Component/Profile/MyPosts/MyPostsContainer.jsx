import React from "react";
import {addPostActionCreation, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState()


                let addPost = () => {
                    store.dispatch(addPostActionCreation())
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action)
                }

                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profile.posts}
                    newPostText={state.profile.newPostText}/>
            }
        }

    </StoreContext.Consumer>
    )
}


export default MyPostsContainer;