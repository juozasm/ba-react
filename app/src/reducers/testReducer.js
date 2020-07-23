import { TEST_ACTION } from "../constants/testConstants"

const testReducer = (state = {}, action) => {
    switch (action.type) {
        case TEST_ACTION:
            return {
                ...state,
                // test: action.test
                test: action.payload,
            }
        default:
            return state
    }
}

export default testReducer
