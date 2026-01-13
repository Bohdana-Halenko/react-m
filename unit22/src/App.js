//src/redux/store.js
// Раніше
// import {createStore} from 'redux';
// import {devToolsEnhancer} from 'redux-devtools/extension';
// import {rootReducer} from 'reducer';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

// Тепер
// import {rootReducer} from 'reducer';
// import { configureStore } from "@reduxjs/toolkit";
// import { tasksReducer, filtersReducer } from "./reducer";

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   },
// });

//src/redux/reducer.js
// Раніше

// import {combineReducer} from 'redux';
// import {statusFilters } from './constants';

// const tasksInitialState = [];
// const tasksReducer = (state = tasksInitialState, action) => {
//   //
// }

// const filtersInitialState = {
//   status: statusFilters.all,
// }
// const filtersReducer = (state = filtersInitialState, action) =>{
//   //
// }

// export const rootReducer = combineReducer({
//   tasks: tasksReducer,
//   filter: filtersReducer
// })

// Тепер
// import { statusFilters } from "./constants";
// import { createReducer } from "@reduxjs/toolkit";
// import { addTasks, deleteTasks, toggleComplated } from "./actions";
// const tasksInitialState = [];
// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTasks]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteTasks]: (state, action) => {
//     const index = state.findIndex((task) => task.id === action.payload);
//     return state.splice(index, 1);
//   },
//   [toggleComplated]: (state, action) => {},
// });
// const filtersInitialState = {
//   status: statusFilters.all,
// };
// export const filtersReducer = (state = filtersInitialState, action) => {
//   //
// };

//src/redux/actions.js
// Раніше

// const addTask = text => {
//   return {type: 'tasks/AddTask', payload: text};
// };

// console.log(addTask('Hello'))

// // Тепер
// import {createAction, nanoid} from '@reduxjs/toolkit';
// export const addTasks = createAction("tasks/addTask", text =>{
//   return {
//     payload: {
//       text,
//       id: nanoid(),
//       complated: false,
//     }
//   }
// });
// export const deleteTask = createAction('tasks/deleteTask');
// export const toggleComplated = createAction('tasks/toggleComplated');
// export const setStatusFilter = createAction('tasks/setStatusFilter')
// console.log(addTask('Hello'));

// import { createSlice, nanoid } from "@reduxjs/toolkit";
// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: tasksInitialState,
//   reducers: {
//     addTasks: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             complated: false,
//           },
//         };
//       },
//     },

//     deleteTasks(state, action) {
//       const index = state.findIndex((task) => task.id === action.payload);
//       state.splice(index, 1);
//     },
//   },
// });

// const { addTasks, deleteTasks } = tasksSlice.actions;
// const tasksReducer = tasksSlice.reducer;

// const tasksSlice = {
//   name: 'tasks',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
// fetchingInProgress(state) {
//   state.isLoading = true;
// },
// fetchingSuccess(state, action){
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// },
// fetchingError(state, action){
//   state.isLoading = false;
//   state.error = action.paydoad;
// },
//   },
// }

// export const {fetchingInProgress, fetchingSuccess, fetchingError} = tasksSlice.actions;

// import axios from 'axios';
// import {fetchingInProgress, fetchingSuccess, fetchingError} from "./tasksSlice";

// axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

// const fetchTasks = () => async dispatch => {
//   try{
//     dispatch(fetchingInProgress());
//     const res = await axios.get('./tasks');

//     dispatch(fetchingSuccess(res.data));
//   }
//   catch(error){
//     dispatch(fetchingError(error.message))
//   };
// }

// // APP.js

// import {useEffect} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {fetchTasks} from "redux/operations";
// import {getTasks} from "redux/selectors";

// const App = () =>{
//   const dispatch = useDispatch();
//   const {items, isLoading, error} = useSelector(getTasks);
//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   return(
//     <div>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       <p>{items.length > 0 && JSON.stringify(items, null, false)}</p>
//     </div>
//   )
// }

// import axios from 'axios';
// import {createAsyncThunk} from "@reduxjs/toolkit";
// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

// const fetchTasks = createAsyncThunk('tasks/fetchAll', async (_, thunkAPI) =>{
//   try{
//     const res = await axios.get("/tasks");
//     return res.data;
//   }
//   catch(error){
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// import {createSlice} from "@reduxjs/toolkit";

// const tasksSlice = createSlice({
//     name: 'tasks',
//     initialState: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },

//     extraReducers: {
//       [fetchTasks.pending](state, action){
//         state.isLoading = true;
//       },
//       [fetchTasks.fulfilled](state, action){
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       },
//       [fetchTasks.rejected](state, action){
//         state.isLoading = false;
//         state.error = action.payload;
//       },
//     }
//   });

//   export const tasksReducer = tasksSlice.reducer;

// 16.12
// const valueSelector = state => state.some.value;
// const value = useSelector(valueSelector);

// const getTasks = state => state.tasks;

// export const selectTasks = state => state.tasks;

// import {selectTasks} from 'redux/selectors';

// const selectTotalValue = state => {
//   const a = state.values.a;
//   const b = state.values.b;
//   return a + b;
// }

// 18.12
// import { useSelector } from "react-redux";
// import { selectTasks, selectStatusFilter } from "redux/selectors";
// import { statusFilters } from "redux/constatns";

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter((task) => !task.complated);

//     case statusFilters.complated:
//       return tasks.filter((task) => task.complated);

//     default:
//       return tasks;
//   }
// };

// export const TaskList = () => {
//   const tasks = useSelector(selectTasks);
//   const statusFilter = useSelector(selectStatusFilter);
//   const visibleTasks = getVisibleTasks(tasks, statusFilter);

//   //jsx
// };

// // selectors.js
// import { statusFilters } from "./constants";
// export const selectTasks = (state) => state.tasks.items;
// export const selectIsLoading = (state) => state.tasks.isLoading;
// export const selectError = (state) => state.tasks.error;
// export const selectStatusFilter = (state) => state.filters.status;
// export const selectVisibleTasks = (state) => {
//   const tasks = selectTasks(state);
//   const statusFilter = selectStatusFilter(state);
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter((task) => !task.complated);

//     case statusFilters.complated:
//       return tasks.filter((task) => task.complated);

//     default:
//       return tasks;
//   }
// };

// const Popup = () =>{
// return ReactDOM.createPortal(
//   <div>Popup-window with portal</div>,
//   document.querySelector('#popup'))
// }

// 13.01

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AuthModal from "./components/AuthModal";
import AuthNav from "./components/AuthNav";
import UserMenu from "./components/UserMenu";
import { selectIsLoggedIn } from "./redux/authSelectors";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <AuthNav onLogin={() => setShowModal(true)} />
        )}
      </header>

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;