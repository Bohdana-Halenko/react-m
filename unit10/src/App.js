// import React, { Component } from 'react';

// class LoginForm extends Component {
//     handleSubmit = e => {
//         e.preventDefault();

//         const form = e.currentTarget;
//         const login = form.elements.login.value;
//         const password = form.elements.password.value;

//         this.props.onSubmit({ login, password });
//         form.reset();
//     }


//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input type='text' placeholder='login' name='login'/>
//                 <input type='password' placeholder='password' name='password'/>
//                 <button type='submit'>Send</button>
//             </form>
//         )
//     }
// }


// class App extends Component{
//     handleSubmit = values => {
//         console.log('Login:', values);
//     }

//     render() {
//         return (
//             <>
//                 <h1>Login Form</h1>
//                 <LoginForm onSubmit={this.handleSubmit} />
//             </>
//         )
//     }
// }

// export default App;


// 2
// import React, { Component } from "react";

// class App extends Component{
//     state = {
//         inputValue: '',
//     }

//     handelChange = e => {
//         this.setState({inputValue: e.target.value})
//     }
//     render() {
//         const { inputValue } = this.state;

//         return (
//           <div>
//                 <input type="text" value={this.state} onChange={this.handelChange} />
//                 <p>{ inputValue}</p>
//           </div>
//         );
//     }
// }

// export default App;


//3
import React, { Component } from "react";
 const STATE = {
     login: "",
     email: "",
     password: "",
     agreed: false,
 };

class SingleForm extends Component {
    state = { ...STATE };

    handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState({[name]: type === "checkbox" ? checked : value});
    }

    handleSubmit = e => {
        e.preventDefault();

        const { login, email, password, agreed } = this.state;
        console.log(`login: ${login}, email: ${email}, password: ${password}, ${agreed}`)
        // this.props.onSubmit({ ...this.state });
        // this.reset();
        this.setState({...STATE})
    }

    // reset = () => {
    //     this.setState({...STATE})
    // }


    render() {
        const { login, email, password, agreed } = this.state;

        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                placeholder="Your login"
                value={login}
                onChange={this.handleChange}
                name="login"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={this.handleChange}
                name="email"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                placeholder="Your password"
                value={password}
                onChange={this.handleChange}
                name="password"
              />
            </label>
            <label>
              Agree
              <input
                type="checkbox"
                checked={agreed}
                onChange={this.handleChange}
                name="agreed"
              />
            </label>
            <button type="submit" disabled={!agreed}>
              sing up as {login}
            </button>
          </form>
        );
    }
}

class App extends Component{
    handleUp = values => {
        console.log(values)
    }
    render() {
        return (
            <>
                <h1>Sing Up</h1>
                <SingleForm onSubmit={this.handleUp } />
            </>
        )
    }
}

export default App;

//4
// import React from "react";
// import { nanoid } from 'nanoid';

// class Form extends React.Component{
//     loginId = nanoid();

//     render() {
//        return(
//            <form>
//                <label htmlFor={this.loginId}>Login</label>
//                <input type="text" name="login" id={this.loginId } />
//             </form>
//         ) 
//     }
        
// }