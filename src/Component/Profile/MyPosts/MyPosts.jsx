import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";
import {addPostActionCreation, updateNewPostTextActionCreator} from "../../../Redux/state";



const MyPosts = (props) => {
    let postsElement = props.posts.posts
        .map(p => <Posts message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreation())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)

    }

    return <div className={s.postsBlock}>
        <h1>My post</h1>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>

            <button onClick={addPost}>Add posts</button>
            <button>Remove</button>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;