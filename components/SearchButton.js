import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RenderHeaderRight = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate("SearchScreen");
  };

  return (
    <TouchableOpacity onPress={handleSearchPress}>
      <Ionicons name="search" size={24} color="black" style={{ marginRight: 15 }} />
    </TouchableOpacity>
  );
};

export default RenderHeaderRight;
