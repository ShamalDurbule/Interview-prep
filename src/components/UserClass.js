import React from "react";
export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
    };
    console.log("Render constructor")
  }

  componentDidMount(){
    console.log("Component is mounted")
    this.timer = setInterval(() => {
      console.log("Show after every 1sec")
    }, 1000);
  }

    componentDidUpdate(prevProps, prevState) {
      // Check if the count has changed
      if (prevState.count1 !== this.state.count1) {
        console.log('Count updated:', this.state.count1);
      }
    }


  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("Component WillUnmount")
  }

  render() {
    console.log("Render")
    return (
      <div className="UserInfo">
        <h1>
         Count1 : {this.state.count1} ,Count2 : {this.state.count2}
        </h1>
        <button onClick={() => this.setState({count1 : this.state.count1 + 1,count2 : this.state.count2 + 2})}>Increment</button>
        <h2>Name : {this.props.name}</h2>
        <h3>Location : {this.props.location}</h3>
        <h4>Contact : 8888095900</h4>
        <h4>Email : sdurbule24@gmail.com</h4>
      </div>
    );
  }
}
