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
  // console.log(categoryProducts.products);

  // const lists = [
  //   {
  //     title: 'Featured Products',
  //     products: [
  //       { name: 'Product 1', rating: 4.5, price: 49.99},
  //       { name: 'Product 2', rating: 4.2, price: 39.99},
  //     ],
  //   },
  //   {
  //     title: 'Best Sellers',
  //     products: [
  //       { name: 'Product 3', rating: 4.8, price: 59.99},
  //       { name: 'Product 4', rating: 4.1, price: 29.99},
  //     ],
  //   },
  // ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "white" }}>
      <ProductList products={categoryProducts} />

    </View>
  );
}

export default CatalogScreen;