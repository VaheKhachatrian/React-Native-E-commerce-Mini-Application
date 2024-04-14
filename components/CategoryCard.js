// import React from 'react';
// import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

// const CategoryCard = ({ categoryName, imageSource }) => {
//   return (
//     <View style={styles.container}>
//       <Image source={imageSource} style={styles.image} />
//       <View style={styles.categoryNameContainer}>
//         <Text style={styles.categoryName}>{categoryName}</Text>
//       </View>
//     </View>
//   );
// };

// const screenWidth = Dimensions.get('window').width;

// const styles = StyleSheet.create({
//   container: {
//     width: '90%',
//     height: screenWidth * 0.2, // 20% of screen width
//     borderRadius: 10,
//     borderWidth: 1, // Add border
//     borderColor: '#ddd', // Border color
//     overflow: 'hidden',
//     marginBottom: 20,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   categoryNameContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderTopRightRadius: 10,
//     borderBottomLeftRadius: 10, // Add border radius to the bottom left corner
//     alignItems: 'flex-start',
//   },
//   categoryName: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default CategoryCard;

import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ categoryName, imageSource }) => {
  const navigation = useNavigation();

  const navigateToCatalog = () => {
    navigation.navigate("CatalogScreen", categoryName);
  };

  return (
    <TouchableOpacity style={{ width: "100%" }} onPress={navigateToCatalog}>
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.categoryNameContainer}>
          <Text style={styles.categoryName}>{categoryName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: screenWidth * 0.5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  categoryNameContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "flex-start",
  },
  categoryName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CategoryCard;
