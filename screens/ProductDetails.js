import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AddToCartButton from '../components/addToCart';

const ProductDetails = ({ route }) => {
  const { name, rating, price, brand, category, description, imageSource } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.detailTextPrice}>${price}</Text>
        <Text style={styles.detailText}>Name: {name}</Text>
        <Text style={styles.detailText}>Rating: {rating}</Text>
        <Text style={styles.detailText}>Brand: {brand}</Text>
        <Text style={styles.detailText}>Category: {category}</Text>
        <View style={styles.space} /> 
        <View style={styles.line} /> 
        <Text style={styles.detailTextDescription}>{description}</Text> 
      </View>
      <View style={styles.addToCartContainer}>
        <AddToCartButton price={price} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 343,
    resizeMode: 'cover',
    backgroundColor: '#d9d9d9'
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  detailTextPrice: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    marginBottom: 10,
  },
  space: {
    marginBottom: 10,
  },
  detailTextDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  addToCartContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default ProductDetails;
