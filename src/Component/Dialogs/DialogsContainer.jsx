import React from "react";
import {addMessageActionCreate, updateNewMessageTextActionCreator} from "../../Redux/messagesPage-Reduser";
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
        updateNewMessageTextActionCreator: (newMessage) =>{
            dispatch(updateNewMessageTextActionCreator(newMessage))
        },

        addMessageClick: () => {dispatch(addMessageActionCreate())
        }
    }
}



export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)