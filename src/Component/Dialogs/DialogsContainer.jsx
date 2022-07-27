import React from "react";
import {addMessageActionCreate} from "../../Redux/messagesPage-Reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs:state.messagesPage.dialogs,
        message:state.messagesPage.message,
        newMessageText:state.messagesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageClick: (newMessageBody) => {dispatch(addMessageActionCreate(newMessageBody))
        }
    }
}



export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)