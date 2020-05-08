import React, { Component } from 'react'

class About extends Component {
    openHome = () => {
        console.log(this.props);

    }
    render() {
        return (
            <div onClick={this.openHome}>
                about
            </div>
        );
    }
}

export default About;