import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";

const MyPosts = (props) => {
    let postsElement = props.posts.posts
        .map(p => <Posts message={p.message} likesCount={p.likesCount}/>)
    return <div className={s.postsBlock}>
        <h1>My post</h1>
        <div>
            <div>
                <textarea></textarea>
            </div>

            <button>Add posts</button>
            <button>Remove</button>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;