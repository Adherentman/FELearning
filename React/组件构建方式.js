//React.createClass

const Button = React.createClass({
    getDefaultProps(){
        return {
            color: 'blue',
            text: 'Hi',
        };
    },

    render(){
        const { color, text } = this.props;

        return(
            <button className={`btn btn-${color}`}>
                <em>{text}</em>
            </button>
        );
    }
});

//ES6 classes方法

import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        color: 'blue',
        text: 'Hi',
    };

    render() {
        const { color, text } = this.props;

        return(
            <button className={`btn btn-${color}`}>
                <em>{text}</em>
            </button>
        );
    }
}

//无状态函数

function Button({ color = 'blue', text = 'Confirm' }) {
    return (
        <button className={`btn btn-${color}`}>
            <em>{text}</em>
        </button>
    );
}

