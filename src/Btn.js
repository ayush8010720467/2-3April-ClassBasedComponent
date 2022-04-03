import React from 'react';
class Btn extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillUnmount(){
        console.log("componentWillUnmount from Btn component is called ");
    }
    render(){
        return <button onClick={this.props.checkUnmounting}>Check unmounting</button>
    }
}
export default Btn;
