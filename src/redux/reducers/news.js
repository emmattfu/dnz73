import { GET_NEWS } from "../types"

const initialState = {
    news: []
}

const news = (state = initialState, action) => {
    if (action.type === GET_NEWS) {
        return {...state, news: action.payload}
    }


    return state
}

export default news