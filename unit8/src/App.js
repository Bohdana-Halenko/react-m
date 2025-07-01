import React, { Component } from 'react';

// class Toggle extends Component {
//   state = {
//     isOpen: false,
//     value: 0,
//     step: 1,
//   };

//   hide = () => this.setState({ isOpen: false });

//   show = () => this.setState({ isOpen: true });

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;

//     return (
//       <>
//         <button onClick={this.show}>Show</button>
//         <button onClick={this.hide}>Hide</button>
//         {isOpen && children}
//       </>
//     );
//   }
// }


const current = {
  a: 5,
  b: 10,
  c: 15
}

const stateNew = {
  b: 6,
  d: 20,
}

const next = {...current, ...stateNew} //a: 5, b: 6, c: 15, d: 20