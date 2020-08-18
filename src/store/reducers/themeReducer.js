import {SET_THEME} from "../actionTypes";

const initialState = {
    theme: 'light',
};

export const themeReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case SET_THEME: {
            return {...newState, theme: action.payload};
        }
        default:
            return state;
    }
};
