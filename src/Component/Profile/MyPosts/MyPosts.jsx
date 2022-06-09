import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";


const MyPosts = () => {
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
        <Posts message="Hello, what are you name?" like="15"/>
        <Posts message='My name is Kolya' like="40"/>
    </div>
    </div>
}

export default MyPosts;