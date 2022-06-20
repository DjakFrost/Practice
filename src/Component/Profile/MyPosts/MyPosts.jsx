import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = (props) => {
    let postsElement = props.posts.posts
        .map(p => <Posts message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
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