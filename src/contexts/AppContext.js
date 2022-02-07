import { createContext, useReducer } from "react";

const inital = {
    index: 0,
    list: [],
    preview: false,
    type: 0,
    loading: false
}

export const AppContext = createContext();

const AppReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_DATA":
            return { ...state, [action.key]: action.value };
        default:
            return { ...state }
    }
}

const updateData = (key, value) => {
    return {
        type: "UPDATE_DATA",
        key,
        value
    }
}

export const AppProvider = (props) => {
    //
    const [state, dispatch] = useReducer(AppReducer, inital);
    //
    return (
        <AppContext.Provider value={{
            state,
            actions: { updateData },
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}