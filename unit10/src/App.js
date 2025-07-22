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
// import React, { Component } from "react";
//  const STATE = {
//      login: "",
//      email: "",
//      password: "",
//      agreed: false,
//  };

// class SingleForm extends Component {
//     state = { ...STATE };

//     handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         this.setState({[name]: type === "checkbox" ? checked : value});
//     }

//     handleSubmit = e => {
//         e.preventDefault();

//         const { login, email, password, agreed } = this.state;
//         console.log(`login: ${login}, email: ${email}, password: ${password}, ${agreed}`)
//         // this.props.onSubmit({ ...this.state });
//         // this.reset();
//         this.setState({...STATE})
//     }

//     // reset = () => {
//     //     this.setState({...STATE})
//     // }


//     render() {
//         const { login, email, password, agreed } = this.state;

//         return (
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               Name
//               <input
//                 type="text"
//                 placeholder="Your login"
//                 value={login}
//                 onChange={this.handleChange}
//                 name="login"
//               />
//             </label>
//             <label>
//               Email
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 value={email}
//                 onChange={this.handleChange}
//                 name="email"
//               />
//             </label>
//             <label>
//               Password
//               <input
//                 type="password"
//                 placeholder="Your password"
//                 value={password}
//                 onChange={this.handleChange}
//                 name="password"
//               />
//             </label>
//             <label>
//               Agree
//               <input
//                 type="checkbox"
//                 checked={agreed}
//                 onChange={this.handleChange}
//                 name="agreed"
//               />
//             </label>
//             <button type="submit" disabled={!agreed}>
//               sing up as {login}
//             </button>
//           </form>
//         );
//     }
// }

// class App extends Component{
//     handleUp = values => {
//         console.log(values)
//     }
//     render() {
//         return (
//             <>
//                 <h1>Sing Up</h1>
//                 <SingleForm onSubmit={this.handleUp } />
//             </>
//         )
//     }
// }

// export default App;

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











// 22.07
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Feedback = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too short!")
    .max(55, "Too long!")
    .required("Requeired!"),
  email: Yup.string().email("@").required("Requeired!"),
  massage: Yup.string()
    .min(20, "Too short!")
    .max(256, "Too long!")
    .required("Requeired!"),
  level: Yup.string().oneOf(["1", "2"]).required("Requeired!"),
});

const initialValues = {
  username: "",
  email: "",
  massage: '',
  level: '',
};
const App = () => {
  const nameField = useId();
  const emailField = useId();
  const comField = useId();
  const levelField = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={Feedback}
    >
      <Form>
        <label htmlFor={nameField}>Username:</label>
        <Field type="text" name="username" id={nameField} />
        <ErrorMessage
          name="username"
          component="div"
          style={{ color: "red" }}
        />

        <label htmlFor={emailField}>Email:</label>
        <Field type="email" name="email" id={emailField} />
        <ErrorMessage name="email" component="div" style={{ color: "red" }} />

        <label htmlFor={comField}>Comment:</label>
        <Field as="textarea" rows="5" id={comField} name="massage" />
        <ErrorMessage name="massage" component="div" style={{ color: "red" }} />

        <label htmlFor={levelField}>Level:</label>
        <Field as="select" name="level" id={levelField}>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Field>
        <ErrorMessage name="level" component="div" style={{ color: "red" }} />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default App;