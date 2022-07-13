import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

export function withRouter(Children){
    return(props) => {
        const match ={ params:useParams()}
        return <Children{...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(respone => {
                this.props.setUserProfile(respone.data)

            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile:state.profile.profile
})

let withURLDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {setUserProfile})(withURLDataContainerComponent);