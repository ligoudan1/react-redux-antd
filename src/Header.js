import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    openAbuot = () => {
        this.props.history.push('/about')
    }
    render() {
        return (
            <div>
                <Link to="/">
                    <span>首页</span>
                </Link>
                <div onClick={this.openAbuot}>
                    关于
                </div>
            </div>
        );
    }
}

export default withRouter(Header);