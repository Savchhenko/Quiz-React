import { CHANGE_DIFFICULTY, CHANGE_CATEGORY, CHANGE_TYPE, CHANGE_AMOUNT, CHANGE_SCORE } from "./actionsTypes";

const initialState = {
    question_category: "",
    question_difficulty: "",
    question_type: "",
    amount_of_questions: 50,
    score: 0,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CATEGORY:
            return {
                ...state, 
                question_category: action.payload
            };
        case CHANGE_DIFFICULTY:
            return {
                ...state, 
                question_difficulty: action.payload
            };
        case CHANGE_TYPE:
            return {
                ...state, 
                question_type: action.payload
            };
        case CHANGE_AMOUNT:
            return {
                ...state, 
                amount_of_questions: action.payload
            };
        case CHANGE_SCORE:
            return {
                ...state, 
                question_score: action.payload
            };
        default: 
            return state;
    }
};

export default reducer;