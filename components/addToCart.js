import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AddToCartButton = ({ price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.priceText}>${price}</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
  leftContainer: {
    flexDirection: 'column',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  priceText: {
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#7867BE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddToCartButton;
