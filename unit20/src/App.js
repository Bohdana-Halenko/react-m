// import {Routes, Route, NavLink} from 'react-router-dom';
// import Home from 'path/to/pages/Home';
// import About from 'path/to/pages/About';
// import Products from 'path/to/pages/Products';
// import ProductDetails from "path/to/pages/ProductDetails";
//  import styled from "styled-component";

// const StyledLink = styled(NavLink)`
// color: navy;

// &.active{
//   color: blue;
// }`;

// // 

// function App() {
//   return (
//     <div>
//       <nav>
//         <StyledLink to="/">Home</StyledLink>
//         <StyledLink to="/about">About</StyledLink>
//         <StyledLink to="/products">Products</StyledLink>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/products" element={<Products/>}/>
//         <Route path="/products/:productId" element={<ProductDetails/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App;








// const {genreId, authorName} = useParams();
// // console.log(genreId, authorName); //trieler, pol brown


// import {useParams} from 'react-router-dom';

// const ProductDetails = () =>{
//   const {productId} = useParams();

//   return <div>.... {productId}</div>
// }







        // <Route path="/" element={<Home/>}/>
        // <Route path="/about/company" element={<About/>}/>
        // <Route path="/products/book" element={<Products/>}/>
        // <Route path="/products/:productId" element={<ProductDetails/>}/>
      // <Routes>
      //   <Route index element={<Home/>}/>
      //   <Route path="/about" element={<About/>}>
      //     <Route path="company" element={<Company/>} />
      //     <Route path="reviews" element={<Reviews/>} />
      //   </Route>
      // </Routes>











      // 21.10
// import {useNavigate} from 'react-router-dom';

// export const Login = () =>{
//   const navigate = useNavigate();

//   const handelSubmit = async values => {
//     const r = await API.login(values);
//     if(r.success){
//       navigate('/profile', {replace: true});
//     }
//   }

//   return(
//     <div>
//       <h2>Login page</h2>
//       <LoginForm onSubmit={handelSubmit}/>
//     </div>
//   )
// }


// import {Navigate, useState} from 'react-router-dom';

// export const Login = () =>{
//   const [isLog, setIsLog] = useState(false);

//   const handelSubmit = async values =>{
//     const r = await API.login(values);
//     setIsLog(r.success);
//   }
//   if(isLog){
//     return <Navigate to='/profile' replace/>
//   }

//   return(
//         <div>
//           <h2>Login page</h2>
//           <LoginForm onSubmit={handelSubmit}/>
//         </div>
//       )
// }



// Products.jsx
// https://gomerch.it/products?name=hoodie&color=orange&maxPrice=500#12487321
// import {useSearchParams} from 'react-router-dom';

// const Products = () => {
//   const [searchParams] = useSearchParams();
//   // const name = searchParams.get("name");
//   // console.log(name, typeof name); //'hoodie', string
//   // const color = searchParams.get("color");
//   // const maxPrice = searchParams.get("maxPrice");
//   // console.log(maxPrice, typeof maxPrice); // "500", string

//   // Number(value)
//   // Boolean(value)


//   // Мемоізація

//   const params = useMemo(
//     ()=> Object.fromEntries([...searchParams]),
//     [searchParams]
//   );
//   const {name, color, maxPrice} = params;


//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Color: {color}</p>
//       <p>MaxPrice: {maxPrice}</p>
//     </div>
//   )
// }


// const Products = () =>{
//   const [searchParams, setSearchParams] = useSearchParams();
//   const name = searchParams.get('name');

//   return(
//     <div>
//       <input 
//       type='text'
//       value={name}
//       onChange = {e => setSearchParams({name: e.target.value})}/>
//     </div>
//   )
// }

// {
//   "pathname": "/profile",
//   "search": "?name=hoodie&color=orange&maxPrice=500",
//   'hash': "#1235hht",
//   'state': null,
//   'key': "vngdht23548-jhgfngf-jhfhf"
// }
// import {useLocation} from 'react-router-dom';

// const Products = () => {
//   const location = useLocation();

//   // /products -> product/product-1
//   // from: {pathname: /products, search: ''}

//   return (
//     <div>
//     <Link to="/product-1" state={{from: '/home?name=hoodies'}}>Navige</Link>

//     <Link to={location.state.from}>Navigate</Link>
//     </div>
//   )
// }


import { lazy, Suspense } from "react";
// import {MyComponent} from '/MyComponent'

const MyComponent = lazy(() => import("https://gomerch.it/products/MyComponent"));

const App = () => {
 return (
   <Suspense fallback={<div>Loading...</div>}>
     <Routes>
       <Route path="/some-path" element={<MyComponent />} />
       {/* Інші маршрути */}
     </Routes>
   </Suspense>
 );
};
