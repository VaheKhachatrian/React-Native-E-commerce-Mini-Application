import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width;

const ProductCard = ({ name = "", rating = "", price = "", brand = "", category = "", imageSource = "", isFavoritee = false }) => {
  const navigation = useNavigation(); 
  const [isFavorite, setIsFavorite] = useState(isFavoritee);

  const navigateToDetails = () => {
    navigation.navigate("ProductDetails", { name, rating, price, brand, category, imageSource });
  };

  const toggleFavorite = async () => {
    setIsFavorite(!isFavorite);
    const product = {
      name,
      rating,
      price,
      brand,
      category,
      imageSource
    };

    try {
      let favorites = [];
      const existingFavorites = await AsyncStorage.getItem('favorites');
      favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

      if (isFavorite) {
        favorites = favorites.filter(item => item.name !== product.name);
      } else {
        favorites.push(product);
      }

      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity onPress={navigateToDetails}>
      <View style={[styles.container, { width: screenWidth * 0.4 }]}>
        <Image src={imageSource[0]} style={[styles.image, { height: screenWidth * 0.4 }]} />
        <TouchableOpacity style={styles.favoriteIcon} onPress={toggleFavorite}>
          <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={24} color={isFavorite ? 'red' : '#000'} />
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>Rating: {rating}</Text>
          </View>
          <Text style={styles.price}>Price: ${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    overflow: 'hidden',
    position: 'relative', 
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  detailsContainer: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ProductCard;
  