import React from "react";
import styles from "./Users.module.css";
import UserImage from "../../assets/images/UserImage.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../API/api";

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
                                  usersAPI.deleteFollow(u.id)
                                      .then(data => {
                                          if (data.resultCode === 0) {
                                              props.unFollow(u.id)
                                          }
                                      })
                              }}>Unfollow</button>
                              : <button onClick={() => {
                                  usersAPI.postFollow(u.id)
                                      .then(data => {
                                          if (data.resultCode === 0) {
                                              props.follow(u.id)
                                          }
                                      })
                              }}>Follow</button>}
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