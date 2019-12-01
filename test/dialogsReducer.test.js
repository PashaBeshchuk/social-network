//import { addMessageCreator } from "../src/redux/dialogsReducer"
//import dialogsReducer from "../src/redux/dialogsReducer"
let assert = require('chai').assert;
let dialogs = require("../src/redux/dialogsReducer.js")

describe("Add new Me massage", function () {
    let state = {
        messages: {
            mama: ["Hi", "How are you?", "You are here?"],
            me: []
        }
   }
    it("Add new massage",  function () {
       let action = dialogs.addMessageCreator("HI")
        let newMassage = dialogs.dialogsReducer(state, action)
        console.log(dialogs.dialogsReducer)
       //assert.deepEqual([],[])
   })
})