// import React from 'react';
// import { View, Text } from 'react-native';
// // import BottomTabNavigation from '../navigation/BottomTabNavigation'
// const DetailsScreen = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Categories Screen</Text>
//       {/* <BottomTabNavigation /> */}
//     </View>
//   );
// }
// export default DetailsScreen;
import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoriesList from "../components/CategoriesList";

const CategoriesScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <View style={{ alignItems: "center", backgroundColor: "white", flexGrow: 1, justifyContent: 'center', }}>
        <CategoriesList />
      </View>
    </ScrollView>
  );
};

export default CategoriesScreen;
