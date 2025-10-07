// Task 1
// import React, { Component } from "react";

// class PokemonAppClass extends Component {
//   state = {
//     pokemons: [],
//     loading: false,
//     page: 1,
//     limit: 20,
//     search: "",
//   };

//   componentDidMount() {
//     this.fetchPokemons();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.page !== this.state.page) {
//       this.fetchPokemons();
//     }
//   }

//   fetchPokemons = async () => {
//     this.setState({ loading: true });
//     const { page, limit } = this.state;
//     const offset = (page - 1) * limit;

//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
//     );
//     const data = await response.json();

//     const pokemonsWithId = data.results.map((p) => {
//       const id = p.url.split("/").filter(Boolean).pop();
//       return { ...p, id };
//     });

//     this.setState({ pokemons: pokemonsWithId, loading: false });
//   };

//   handleSearch = (e) => {
//     this.setState({ search: e.target.value });
//   };

//   nextPage = () => {
//     this.setState((prev) => ({ page: prev.page + 1 }));
//   };

//   prevPage = () => {
//     this.setState((prev) => ({ page: Math.max(prev.page - 1, 1) }));
//   };

//   render() {
//     const { pokemons, loading, page, search } = this.state;

//     const filteredPokemons = pokemons.filter((p) =>
//       p.name.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//       <div style={{ padding: "20px" }}>
//         <h2>Pokémon App</h2>

//         <input
//           type="text"
//           placeholder="Search Pokémon..."
//           value={search}
//           onChange={this.handleSearch}
//           style={{ marginBottom: "10px", padding: "5px" }}
//         />

//         {loading && <p>Loading...</p>}

//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {filteredPokemons.map((p) => (
//             <li key={p.name} style={{ marginBottom: "10px" }}>
//               <img
//                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
//                 alt={p.name}
//                 width={50}
//                 height={50}
//                 style={{ marginRight: "10px" }}
//               />
//               {p.name}
//             </li>
//           ))}
//         </ul>

//         <div>
//           <button onClick={this.prevPage} disabled={page === 1}>
//             Prev
//           </button>
//           <span style={{ margin: "0 10px" }}>Page {page}</span>
//           <button onClick={this.nextPage}>Next</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default PokemonAppClass;




// Task 2
// import React, { Component } from "react";

// class TodoAppClass extends Component {
//   state = {
//     todos: [],
//     loading: false,
//     search: "",
//   };

//   componentDidMount() {
//     this.fetchTodos();
//   }

//   fetchTodos = async () => {
//     this.setState({ loading: true });
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=20");
//     const data = await response.json();
//     this.setState({ todos: data, loading: false });
//   };

//   toggleTodo = (id) => {
//     this.setState((prev) => ({
//       todos: prev.todos.map((t) =>
//         t.id === id ? { ...t, completed: !t.completed } : t
//       ),
//     }));
//   };

//   handleSearch = (e) => {
//     this.setState({ search: e.target.value });
//   };

//   render() {
//     const { todos, loading, search } = this.state;

//     const filteredTodos = todos.filter((t) =>
//       t.title.toLowerCase().includes(search.toLowerCase())
//     );

//     const completedCount = filteredTodos.filter((t) => t.completed).length;

//     return (
//       <div style={{ padding: "20px" }}>
//         <h2>Todo App</h2>

//         <input
//           type="text"
//           placeholder="Search todo..."
//           value={search}
//           onChange={this.handleSearch}
//           style={{ marginBottom: "10px", padding: "5px" }}
//         />

//         {loading && <p>Loading...</p>}

//         <p>
//           Completed: {completedCount} / {filteredTodos.length}
//         </p>

//         <ul>
//           {filteredTodos.map((t) => (
//             <li key={t.id}>
//               <label>
//                 <input
//                   type="checkbox"
//                   checked={t.completed}
//                   onChange={() => this.toggleTodo(t.id)}
//                 />
//                 {t.title}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TodoAppClass;



















































// Task 1 (hooks)
// import React, { useState, useEffect, useMemo, useCallback } from "react";

// const PokemonAppHooks = () => {
//   const [pokemons, setPokemons] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const [search, setSearch] = useState("");
//   const limit = 20;

//   useEffect(() => {
//     const fetchPokemons = async () => {
//       setLoading(true);
//       const offset = (page - 1) * limit;

//       const response = await fetch(
//         `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
//       );
//       const data = await response.json();

//       const pokemonsWithId = data.results.map((p) => {
//         const id = p.url.split("/").filter(Boolean).pop();
//         return { ...p, id };
//       });

//       setPokemons(pokemonsWithId);
//       setLoading(false);
//     };

//     fetchPokemons();
//   }, [page]);

//   const nextPage = useCallback(() => {
//     setPage((p) => p + 1);
//   }, []);

//   const prevPage = useCallback(() => {
//     setPage((p) => Math.max(p - 1, 1));
//   }, []);

//   const filteredPokemons = useMemo(() => {
//     return pokemons.filter((p) =>
//       p.name.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [pokemons, search]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Pokémon App</h2>

//       <input
//         type="text"
//         placeholder="Search Pokémon..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ marginBottom: "10px", padding: "5px" }}
//       />

//       {loading && <p>Loading...</p>}

//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {filteredPokemons.map((p) => (
//           <li key={p.name} style={{ marginBottom: "10px" }}>
//             <img
//               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
//               alt={p.name}
//               width={50}
//               height={50}
//               style={{ marginRight: "10px" }}
//             />
//             {p.name}
//           </li>
//         ))}
//       </ul>

//       <div>
//         <button onClick={prevPage} disabled={page === 1}>
//           Prev
//         </button>
//         <span style={{ margin: "0 10px" }}>Page {page}</span>
//         <button onClick={nextPage}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default PokemonAppHooks;





// Task 2
// import React, { useState, useEffect, useMemo, useCallback } from "react";

// const TodoAppHooks = () => {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchTodos = async () => {
//       setLoading(true);
//       const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=20");
//       const data = await response.json();
//       setTodos(data);
//       setLoading(false);
//     };
//     fetchTodos();
//   }, []);

//   const toggleTodo = useCallback((id) => {
//     setTodos((prev) =>
//       prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
//     );
//   }, []);

//   const filteredTodos = useMemo(() => {
//     return todos.filter((t) =>
//       t.title.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [todos, search]);

//   const completedCount = useMemo(() => {
//     return filteredTodos.filter((t) => t.completed).length;
//   }, [filteredTodos]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Todo App</h2>

//       <input
//         type="text"
//         placeholder="Search todo..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ marginBottom: "10px", padding: "5px" }}
//       />

//       {loading && <p>Loading...</p>}

//       <p>
//         Completed: {completedCount} / {filteredTodos.length}
//       </p>

//       <ul>
//         {filteredTodos.map((t) => (
//           <li key={t.id}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={t.completed}
//                 onChange={() => toggleTodo(t.id)}
//               />
//               {t.title}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoAppHooks;
