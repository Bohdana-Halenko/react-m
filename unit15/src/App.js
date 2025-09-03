import {useState, useEffect} from 'react';

// const App = () => {
//     const [value, setValue] = useState(0);
//     return(
//         <div>
//             {value}
//             <button type="button" onClick ={() => setValue(value + 1)}> +1 </button>
//         </div>
//     )
// }


// const App =( ) => {
//     const [state, setState] = useState({
//         username: "",
//         todo: [{text: 'Clean house'}],
//         isModal: true
//     })
// }

// const App = () => {
//     const [username, setUsername] = useState("");
//     const [todo, setTodo] = useState([{text: 'Clean house'}]);
//     const [isModal, setIsModal] = useState(true);
// }


// export default App;



export const App = () => {
    // const [value, setValue] = useState(0);

    useEffect(() => {
       console.log("Mounting");

       return () => {
        console.log("Unmounting")
       }
    }, [])

    return null
}

// export default App;