import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const productsList = products;
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}></View>
      {productsList ? (
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
              />
            </View>
          ))}
        </View>
      ) : (
        <></>
      )}
    </ScrollView>
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

export default ProductList
