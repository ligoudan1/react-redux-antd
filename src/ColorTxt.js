import React, { useContext } from 'react';
import { ColorContext } from './Color'
const ColorTxt = function () {

    const { color } = useContext(ColorContext);

    return (
        <div style={{ 'color': color }}>{`这是${color}`}</div>
    )
}
export default ColorTxt;