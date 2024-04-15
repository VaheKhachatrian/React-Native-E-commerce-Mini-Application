import { View } from "react-native";
import Carousel from "./Carousel";
import banner1 from '../assets/banner/banner1.jpg';
import banner2 from '../assets/banner/banner2.jpg';
import banner3 from '../assets/banner/banner3.jpg';
export default function App() {
    const items = [banner1, banner2, banner3];
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Carousel items={items} />
    </View>
  );
}