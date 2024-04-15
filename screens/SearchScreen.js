import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList'; 

const SearchScreen = () => {  
  
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if(!response.ok) {
          throw new Error("Network response was not ok");
        }
        let responseData = await response.json();
        setProducts(responseData.products);
        
      } catch (err) {
        //TODO: handle error
      }
    };
    fetchData();
  }, [])

  const handleSearch = (searchText) => {
    console.log(typeof products);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={products} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#F9F9F9"
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
