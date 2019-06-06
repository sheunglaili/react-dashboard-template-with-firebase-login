export const actionTypes = {
    LOADING_START:'LOADING_START',
    LOADING_END:'LOADING_END'
}


export const startLoading = () => {
    return {type:actionTypes.LOADING_START}
}

export const endLoading = () => ({type:actionTypes.LOADING_END})