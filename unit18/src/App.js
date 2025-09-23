// function App() {
//   return
// }

// const { useState } = require("react");

// export default App;

// const memo = React.useMemo(
//   () => computeExpensiveValue(a, b),
//   [a, b]
// )

// import { useMemo, useState } from "react";

// const App = ({prop}) => {
//   const [planets, setPlanets] = useState([
//     "Mars",
//     "Jupiter",
//     "Earth",
//     "Venera",
//   ]);
//   const [query, setQuery] = useState("");
//   const [clicks, setClicks] = useState(0);

//   const filteredPlanets = useMemo(() => planets.filter((planet) => planet.includes(query)), [planets, query]) ;

//   return (
//     <div>
//       <div>Some prop: {prop}</div>
//       <button onClick = {() => setClicks(clicks + 1)}>Number of click: {clicks}</button>
//       {filteredPlanets.map((planet) => (
//         <div key={planet}>{planet}</div>
//       ))}
//     </div>
//   );
// };

// export default App;

import React, {useState, useMemo, useCallback } from "react";

const App = () => {
  const [numbers, setNumbers] = useState([3, 5, 7]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('');

  const total = useMemo(() => {
    return numbers.reduce((acc, x) => acc + x, 0);
  }, [numbers]);

const addNumber = useCallback(()=>{
  if(input.trim() === '') return;
  setNumbers([...numbers, Number(input)]);
  setInput('');
  
}, [input, numbers]);

const filteredNumbers = useMemo(()=>{
  return numbers.filter((x) => 
    x.toString().includes(filter))
}, [numbers, filter]);

return(
  <div>
    <div>
      <input placeholder="enter number" onChange={(e) => setInput(e.target.value)} type="number" value={input}/>
      <button onClick={addNumber}>Add</button>
    </div>

    <h2>List of Numbers</h2>

    <ul>
      {numbers.map((x, index) => (
        <li key={index}>{x}</li>
      ))}
    </ul>

    <h2>Sum: {total}</h2>
      
      <div>
        <input type="text" placeholder="Filter" value={filter} onChange={(e) => setFilter(e.target.value)}/>
      </div>

      <h2>Filtered numbers:</h2>
      <ul>
        {filteredNumbers.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>

  </div>
)
}

export default App;
