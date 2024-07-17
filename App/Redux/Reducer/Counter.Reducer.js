import { DECREMENTCOUNTER, INCREMENTCOUNTER } from "../ActionTypes"


const initialState = {
    count: 0
}

export const counterReducer = (state = initialState, action) => {
    // console.log(action);
    
    switch (action.type) {
        case INCREMENTCOUNTER:
            return {
                count: state.count + 1
            }
        case DECREMENTCOUNTER:
            return {
                count: state.count - 1
            }
        default:
            return state
    }

}


