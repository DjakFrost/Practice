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
        <Posts message = "Hello, what are you name?" like = "15" />
        <Posts message = 'My name is Kolya' like = "40" />
        </div>
}

export default MyPosts;