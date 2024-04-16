import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import ProductListHome from "./productListHome";

const MultiProductList = () => {
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
    smartphones: { Name: "SMARTPHONES"},

    laptops: {Name: "LAPTOPS"},
    fragrances: {Name: "FRAGRANCES"},
    skincare:{Name:"SKINCARE"},
    groceries: {Name: "GROCERIES"},
    "home-decoration": {
      Name: "HOME DECORATION",
    },
    furniture: {
      Name: "FURNITURE",
    },
    tops: { Name: "TOPS" },
    "womens-dresses": {Name: "WOMENS DRESSES"},
    "womens-shoes": {
      Name: "WOMENS SHOES",
    },
    "mens-shirts": {
      Name: "MENS SHIRTS",
    },
    "mens-shoes": {
      Name: "MENS SHOES",
    },
    "mens-watches": {
      Name: "MENS WATCHES",
    },
    "womens-watches": {
      Name: "WOMENS WATCHES",
    },
    "womens-bags": {
      Name: "WOMENS BAGS",
    },
    "womens-jewellery": {
      Name: "WOMENS JEWELLERY",
    },
    sunglasses: {
      Name: "SUNGLASSES",
    },
    automotive: {
      Name: "AUTOMOTIVE",
    },
    motorcycle: {
      Name: "MOTORCYCLE",
    },
    lighting: {
      Name: "LIGHTING",
    },
  };

  return (
    
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          {Object.keys(categoriesDisplayInfo).map((categoryKey) => (
            <View style={{ marginBottom: 20 }}>
              <ProductListHome
                categoryKey={categoryKey}
                categoryName={categoriesDisplayInfo[categoryKey].Name}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    );
  
};

export default MultiProductList;
