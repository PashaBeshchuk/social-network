import React, { Component } from "react"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"

class Store extends React.Component {
    constructor() {
        super()
        this._state = {
            propfilePage: {
                postsData: [
                    { id: 0, massage: "Hi, how are you?", likesCount: "15" },
                    { id: 1, massage: "My first post", likesCount: "20" }
                ],
                newPostText: "!!!",
            },
            dialogsPage: {
                massages: {
                    mama: ["Hi", "How are you?", "You are here?"],
                    me: []
                },
                dialogsData: [
                    { id: 0, name: "Brat", img: "data:image/jpeg;base64,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" },
                    { id: 1, name: "Zhena", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiN2eyBvHXH5jtUc5N48cYTrhrS_4KX67FKgOKfXlyB7O1RNk" },
                    { id: 2, name: "Papa", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBz0CCHFIGn6ec6sUjveJ6sSA3wF3rzitW5MlPT8qGXEIwG4Uzg" },
                    { id: 3, name: "Mama", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPp5HLcMI4koh-majGYHMRz18cj3u6kQRSHW9qFTd81tkmXm6Q" },
                    { id: 4, name: "Babushka", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZVdthzpsUzjPsvnroyspMl_y5ABcDVU5449DJCXtZDPyh9Um" },
                ],
                newMassage: "!"
            },
            sitebar: {
                friends: [
                    { id: 2, name: "Papa", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBz0CCHFIGn6ec6sUjveJ6sSA3wF3rzitW5MlPT8qGXEIwG4Uzg" },
                    { id: 3, name: "Mama", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPp5HLcMI4koh-majGYHMRz18cj3u6kQRSHW9qFTd81tkmXm6Q" },
                    { id: 4, name: "Babushka", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZVdthzpsUzjPsvnroyspMl_y5ABcDVU5449DJCXtZDPyh9Um" },
                ]
            }
        }
    }
    get state() {
        return this._state
    }
    subscribe(observer) {
        this.renderEntireTree = observer
    }
    renderEntireTree() {
        console.log("Hi")
    }
    dispatch(action) {
        this._state.propfilePage = profileReducer(this._state.propfilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this.renderEntireTree(this._state)
    }
}

export default Store