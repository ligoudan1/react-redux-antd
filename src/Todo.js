import React, { Component } from 'react'
import { Input, Button } from 'antd';
import store from './store'
import * as ACTION from './store/actionCreators';
import TodoItem from './TodoItem';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { ...store.getState() };
        this.inputChange = this.inputChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.storeChage = this.storeChage.bind(this);
        store.subscribe(this.storeChage)
    }
    storeChage() {
        this.setState({ ...store.getState() })
    }
    inputChange(e) {
        const action = ACTION.INPUT_CHANGE(e.target.value)
        store.dispatch(action)
    }
    addItem() {
        const action = ACTION.ADD_ITEM()
        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <Input style={{ 'width': '200px', 'margin': '20px' }} value={this.state.inputValue} onChange={this.inputChange}></Input>
                <Button type="primary" onClick={this.addItem}>增加</Button>
                <TodoItem />
            </div>
        );
    }
}

export default Todo;