import React from 'react';
import { View, ScrollView } from 'react-native';
import ProductListHome from './productListHome'; 

const MultiProductList = ({ lists }) => {
  let categoryName = ["smartphones","laptops","fragrances","skincare","groceries","home-decoration","furniture","tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","sunglasses","automotive","motorcycle","lighting"]
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1 }}>
        {categoryName.map((category) => (
          <View style={{ marginBottom: 20 }}>
            <ProductListHome categoryName={category}/>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MultiProductList;
