import React from 'react';
import { View } from 'react-native';
import ProductList from '../components/ProductList';
import { useState, useEffect } from 'react';


const CatalogScreen = ({ route }) => {
const category  = route.params.categoryName;

  const [categoryProducts, setCategoryProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category/' + category)
        if(!response.ok) {
          throw new Error("Network response was not ok");
        }
        let responseData = await response.json();
        setCategoryProducts(responseData.products);
        
      } catch (err) {
        //TODO: handle error
      }
    };
    fetchData();
  }, [])


  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "white" }}>
      <ProductList products={categoryProducts} />

    </View>
  );
}

export default CatalogScreen;