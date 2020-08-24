import { GET_NEWS, GET_SELECTED_NEWS, CLEAR_SELECTED_NEWS } from "../types"

const initialState = {
    news: [],
    selectedNews: {}
}

const news = (state = initialState, action) => {
    if (action.type === GET_NEWS) {
        return {...state, news: action.payload}
    } else if (action.type === GET_SELECTED_NEWS) {
        return {...state, selectedNews: action.payload}
    } else if (action.type === CLEAR_SELECTED_NEWS) {
        return {...state, selectedNews: action.payload}
    }


    return state
}

export default news