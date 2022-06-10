import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import Posts from "./MyPosts/Posts/Posts";


const Profile = (props) => {

    let posts = props.posts
        .map(p => <Posts message={p.message} likesCount={p.likesCount}/>)

    return <div>
        <ProfileInfo/>
        <MyPosts posts = {posts}/>
    </div>

}
export default Profile;