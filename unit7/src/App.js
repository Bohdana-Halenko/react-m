// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class MyClassComponent extends Component {
//   static defaultProps = {
//     title: "Class Component",
//   };

//   static propTypes = {
//     title: PropTypes.string,
//   };

//   render() {
//     return <div>{this.props.title }</div>;
//   }
// }
// export default MyClassComponent;


// 2
// import React, { Component } from "react";

// class App extends Component {
//   static defaultProps = {
//     step: 1,
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0,
//     }
//   }

//   handleInc = () => {
//     this.setState((prevState) => ({
//       value: prevState.value + this.props.step,
//     }))
//   }

//   handleDec = () => {
//     this.setState((prevState) => ({
//       value: prevState.value - this.props.step,
//     }));
//   }


//   render() {
//     const { step } = this.props;
//     const { value } = this.state;

//     return (
//       <div>
//         <h2>Лічильник</h2>
//         <p>Поточне значення: {value}</p>
//         <button onClick={this.handleInc}>+{step}</button>
//         <button onClick={this.handleDec}>-{step}</button>
//       </div>
//     );
//   }
// }

// export default App;


// 3
// import React, { Component } from "react";

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0,
//     };
//   }
//   handleInc = (e) => {
//     console.log("Event:", e);
//     this.setState((prevState) => ({
//       value: prevState.value + this.props.step,
//     }));
//   };

//   handleDec = (e) => {
//     console.log("Event:", e);
//     this.setState((prevState) => ({
//       value: prevState.value - this.props.step,
//     }));
//   };

//   render() {
//     const { step } = this.props;
//     const { value } = this.state;

//     return (
//       <div>
//         <h2>Лічильник</h2>
//         <span>{value}</span>
//         <button type='button' onClick = {this.handleInc}>Inc by {step}</button>
//         <button type='button' onClick={this.handleDec}>Dec by {step}</button>
//       </div>
//     );
//   }
// }

// export default Counter;



// 4
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }

  handleInc(){
    this.setState((prevState, props) => ({
      count: prevState.count + props.step,
    }));
  }

  handleDec(){
    this.setState((prevState, props) => ({
      count: prevState.count - props.step,
    }));
  }

  render() {
    const { step } = this.props;
    const { count } = this.state;

    return (
      <div>
      <h2>Лічильник</h2>
        <span>{count}</span>
   
        <button type="button" onClick={this.handleInc}>
          Inc by {step}
        </button>
    
        <button type="button" onClick={this.handleDec}>
          Dec by {step}
        </button>
    
      </div>
    );
  }
}

Counter.defaultProps = {
  step: 1,
}

export default Counter;