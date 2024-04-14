import React from 'react';
import { View, ScrollView } from 'react-native';
import ProductList from './ProductList'; 

const MultiProductList = ({ lists }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1 }}>
        {lists.map((list, index) => (
          <View key={index} style={{ marginBottom: 20 }}>
            <ProductList categoryName={list.categoryName} products={list.products}  />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MultiProductList;
