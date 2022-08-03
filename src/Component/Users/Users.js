import React from "react";
import Paginator from "../Common/Paginators/Paginator";
import User from "./User";

let Users = ({currentPage,totalUsersCount, pageSize,onPageChanged,users,...props}) => {
    return <div>
    <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize}
               onPageChanged={onPageChanged}/>
        {users.map(u => <User key={u.id}
                              user={u}
                              followingInProgress={props.followingInProgress}
                              follow={props.follow}
                              unFollow={props.unFollow}
            />
        )
        }
          </div>
}

export default Users