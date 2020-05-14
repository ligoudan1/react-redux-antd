import React, { useContext } from 'react';
import { ColorContext } from './Color';
const ColorBtn = function () {
    const { dispatch } = useContext(ColorContext);

    return (
        <div>
            <button onClick={() => {
                dispatch({ type: 'setColor', value: 'red' })
            }}>红色</button>
            <button onClick={() => {
                dispatch({ type: 'setColor', value: 'green' })
            }}>绿色</button>
        </div>
    )
}

export default ColorBtn;