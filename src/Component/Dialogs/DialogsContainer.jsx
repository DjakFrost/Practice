import React from "react";
import {addMessageActionCreate, updateNewMessageTextActionCreator} from "../../Redux/messagesPage-Reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    debugger
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


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;