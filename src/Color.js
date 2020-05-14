import React, { createContext, useReducer } from 'react'
export const ColorContext = createContext();
const reducer = (state, action) => {
    if (action.type === 'setColor') {
        return action.value
    } else {
        return state
    }
}
const Color = function (props) {
    const [color, dispatch] = useReducer(reducer, 'blue')
    return (
        <ColorContext.Provider value={{ color, dispatch }}>
            {props.children}
        </ColorContext.Provider>
    )
}

export default Color;