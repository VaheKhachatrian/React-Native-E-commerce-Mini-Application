import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProductCard from './ProductCard';
import { useNavigation } from '@react-navigation/native'; 


const ProductList = ({ categoryName, products }) => {
    const navigation = useNavigation(); 

    const handleSeeAll = () => {
        navigation.navigate("CatalogScreen", { categoryName });
    }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.categoryName}>{categoryName}</Text>
        <TouchableOpacity style={styles.seeAllButton} onPress={handleSeeAll}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {products.map((product, index) => (
          <View key={index} style={styles.cardContainer}>
            <ProductCard
              name={product.name}
              rating={product.rating}
              price={product.price}
              imageSource={product.imageSource}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#7867BE',
  },
  seeAllText: {
    color: '#7867BE',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  cardContainer: {
    width: '48%',
    marginBottom: 10,
  },
});

export default function App() {
  const products = [
    { name: 'Product 1', rating: 4.5, price: 49.99},
    { name: 'Product 2', rating: 4.2, price: 39.99},
    { name: 'Product 3', rating: 4.8, price: 59.99},
    { name: 'Product 4', rating: 4.1, price: 29.99},
  ];

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ProductList categoryName="Featured Products" products={products} />
    </View>
  );
}
