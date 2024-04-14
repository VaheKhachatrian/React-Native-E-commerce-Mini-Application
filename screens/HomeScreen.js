// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import BottomTabNavigation from '../navigation/BottomTabNavigation'

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       {/* <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       /> */}
//       {/* <BottomTabNavigation />          */}
//     </View>
//   );
// }
// export default HomeScreen;

import React from 'react';
import { View } from 'react-native';
import MultiProductList from '../components/MultiProductList';
import Carousel from '../components/Carousel'

const HomeScreen = () => {
  const lists = [
    {
      categoryName: 'Featured Products',
      products: [
        { name: 'Product 1', rating: 4.5, price: 49.99},
        { name: 'Product 2', rating: 4.2, price: 39.99},
      ],
    },
    {
      categoryName: 'Best Sellers',
      products: [
        { name: 'Product 3', rating: 4.8, price: 59.99},
        { name: 'Product 4', rating: 4.1, price: 29.99},
      ],
    },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "white" }}>
      <Carousel />
      <View style={{marginTop: '60%'}}>
      <MultiProductList lists={lists} />
      </View>

    </View>
  );
}

export default HomeScreen;
