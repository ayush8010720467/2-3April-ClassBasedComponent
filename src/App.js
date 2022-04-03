import logo from './logo.svg';
import './App.css';
import React from 'react'
import Btn from './Btn';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      "name": 'Aditya',
      "age": 24,
      "showBtn": true
    }
    console.log("This is the constructor that is being called");
    this.doRerender = 1;
  }
  changeName(){
    // this.setState({name: "Ayush"});
    this.setState({showBtn: false})
    // this.doRerender = 98213;
    // console.log(this.doRerender);
    // this.forceUpdate(()=>{console.log("This is the callback from forceUpdate")});
  }
  componentDidMount(){
    console.log("This is the componentDidMount method that is being called");
  }
  static getDerivedStateFromProps(props, state){
    console.log("This is the getDerivedStateFromProps method that is being called", props, state);
    
    return { ...props};
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate gets called",nextProps, nextState);
    // if(nextState.name !== this.state.name){
    //   return true;
    // }
    // return false;
    return true;
  }
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("getSnapshotBeforeUpdate is called")
      /// 10 sec;
      return null;
  }
  componentDidUpdate(prevProps, prevState, snapshort){
    console.log("componentDidUpdate gets called", prevProps,prevState, snapshort);
    // alert("Name has been updated");
  }
  render(){
    this.changeName.bind(this);
    console.log("This is the render method that is being called");
    return <>
            {this.state.showBtn?<Btn checkUnmounting={()=>this.changeName.bind(this)()}></Btn>: <>No Btn </>}
            Hello from React class based component 
            <span onClick={()=>this.changeName.bind(this)()}> {this.state.name}</span>
        </>
  }
}

export default App;
