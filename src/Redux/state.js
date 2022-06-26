const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let store ={
    _state: {
        profile: {
            posts: [
                {id: 0, message: "Hello, what are you name?", likesCount: "14"},
                {id: 1, message: "My name is Kolya", likesCount: "2"},
                {id: 2, message: "Kolya wtf, return my money bitch!!!!!", likesCount: "20"},
            ],
            newPostText: 'hellogad'
        },
        messagesPage:
            {
                dialogs: [
                    {id: 0, name: "Vadim", avatar: "https://www.blast.hk/attachments/64804/"},
                    {
                        id: 1,
                        name: 'Kolya',
                        avatar: "https://i.pinimg.com/originals/14/df/bf/14dfbf0e75988b5daa3aaccddba0eb6d.jpg"
                    },
                    {
                        id: 2,
                        name: 'Egor',
                        avatar: "https://vjoy.cc/wp-content/uploads/2020/10/foto-dlya-avatarki-dlya-parnej-v-vk011.jpg"
                    },
                    {
                        id: 3,
                        name: 'Ronin',
                        avatar: "https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg"
                    },
                    {
                        id: 4,
                        name: 'Cocker',
                        avatar: "https://papik.pro/uploads/posts/2021-09/1631997549_6-papik-pro-p-krutie-avatarki-risunki-6.jpg"
                    },
                    {
                        id: 5,
                        name: 'Nekto',
                        avatar: "http://sun9-8.userapi.com/s/v1/if1/WaepbKN4IgFKIzC1A5Pu6mHBY5kFiNISZRQ1InIX6mg5fD3FyUsqeVZTAaYsbkcoQch_JQA8.jpg?size=200x300&quality=96&crop=0,0,200,300&ava=1"
                    }
                ],
                message: [
                    {id: 0, message: "Hi all"},
                    {id: 1, message: "Hi bro, how are you"},
                    {id: 2, message: "vzzzzz"},
                    {id: 3, message: "..."},
                    {id: 4, message: "34"},
                    {id: 5, message: "234"}
                ],
                newMessageText: 'hello'
            }
    },
    _callSubscriber(){
        console.log('State changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer},
    getState() {
        return this._state
    },

    dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {
                id: 3,
                message: this._state.profile.newPostText,
                likesCount: 0}
            this._state.profile.posts.push(newPost)
            this._state.profile.newPostText = ''
            this._callSubscriber()
        }else if(action.type === 'ADD-MESSAGE'){
            let newMessage = {
                id: 6,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.message.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            this._callSubscriber()
        }else if(action.type === "UPDATE-NEW-POST-TEXT"){
            this._state.profile.newPostText = action.newText
            this._callSubscriber()
        }else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.messagesPage.newMessageText=action.newMessage
            this._callSubscriber()
        }
    }

}

export const addPostActionCreation = () => ({type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,newText: text})

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})
export const addMessageActionCreate = (text) => ({type: ADD_MESSAGE, newMessage: text})


export default store;
window.store = store