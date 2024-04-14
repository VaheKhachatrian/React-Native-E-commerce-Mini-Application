import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';

const Carousel = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const currentPage = Math.round(contentOffset.x / screenWidth);
    setCurrentPage(currentPage);
  };

  return (
    <View style={[styles.container, { height: screenHeight * 0.3 }]}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {items.map((item, index) => (
          <View key={index} style={[styles.itemContainer, { width: screenWidth }]}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {items.map((_, index) => (
          <View key={index} style={[styles.paginationDot, index === currentPage && styles.activeDot]} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 24,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#333',
  },
});

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
export default function App() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Carousel items={items} />
    </View>
  );
}
