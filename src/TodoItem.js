import React, { Component } from 'react';
import { List } from 'antd';
import store from './store'
import * as ACTION from './store/actionCreators';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: store.getState().list
        };
        this.storeChage = this.storeChage.bind(this);
        store.subscribe(this.storeChage);
        this.removeItem = this.removeItem.bind(this)
    }
    storeChage() {
        this.setState({
            list: store.getState().list
        })
    }
    removeItem(index) {
        const action = ACTION.ROMVE_ITEM(index)
        store.dispatch(action)
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 性能优化,如果两个数组完全一致,则不触发视图的更新
        if (nextState.list.toString() === this.state.list.toString()) {
            return false;
        } else {
            return true;
        }
    }
    render() {
        return (
            <List
                style={{ 'width': '300px' }}
                bordered
                dataSource={this.state.list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => { this.removeItem(index) }}>
                        {item}
                    </List.Item>
                )}
            />
        );
    }
}

export default TodoItem;