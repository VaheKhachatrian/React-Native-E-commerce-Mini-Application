import React from 'react';
import { View, StyleSheet } from 'react-native';
import CategoryCard from './CategoryCard';

const CategoryList = () => {
  const categories = [
    { id: 1, name: 'Category 1'},
    { id: 2, name: 'Category 2'},
    { id: 3, name: 'Category 2'},
    { id: 4, name: 'Category 2'},
    { id: 5, name: 'Category 2'},
    { id: 6, name: 'Category 2'},
    { id: 7, name: 'Category 2'},
    { id: 8, name: 'Category 2'},

  ];

  return (
    <View style={styles.container}>
      {categories.map(category => (
        <CategoryCard
          key={category.id}
          categoryName={category.name}
          imageSource={category.imageSource}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '110%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginLeft: '10%'
  },
});

export default CategoryList;
