import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import SearchBar from '../components/searchBar';
import ProductCard from '../components/ProductCard'; 

const SearchScreen = () => {
  const [searchResults, setSearchResults] = useState([]);
  // const products = [
  //   { id: 1, name: 'Product 1', price: 10 },
  //   { id: 2, name: 'Product 2', price: 20 },
  // ];
  
  const [products, setproducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')
        if(!response.ok) {
          throw new Error("Network response was not ok");

        }
        setCategoryProducts(await response.json());
        
      } catch (err) {
        //TODO: handle error
      }
    };
    fetchData();
  }, [])

  useState(() => {
    setSearchResults(products);
  }, []);

  const handleSearch = (searchText) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
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
