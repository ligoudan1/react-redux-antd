import React, { Component } from 'react';
import { List } from 'antd';
import { connect } from 'react-redux';
import * as ACTION from './store/actionCreators';
class TodoItem extends Component {

    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 性能优化,如果两个数组完全一致,则不触发视图的更新
        if (nextProps.list.toString() === this.props.list.toString()) {
            return false;
        } else {
            return true;
        }
    }
    
    render() {
        let { list, removeItem } = this.props
        return (
            <List
                style={{ 'width': '300px' }}
                bordered
                dataSource={list}
                renderItem={(item, index) => (
                    <List.Item onClick={() => { removeItem(index) }}>
                        {item}
                    </List.Item>
                )}
            />
        );
    }
}
const stateToProps = (state) => {
    return {
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        removeItem(index) {
            const action = ACTION.ROMVE_ITEM(index)
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoItem);