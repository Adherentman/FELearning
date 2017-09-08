<button class="btn btn-blue">
    <em>Confirm</em>
</button>

{
    type: 'button',
    props: {
        className: 'btn btn-blue',
        children: {
            type: 'em',
            props: {
                children: 'Confirm'
            }
        }
    }
}

// 封装Button元素
const Button = ({ color, text }) => {
    return {
        type: 'button',
        props: {
            className: 'btn btn-${color}',
            children: {
                type: 'em',
                props: {
                    children: text,
                },
            },
        },
    };
}

//调用
Button({color:'blue', text:'Hi'});

//这样构建的元素就是自定义元素，我们可以称为组件元素

{
    type: 'Button',
    props: {
        color: 'blue',
        children: 'Confirm'
    }
}

//将Button组件通过Babel转译成React可以执行的代码

var Button = function Button() {
    return React.createElement(
        Button,
        {color: 'blue'},
        'Hi'
    )
};