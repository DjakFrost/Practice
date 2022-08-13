import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Posts/Posts";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

let maxLength10 = maxLengthCreator(10)


function MyPosts(props) {
    let postsElement = props.posts
        .map(p => <Posts key={p.id} message={p.message} likesCount={p.likesCount}/>)


    let onAddPost = (value) => {
        props.addPost(value.newMessageBody)
    }
    return <div className={s.postsBlock}>
        <h1>My post</h1>
        <div>
            <AddPostFormRedux onSubmit={onAddPost}/>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

const AddPostForm=(props)=>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newMessageBody" validate={[required, maxLength10]}/>
            <div><button>Add Post</button></div>
        </div>

    </form>
}

const AddPostFormRedux = reduxForm({form:"profileAddPostForm"})(AddPostForm)

export default MyPosts;