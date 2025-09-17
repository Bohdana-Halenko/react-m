// import { createContext } from "react";
// import ReactDOM from "react-dom/client";

// const MyContext = createContext(defaultValue);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <MyContext.Provider value={...}>
//     <App/>
//   </MyContext.Provider>
// )

// const MyContext = createContext();
// const contextValue = useContext(MyContext);

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <MyContext.Provider>
//       <App/>
//     </MyContext.Provider>
//   )

//   export const useMyContext = () => useContext(MyContext)

// import React, { createContext, useContext } from "react";

// const UserContext = createContext();
// const useUser = () => useContext(UserContext);

// function UserMenu(){
//   const {username} = useUser();
//   return (
//     <>
//     <h2>User name</h2>
//     <p>{username}</p>
//     </>
//   )
// }

// function App(){
//   return(
//     <UserContext.Provider value={{username: "Bob"}}>
//       <div>
//         <UserMenu />
//       </div>
//     </UserContext.Provider>
//   )
// }

// export default App;



// import React, { createContext, useContext, useState } from "react";

// const UserContext = createContext();
// const useUser = () => useContext(UserContext);

// function UserProvider({children}){
//   const [isLogIn, setIsLogIn] = useState(false);
//   const [username, setUsername] = useState(null);

//   const logIn = () =>{
//     setIsLogIn(true);
//     setUsername('Tom');
//   }

//   const logOut = () =>{
//     setIsLogIn(false);
//     setUsername(null);
//   }

//   return(
//     <UserContext.Provider value ={{isLogIn, username, logIn, logOut}}>
//       {children}
//     </UserContext.Provider>
//   )
// }

// function UserMenu(){
//   const {isLogIn, username, logIn, logOut}= useUser();
//   return(
//     <div>
//       {isLogIn && <p>{username}</p>}
//       {isLogIn ? (
//         <button onClick = {logOut}>Log out</button>
//       ) : (
//         <button onClick={logIn}>Log In</button>
//       )}
//     </div>
//   )
// }

// function App(){
// return(
//   <UserProvider>
//     <UserMenu />
//   </UserProvider>
// )
// }

// export default App;


// import { useState, useRef, useEffect } from "react";

// const App = () => {
//   const [value, setValue] = useState(0);
//   const btn = useRef();

//   console.log(btn.current);

//   useEffect(() => {
//     console.log(btn.current);
//   })

//   const handleClick = () =>{
//     console.log(btn.current);
//   }


//   return (
//     <>
//   <button onClick={() => setValue(value+1)}>Click</button>
//   <button onClick={handleClick} ref={btn}>Click</button>
//   </>
//   )
// }

// export default App;

// import {useRef, useEffect } from "react";

// const App = () =>{
//   const valueRef = useRef(0);
//   useEffect(() => {
//     console.log(valueRef.current)
//   });

//   const handleClick= () =>{
//     valueRef.current += 1;
//   }

//   return <button onClick={handleClick}>Click</button>
// }

// export default App;


// import {useRef} from 'react';

// const Player = ({source}) => {
//   const playerRef = useRef();
//   const play = () => playerRef.current.play();
//   const pause = () => playerRef.current.pause();

//   return (
//     <div>
//       <video src={source} ref={playerRef}>
//         Вибачте, ваш браузер не підтримує відео
//       </video>
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   )
// };

// const App =() =>{
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4"/>
// }

// export default App;



// import React from "react";
// import { TextProvider } from "./TextContext";
// import InputBox from "./InputBox";
// import DisplayText from "./DisplayText";

// export default function App(){
//   return(
//     <TextProvider>
//       <InputBox />
//       <DisplayText/>
//     </TextProvider>
//   )
// }




import { forwardRef, useRef, useEffect } from "react";

const CustomButton = forwardRef((props, ref) =>{
  <button ref={ref}>{props.children}</button>
})


const App =()=>{
  const btnRef = useRef();
  useEffect(() => btnRef.current.focus(), []);

  return <CustomButton ref={btnRef}>Button with forward</CustomButton>
}
export default App;

