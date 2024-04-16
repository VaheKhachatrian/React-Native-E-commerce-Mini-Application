import React from 'react';
import { View } from 'react-native';
import MultiProductList from '../components/MultiProductList';
import CarouselHome from '../components/CarouselHome'

const HomeScreen = () => {
 
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: "white" }}>
      <CarouselHome />
      <View style={{ marginTop: '60%', marginLeft: 10 }}>
        <MultiProductList />
      </View>

    </View>
  );
}

export default HomeScreen;
