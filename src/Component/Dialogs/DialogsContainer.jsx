import React from "react";
import {addMessageActionCreate, updateNewMessageTextActionCreator} from "../../Redux/messagesPage-Reduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {

            let state = store.getState().messagesPage

            let onNewMessageChange = (newMessage) => {
                store.dispatch(updateNewMessageTextActionCreator(newMessage))
            }
            let addMessage = () => {
                store.dispatch(addMessageActionCreate())
            }
            return <Dialogs
                updateNewMessageTextActionCreator={onNewMessageChange}
                addMessageClick={addMessage}
                dialogs={state.dialogs}
                message={state.message}
                newMessageText={state.newMessageText}/>
        }
    }
    </StoreContext.Consumer>
}
export default DialogsContainer;