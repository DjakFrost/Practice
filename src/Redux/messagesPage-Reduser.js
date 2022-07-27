const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
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
            ]
}

export const messagesPageReducer = (state = initialState, action) => {

    let stateCopy

    switch (action.type) {
        case ADD_MESSAGE:
            let text = action.newMessageBody
            return stateCopy = {
                ...state,
                message: [...state.message, {id: 6, message: text}]
            }

            default:
                return state
    }
}

export const addMessageActionCreate = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})
