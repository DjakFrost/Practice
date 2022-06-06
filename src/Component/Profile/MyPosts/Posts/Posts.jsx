import React from "react";
import classes from "./Posts.module.css";


const Posts = (pro) => {

    return <div className={classes.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAOCTMsRRjRWRQmZQB9geVQmynJHyQI8G1w&usqp=CAU'/>
        {pro.message}
        <div>
        <span>like {pro.like}</span>
        </div>
            </div>
}

export default Posts;