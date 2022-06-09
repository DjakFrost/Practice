import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";


const MyPosts = () => {

    let posts = [
        {id: 0, message: "Hello, what are you name?", likesCount: "14"},
        {id: 1, message: "My name is Kolya", likesCount: "2"},
    ]

    let postElements = posts
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
            {postElements}
        </div>
    </div>
}

export default MyPosts;