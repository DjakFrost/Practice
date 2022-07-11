import React, {useId} from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUserAC, unFollowAC} from "../../Redux/users-reducer";
import axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(respone => {
                this.props.setUsers(respone.data.items)
                this.props.setTotalUserCount(respone.data.totalCount)

            })
    }

    onPageChanged =(pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(respone => {
                this.props.setUsers(respone.data.items)
            })
    }

    render()  {


        return <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        unFollow: (userId) => {
            dispatch(followAC(userId))
        },
        setUsers:(users) =>{
            dispatch(setUserAC(users))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount:(totalCount)=>{
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer)