// // 27.05
import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// import React from 'react';
// import ReactDOM from "react-dom/client";
// import PropTypes from 'prop-types';
// // import  Product  from "react";



// // const App = () => (
// //   <>
// //     <h1>Our products</h1>
// //     <Product
// //       name="Macbook1"
// //       price={1000}
// //       url="https://content1.rozetka.com.ua/goods/images/big/144249716.jpg"
// //     />
// //   </>
// // ); 

// // const Product = ({url, name, price}) => (
// //   <div>
// //         <h2>{ name}</h2>
// //     <img
// //       src={url}
// //       alt={name}
// //       width="500"
// //     />
// //         <p>Price: { price}</p>
// //   </div>
// // );



// const Profile = ({ name, email }) => (
//   <div>
//     <p>Name: {name}</p>
//     <p>Email: {email}</p>
//   </div>
// );

// const Panel = ({ title, children }) => (
//   <section>
//         <h2>{title}</h2>
//         { children}
//   </section>
// );

// const App = () => (
//   <>
//     <Panel title="Our profile">
//       <Profile name='Bob' email="bob@ukr.net" />
//     </Panel>
//   </>
// );


// Profile.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
// }


// ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
















// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
// import ReactDOM from "react-dom/client";
// import { Card } from "react";


// const img = "https://content1.rozetka.com.ua/goods/images/big/144249716.jpg";
// const productPrice = 1000;

// const data = {
//   id: "000",
//   url: "https://content1.rozetka.com.ua/goods/images/big/144249716.jpg",
//   title: "MacBook",
//   price: 1000,
//   country: {
//     code: 'UA',
//     name: 'Ukraine'
//   }
// };

// const card = (
//   <>
//     <img src={data.url} alt='MacBook' width='500'/>
//     <h2>{data.title}</h2>
//     <p>Price: {data.price}</p>
//     <p>Country: { data.country.name }</p>
//     <button type="button">Buy</button>
//   </>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(card);

// if
// const Mail = ({ message }) => {
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {message.length > 0 && (
//         <p>You have { message.length}</p>
//       )}
//     </div>
//   )
// }


// if...else
// const Mail = ({ username, message }) => {
//   return (
//     <div>
//       <h1>Hello {username}</h1>
//       <p>
//         {message.length > 0
//           ? `You have ${message.length}`
//           : `You dont have message`}
//       </p>
//     </div>
//   );
// }



// const favBooks = [
//   { id: "001", name: "JS" },
//   { id: "002", name: "HTML" },
//   { id: "003", name: "CSS" },
//   { id: "004", name: "React" },
// ];

// const ListBook = ({ books }) => {
//   <ul>
//     {books.map(book => (
//       <li key={book.id}>{ book.name}</li>
//     ))}
//   </ul>
// }



// const favBooks = [
//   { name: "JS" },
//   { name: "HTML" },
//   { name: "CSS" },
//   { name: "React" },
// ];

// const ListBook = ({ books }) => {
//   <ul>
//     {books.map((book, index) => (
//       <li key={index}>{book.name}</li>
//     ))}
//   </ul>;
// }