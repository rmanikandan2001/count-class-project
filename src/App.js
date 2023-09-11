import React, { Component } from 'react'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      step : 1,
      count: 0
    }

  }
  render() {

    let date = new Date();
    date.setDate(date.getDate() + this.state.count);

    return (
      <div className = 'class'>

        <h1>Date Counter</h1>

        <div>

          <button onClick = {() =>{

            if(this.state.step > 1){
              this.setState({step: this.state.step - 1});
            }}}>-</button>

            step: {this.state.step}

          <button onClick = {() =>{

            if(this.state.step >= 1){
              this.setState({step: this.state.step + 1});

          }}}>+</button>

        </div>

        <div className = 'comp'>

          <button onClick = {() => {
            this.setState({count: this.state.count - this.state.step});
            }}>-</button>

          count: {this.state.count}

          <button onClick = {()=>{
            this.setState({count: this.state.count + this.state.step});
          }}>+</button>

        </div>

        <div className = 'output'>

          {this.state.count >= 0 ? `${this.state.count} days from today is ${date.toDateString()}` : 
          `${this.state.count} days ago from today is ${date.toDateString()}`}

        </div>

      </div>
    )
  }
}

export default App;