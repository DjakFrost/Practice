import React from "react";
import styles from "./Users.module.css";
import UserImage from "../../assets/images/UserImage.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let page = []
    for (let i = 1; i <= pageCount; i++) {
        page.push(i)
    }

    return <div>
        <div>
            {page.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}


        </div>
        {
            props.users.map(u => <div key={u.id}>

                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : UserImage} className={styles.photo}/>
                        </NavLink>
                    </div>
                    <div>
                          {u.followed
                              ? <button onClick={() => {
                                  props.unFollow(u.id)
                              }}>Follow</button>
                              : <button onClick={() => {
                                 props.follow(u.id)
                              }}>Unfollow</button>
                          }
                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div><div>{"u.location.city"}</div>
                    </span>
                </span>

            </div>)
        }
    </div>
}

export default Users