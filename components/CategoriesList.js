import React from "react";
import { View, StyleSheet } from "react-native";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setCategories(await response.json());
      } catch (error) {
        // TODO: handle error
      }
    };
    fetchData();
  }, []);

  const categoriesDisplayInfo = {
    smartphones: {
      Name: "SMARTPHONES",
      Image: require("../assets/categories/smartphones.jpg"),
    },
    laptops: {
      Name: "LAPTOPS",
      Image: require("../assets/categories/laptops.jpg"),
    },
    fragrances: {
      Name: "FRAGRANCES",
      Image: require("../assets/categories/fragrances.jpg"),
    },
    skincare: {
      Name: "SKINCARE",
      Image: require("../assets/categories/skincare.jpg"),
    },
    groceries: {
      Name: "GROCERIES",
      Image: require("../assets/categories/groceries.jpg"),
    },
    "home-decoration": {
      Name: "HOME DECORATION",
      Image: require("../assets/categories/home-decoration.jpg"),
    },
    furniture: {
      Name: "FURNITURE",
      Image: require("../assets/categories/furniture.jpg"),
    },
    tops: { Name: "TOPS", Image: require("../assets/categories/tops.jpg") },
    "womens-dresses": {
      Name: "WOMENS DRESSES",
      Image: require("../assets/categories/womens-dresses.jpg"),
    },
    "womens-shoes": {
      Name: "WOMENS SHOES",
      Image: require("../assets/categories/womens-shoes.jpg"),
    },
    "mens-shirts": {
      Name: "MENS SHIRTS",
      Image: require("../assets/categories/mens-shirts.jpg"),
    },
    "mens-shoes": {
      Name: "MENS SHOES",
      Image: require("../assets/categories/mens-shoes.jpg"),
    },
    "mens-watches": {
      Name: "MENS WATCHES",
      Image: require("../assets/categories/mens-watches.jpg"),
    },
    "womens-watches": {
      Name: "WOMENS WATCHES",
      Image: require("../assets/categories/womens-watches.jpg"),
    },
    "womens-bags": {
      Name: "WOMENS BAGS",
      Image: require("../assets/categories/womens-bags.jpg"),
    },
    "womens-jewellery": {
      Name: "WOMENS JEWELLERY",
      Image: require("../assets/categories/womens-jewellery.jpg"),
    },
    sunglasses: {
      Name: "SUNGLASSES",
      Image: require("../assets/categories/sunglasses.jpg"),
    },
    automotive: {
      Name: "AUTOMOTIVE",
      Image: require("../assets/categories/automotive.jpg"),
    },
    motorcycle: {
      Name: "MOTORCYCLE",
      Image: require("../assets/categories/motorcycle.jpg"),
    },
    lighting: {
      Name: "LIGHTING",
      Image: require("../assets/categories/lighting.jpg"),
    },
  };

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <CategoryCard
          categoryKey={category}
          categoryName={categoriesDisplayInfo[category].Name}
          imageSource={categoriesDisplayInfo[category].Image}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "110%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginLeft: "10%",
  },
});

export default CategoryList;
