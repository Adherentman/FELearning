/* 
    React生命周期分成两类：
    1.当组件在挂载或卸载时。
    2.当组件接受新的数据时，即组件更新时。
*/

//组件挂载
import React, { Component, PropTypes } from 'react';

class App extends Component {
    //这两个静态属性，可以在类外面访问它们，比如：
    //App.propTypes 和 App.defaultProps.
    static propTypes = {
        //props类型检查器
    };

    static defaultProps = {
        //默认类型
    };
    
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    componentWillMount() {
        //在render方法之 前 执行
    }

    componentDidMount() {
        //在render方法之 后 执行
    }

    render(){
        return <div>This is a demo</div>
    }
}

//组件卸载
import React, { Component, PropTypes } from 'react';

class App extends Component {
   componentWillUnmount() {
    //执行一些清理方法
   }

    render(){
        return <div>This is a demo</div>
    }
}
