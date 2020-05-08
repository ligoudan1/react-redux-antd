import React from 'react'
import { Input, Button } from 'antd';
import * as ACTION from './store/actionCreators';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

// 对原有类组件进行改写,改为函数式组件提升页面性能
// class Todo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { ...store.getState() };
//         this.storeChage = this.storeChage.bind(this);
//         store.subscribe(this.storeChage)
//     }
//     storeChage() {
//         this.setState({ ...store.getState() })
//     }

//     render() {
//         let { inputValue, inputChange, addItem } = this.props;
//         return (
//             <div>
//                 <Input style={{ 'width': '200px', 'margin': '20px' }} value={inputValue} onChange={inputChange}></Input>
//                 <Button type="primary" onClick={addItem}>增加</Button>
//                 <TodoItem />
//             </div>
//         );
//     }
// }


// 无状态组件(函数式组件)
// 1.就是一个函数
// 2.不能使用state,只会接收一个props形参,并且直接使用props参数不需要this
// 3.没有生命周期函数
function Todo(props) {
    let { inputValue, inputChange, addItem } = props;
    return (
        <div>
            <Input style={{ 'width': '200px', 'margin': '20px' }} value={inputValue} onChange={inputChange}></Input>
            <Button type="primary" onClick={addItem}>增加</Button>
            <TodoItem />
        </div>
    );
}


// react-redux的对state的映射关系
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

// react-redux中,对执行方法的映射关系
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            const action = ACTION.INPUT_CHANGE(e.target.value)
            dispatch(action)
        },
        addItem() {
            const action = ACTION.ADD_ITEM()
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(Todo);