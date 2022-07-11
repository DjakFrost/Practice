const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 0, message: "Hello, what are you name?", likesCount: "14"},
        {id: 1, message: "My name is Kolya", likesCount: "2"},
        {id: 2, message: "Kolya wtf, return my money bitch!!!!!", likesCount: "20"},
    ],
        newPostText: 'hellogad'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state,
            posts: [...state.posts, newPost],
                newPostText: ''
            }
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText:action.newText}

        }

    default:
    return state
    }
}

export const addPostActionCreation = () => ({type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,newText: text})

export default profileReducer