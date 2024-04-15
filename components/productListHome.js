import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";

const ProductListHome = ({ categoryName }) => {
  const navigation = useNavigation();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/" + categoryName
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const firstFourProducts = data.products.slice(0, 4);
        setCategoryProducts(firstFourProducts);
      } catch (err) {
        // TODO: handle error
      }
    };
    fetchData();
  }, []);
  const productsInfo = {
    products: categoryProducts
  }
  const handleSeeAll = () => {
      console.log(categoryName);
    navigation.navigate("CatalogScreen", { categoryName });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.categoryName}>{categoryName}</Text>
        <TouchableOpacity style={styles.seeAllButton} onPress={handleSeeAll}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <ProductList products={productsInfo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAllButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#7867BE",
  },
  seeAllText: {
    color: "#7867BE",
    fontSize: 14,
    fontWeight: "bold",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  cardContainer: {
    width: "48%",
    marginBottom: 10,
  },
});

export default ProductListHome;
