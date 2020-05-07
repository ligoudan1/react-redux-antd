import * as TYPES from './actionTypes';

export const INPUT_CHANGE = (value) => ({
    type: TYPES.UPDATE_INPUTVALUE,
    value
})

export const ADD_ITEM = () => ({
    type: TYPES.UPDATE_LIST
})

export const ROMVE_ITEM = (index) => ({
    type: TYPES.REMOVE_ITEM,
    index
})