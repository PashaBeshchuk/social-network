export const stateField = (value) => {
    if (value) { return undefined }
    return "Fild is empty "
}

export const maxWords = (number) => (value) => {
    if(value.length > number) {
        return "Maximum number of words" + number
    } else {
        return undefined;
    }
    
}

export const followUnfollowUpdate = (userId, dispatch, requestAPI, changeFollowinInProgres, changeIsFinishLoad, changeFollow) => {
    dispatch(changeFollowinInProgres(true, userId))
    dispatch(changeIsFinishLoad(true))
    requestAPI(userId).then(response => {
        if (response.resultCode === 0) {
            dispatch(changeFollow(userId))
        }
        dispatch(changeFollowinInProgres(false, userId))
        dispatch(changeIsFinishLoad(false))
    })
}
