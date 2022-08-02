import profileReducer, {addPostActionCreation, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 0, message: "Hello, what are you name?", likesCount: "14"},
        {id: 1, message: "My name is Kolya", likesCount: "2"},
        {id: 2, message: "Kolya wtf, return my money bitch!!!!!", likesCount: "20"},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

test('new post add profile reducer', () => {
    let action = addPostActionCreation("New POST")

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
})


test('check valid post message text', () => {
    let action = addPostActionCreation("New POST")

    let newState = profileReducer(state, action)

    expect(newState.posts[3].message).toBe('New POST')
})

test('after deleting length of message should be decrement', () => {
    let action = deletePost(10000)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})


