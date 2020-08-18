import {SET_THEME} from "../actionTypes";


export const setTheme = (token) => {
    return {
        type: SET_THEME,
        payload: token,
    };
};



