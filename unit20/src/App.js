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
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="company" element={<Company/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Routes>