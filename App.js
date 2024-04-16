import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import WishlistScreen from "./screens/WishlistScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/Login";
import ProductDetails from "./screens/ProductDetails";
import CatalogScreen from "./screens/CatalogScreen";
import SearchScreen from "./screens/SearchScreen";

import SearchButton from "./components/SearchButton";
import home from "./assets/home.png";
import homeClicked from "./assets/homeClicked.png";
import categories from "./assets/categories.png";
import categoriesClicked from "./assets/categoriesClicked.png";
import wishlist from "./assets/wishlist.png";
import wishlistClicked from "./assets/wishlistClicked.png";
import profile from "./assets/profile.png";
import profileClicked from "./assets/profileClicked.png";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  React.useEffect(() => {
    const getToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("token");
        setUserLoggedIn(storedToken != null);
      } catch (error) {
        console.error("Error retrieving token:", error);
      }
    };

    getToken();
  }, []);
  const [userLoggedIn, setUserLoggedIn] = React.useState();

  const handleLogin = () => {
    setUserLoggedIn(true);
  };
  return (
    <NavigationContainer>
      {userLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            options={{
              headerShown: true,
              headerRight: SearchButton,
              headerTitle: ""
            }}
          >
            {() => (
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconSource;

                    if (route.name === "Home") {
                      iconSource = focused ? homeClicked : home;
                    } else if (route.name === "Categories") {
                      iconSource = focused ? categoriesClicked : categories;
                    } else if (route.name === "Wishlist") {
                      iconSource = focused ? wishlistClicked : wishlist;
                    } else if (route.name === "Profile") {
                      iconSource = focused ? profileClicked : profile;
                    }

                    return (
                      <Image
                        source={iconSource}
                        style={{ width: size, height: size }}
                      />
                    );
                  },
                })}
                tabBarOptions={{
                  activeTintColor: "#7867BE",
                  inactiveTintColor: "gray",
                }}
              >
                <Tab.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ headerTitle: "", headerShown: false }}
                />
                <Tab.Screen
                  name="Categories"
                  component={CategoriesScreen}
                  options={{ headerTitle: "", headerShown: false }}
                />
                <Tab.Screen
                  name="Wishlist"
                  component={WishlistScreen}
                  options={{ headerTitle: "", headerShown: false }}
                />
                <Tab.Screen
                  name="Profile"
                  component={ProfileScreen}
                  options={{ headerTitle: "", headerShown: false }}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ headerTitle: "" }}
          />
          <Stack.Screen
            name="CatalogScreen"
            component={CatalogScreen}
            options={{ headerTitle: "" }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ headerTitle: "" }}
          />
        </Stack.Navigator>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
