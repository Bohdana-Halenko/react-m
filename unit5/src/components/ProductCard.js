import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background-color: rgb(244, 244, 244);
  margin: 15px auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
`;

const Title = styled.h3`
  font-size: 20px;
  color: #333;
  text-align: center;
`;

const Description = styled.p`
  font-size: 14px;
  color: #333;
`;

const Price = styled.p`
  margin-top: 10px;
  font-size: 22px;
  color: midnightblue;
  font-weight: 700;
`;

const BuyBtn = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  background-color: forestgreen;
  display: block;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: rgb(29, 126, 29);
  }
`;


function ProductCard({ product }) {
    return (
      <Card>
        <ProductImage src={product.image} alt={product.title} />
        <Content>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          <Price>{ product.price} грн.</Price>
          <BuyBtn>Buy now!</BuyBtn>
        </Content>
      </Card>
    );
}

export default ProductCard;