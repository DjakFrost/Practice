import React from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Posts/Posts";


const MyPosts = () => {
    return <div>
        My post
        <div>
            <textarea></textarea>
            <button>Add posts</button>
            <button>Remove</button>
        </div>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        </div>
}

export default MyPosts;