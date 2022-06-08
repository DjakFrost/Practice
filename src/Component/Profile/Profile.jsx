import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return  <div>
         <div>
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmaqU8aQBRP3I5G-BCN72MNIsTlNLYNyJerw&usqp=CAU'/>
         </div>
         <div>
             ava + description
         </div>
          <MyPosts />
     </div>

}
export default Profile;