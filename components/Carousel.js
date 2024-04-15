import React, { useState } from "react";
import { View, ScrollView, Dimensions, StyleSheet, Image } from "react-native";

const Carousel = ({ items }) => {
  console.log(items[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

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
      
            {items.map((item) => (
              <View
                key={item.id}
                style={[styles.itemContainer, { width: screenWidth  }]}
              >
                <Image
                  source={typeof item === "string" ? { uri: item } : item}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </View>
            ))}
    
      </ScrollView>
      <View style={styles.pagination}>
        {items.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentPage && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    marginLeft: '0%',
    borderRadius: 10,
    overflow: "hidden",
    width: screenWidth - 40,
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    maxWidth: screenWidth - 42,
    
    height: "100%",
  
    // paddingHorizontal: 10,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#888",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#333",
  },
});

export default Carousel;
