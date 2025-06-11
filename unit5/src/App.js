import React from "react";
import StyledBtn from "./components/StyledBtn";
import ProductCard from './components/ProductCard';

const product = {
  image: "https://images.prom.ua/6585698771_ryukzak-zhenskij-gorodskoj.jpg",
  description: "Стильний чорний рюкзак",
  title: "Чорний рюкзак",
  price: 999,
};

function App() {
  return (
    <div>
      <StyledBtn />
      <ProductCard product={ product } />
    </div>
  );
}

export default App;
