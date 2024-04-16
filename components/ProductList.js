import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const productsList = products;
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {productsList && (
        <View style={styles.cardsContainer}>
          {productsList.map((product, index) => (
            <View key={index} style={styles.cardContainer}>
              <ProductCard
                name={product.title}
                rating={product.rating}
                price={product.price}
                brand={product.brand}
                category={product.category}
                imageSource={product.images}
                description={product.description}
              />
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: windowWidth - 20, 
    padding: 10,
  },
  cardContainer: {
    width: '48%',
    marginBottom: 20,
  },
});

export default ProductList;
