let initinalState = {
    friends: [
        { id: 2, name: "Papa", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBz0CCHFIGn6ec6sUjveJ6sSA3wF3rzitW5MlPT8qGXEIwG4Uzg" },
        { id: 3, name: "Mama", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPp5HLcMI4koh-majGYHMRz18cj3u6kQRSHW9qFTd81tkmXm6Q" },
        { id: 4, name: "Babushka", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZVdthzpsUzjPsvnroyspMl_y5ABcDVU5449DJCXtZDPyh9Um" },
    ]
}
const sitebarReducer = (state = initinalState, action) =>{
    return state
}

export default sitebarReducer;