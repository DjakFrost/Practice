import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 0, message: "Hello, what are you name?", likesCount: "14"},
    {id: 1, message: "My name is Kolya", likesCount: "2"},
]

let dialogs = [
    {id: 0, name: "Vadim"},
    {id: 1, name: 'Kolya'},
    {id: 2, name: 'Egor'},
    {id: 3, name: 'Ronin'},
    {id: 4, name: 'Cocker'},
    {id: 5, name: 'Nekto'}
]

let message = [
    {id: 0, message: "Hi all"},
    {id: 1, message: "Hi bro, how are you"},
    {id: 2, message: "vzzzzz"},
    {id: 3, message: "..."},
    {id: 4, message: "34"},
    {id: 5, message: "234"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App message={message} dialogs ={dialogs} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
