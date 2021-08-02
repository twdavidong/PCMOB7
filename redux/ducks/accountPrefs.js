export const CHANGE_MODE = "change_mode";
export const UPLOAD_PIC = "profile_picture";
export const DELETE_PIC = "delete_photo";

// okay! Do not touch! ===============================================================

const initialState = {
    isDark : false,
    profilePicture : null
};

export function changeModeAction() {
    return { type: CHANGE_MODE }
}

export function uploadPicAction() {
    return { type : UPLOAD_PIC }
}

export function deletePicAction() {
    return{ type : DELETE_PIC }
}

export default function accountPrefReducer(state = initialState, action) {
    switch (action.type) {
        /*
        case LIGHT_MODE:
            return { ...state, isDark: false }
        case DARK_MODE:
            return { ...state, isDark: true }
        */
        case CHANGE_MODE:
            return { ...state, isDark: !state.isDark }
        case UPLOAD_PIC:
            return { ...state, profilePicture: action.payload }
        case DELETE_PIC:
            return { ...state, profilePicture: null }
        default:
            return state;
    }
}