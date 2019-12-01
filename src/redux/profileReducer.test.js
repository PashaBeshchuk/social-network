import profileReducer, { addPostProfile, setUsersProfile, setProfileStatus } from "./profileReducer";

let state = {
    postsData: [
        { id: 0, message: "Hi, how are you?", likesCount: "15" },
        { id: 1, message: "My first post", likesCount: "20" }
    ],
    profile: null,
    status: ""
}
it("add new post", () => {
    let action = addPostProfile("Hello Moto")
    let newPost = profileReducer(state, action)
    expect(newPost.postsData.length).toBe(3)
})

it("set new user", () => {
    let action = setUsersProfile({name:"Pasha", id:"007"})
    let newUsers = profileReducer(state, action)
    expect(!!newUsers.profile).toBe(true)
})
