import * as TYPES from './actionTypes';
const defaultState = {
    inputValue: '',
    list: [
        '1', '2', '3'
    ]
}
export default (state = defaultState, action) => {
    if (action.type === TYPES.UPDATE_INPUTVALUE) {
        let newState = JSON.parse(JSON.stringify(state)); // 深拷贝state
        newState.inputValue = action.value;
        return newState
    }
    if (action.type === TYPES.UPDATE_LIST) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = [...newState.list, newState.inputValue];
        newState.inputValue = "";
        return newState
    }
    if (action.type === TYPES.REMOVE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        console.log(action.index);

        newState.list.splice(action.index, 1);
        return newState
    }
    return state
}