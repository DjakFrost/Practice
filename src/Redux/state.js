import {rerenderEntireTree} from "../render";

let state = {
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
}
export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profile.newPostText,
        likesCount: 0}
    state.profile.posts.push(newPost)
    state.profile.newPostText = ''
    rerenderEntireTree(state)
}


export let addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.messagesPage.newMessageText
    }
    state.messagesPage.message.push(newMessage)
    state.messagesPage.newMessageText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profile.newPostText = newText
    rerenderEntireTree(state)
}
export let updateNewMessageText = (newText) => {
    state.messagesPage.newMessageText=newText
    rerenderEntireTree(state)

    }



export default state;