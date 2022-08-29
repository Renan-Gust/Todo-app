import { reducerActionType } from "../types/reducerActionType"

export type ThemeType = {
    theme: string;
}

export const themeInitialState: ThemeType = {
    theme: "dark"
}

export const themeReducer = (state: ThemeType, action: reducerActionType) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {...state, name: action.payload.theme}
        break
    }

    return state
}