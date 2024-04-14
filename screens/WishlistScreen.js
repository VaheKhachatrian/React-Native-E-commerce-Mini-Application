import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductCard from '../components/ProductCard';

const WishlistScreen = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const favoritesJson = await AsyncStorage.getItem('favorites');
      if (favoritesJson) {
        const favoritesArray = JSON.parse(favoritesJson);
        setFavorites(favoritesArray);
      }
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const updateScreen = () => {
    fetchFavorites();
  };
  const renderItem = ({ item }) => (
    <ProductCard
      name={item.name}
      rating={item.rating}
      price={item.price}
      brand={item.brand}
      category={item.category}
      imageSource={item.imageSource}
      isFavoritee={true}
      onToggleFavorite={() => console.log('Toggling favorite')}
      onUpdateScreen={updateScreen}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Refresh" onPress={updateScreen} color={"#7867BE"} />
      </View>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        isFavoritee={true}
        contentContainerStyle={styles.flatListContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: "90%",
    paddingHorizontal: 20,
  },
  flatListContent: {
    alignItems: 'center', 
    paddingHorizontal: 10,
    paddingBottom: 20, 
  },
  separator: {
    width: 10,
  },
});

export default WishlistScreen;
