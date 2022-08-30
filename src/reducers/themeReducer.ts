import { reducerActionType } from "../types/reducerActionType"

export type ThemeType = {
    status: "dark" | "light";
}

export const themeInitialState: ThemeType = {
    status: "dark"
}

export const themeReducer = (state: ThemeType, action: reducerActionType) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {...state, status: action.payload.status}
        break
    }

    return state
}