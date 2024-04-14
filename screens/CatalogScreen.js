import React from 'react';
import { View } from 'react-native';
import ProductList from '../components/ProductList';

const CatalogScreen = ({ categoryName }) => {
  const lists = [
    {
      title: 'Featured Products',
      products: [
        { name: 'Product 1', rating: 4.5, price: 49.99},
        { name: 'Product 2', rating: 4.2, price: 39.99},
      ],
    },
    {
      title: 'Best Sellers',
      products: [
        { name: 'Product 3', rating: 4.8, price: 59.99},
        { name: 'Product 4', rating: 4.1, price: 29.99},
      ],
    },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "white" }}>
      <ProductList lists={lists} />

    </View>
  );
}

export default CatalogScreen;