// // import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import DetailsScreen from './screens/DetailsScreen';
// // // import
// // const Stack = createStackNavigator();
// // const App = () => {
//   //   return (
//     //     <NavigationContainer>
//     //       <Stack.Navigator>
// //         <Stack.Screen name="Home" component={HomeScreen} />
// //         <Stack.Screen name="Details" component={DetailsScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }
// // export default App;

// import HomeScreen from './screens/HomeScreen';
// import CategoriesScreen from './screens/CategoriesScreen';
// import WishlistScreen from './screens/WishlistScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import LoginScreen from './screens/Login';
// import * as React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// const HomeRoute = () => <HomeScreen />;

// const CategoriesRoute = () => <CategoriesScreen />

// const WishlistRoute = () => <WishlistScreen />

// const ProfileRoute = () => <ProfileScreen />

// export default function App() {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'home', title: 'Home', icon: 'queue-music' },
//     { key: 'categories', title: 'Categories', icon: 'album' },
//     { key: 'wishlist', title: 'Wishlist', icon: 'history' },
//     { key: 'profile', title: 'Profile', icon: 'history' },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     home: HomeRoute,
//     categories: CategoriesRoute,
//     wishlist: WishlistRoute,
//     profile: ProfileRoute
//   });

//   return (
//     <>
//     <LoginScreen />
//     <SafeAreaProvider>
//       <BottomNavigation
//         navigationState={{ index, routes }}
//         onIndexChange={setIndex}
//         renderScene={renderScene}
//         />
//     </SafeAreaProvider>
//         </>
//   );
// }
//   import React from "react";
//   import { NavigationContainer } from "@react-navigation/native";
//   import { createStackNavigator } from "@react-navigation/stack";
//   import HomeScreen from "./screens/HomeScreen";
//   import LoginScreen from "./screens/Login";
//   import { SafeAreaProvider } from "react-native-safe-area-context";
//   import { BottomNavigation, Text } from 'react-native-paper';

// const Stack = createStackNavigator();

// // const HomeRoute = () => <HomeScreen />;

// // const CategoriesRoute = () => <CategoriesScreen />

// // const WishlistRoute = () => <WishlistScreen />

// // const ProfileRoute = () => <ProfileScreen />

// const App = () => {

//     //   const [index, setIndex] = React.useState(0);
//     // const [routes] = React.useState([
//     //     { key: 'home', title: 'Home', icon: 'queue-music' },
//     //     { key: 'categories', title: 'Categories', icon: 'album' },
//     //     { key: 'wishlist', title: 'Wishlist', icon: 'history' },
//     //     { key: 'profile', title: 'Profile', icon: 'history' },
//     //   ]);

//     //   const renderScene = BottomNavigation.SceneMap({
//     //       home: HomeRoute,
//     //       categories: CategoriesRoute,
//     //       wishlist: WishlistRoute,
//     //       profile: ProfileRoute
//   // });
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Login"
//             component={LoginScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen name="Home" component={HomeScreen} />

//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };

// export default App;

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import * as React from 'react';
// import { useNavigation } from '@react-navigation/native';

// import HomeScreen from './screens/HomeScreen';
// import CategoriesScreen from './screens/CategoriesScreen';
// import WishlistScreen from './screens/WishlistScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import LoginScreen from "./screens/Login";

// const Tab = createBottomTabNavigator();

// export default function App() {
//   const [userLoggedIn, setUserLoggedIn] = React.useState(false);
//   const navigation = useNavigation();

//   // Function to handle login
//   const handleLogin = () => {
//     navigation.navigate('Home');
//     // Perform login logic
//     // If login is successful, set userLoggedIn to true
//     setUserLoggedIn(true);
//   };

//   return (
//     <NavigationContainer>
//       {userLoggedIn ? (
//         <Tab.Navigator>
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Categories" component={CategoriesScreen} />
//           <Tab.Screen name="Wishlist" component={WishlistScreen} />
//           <Tab.Screen name="Profile" component={ProfileScreen} />
//         </Tab.Navigator>
//       ) : (
//         <LoginScreen onLogin={handleLogin} />
//       )}
//     </NavigationContainer>
//   );
// }

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import * as React from "react";
// import { createStackNavigator } from "@react-navigation/stack";

// import HomeScreen from "./screens/HomeScreen";
// import CategoriesScreen from "./screens/CategoriesScreen";
// import WishlistScreen from "./screens/WishlistScreen";
// import ProfileScreen from "./screens/ProfileScreen";
// import LoginScreen from "./screens/Login";
// import ProductDetails from "./screens/ProductDetails";
// const Stack = createStackNavigator();

// const Tab = createBottomTabNavigator();

// export default function App() {
//   const [userLoggedIn, setUserLoggedIn] = React.useState(false);

//   // Function to handle login
//   const handleLogin = () => {
//     // Perform login logic
//     // If login is successful, set userLoggedIn to true
//     setUserLoggedIn(true);
//   };

//   return (
//     <NavigationContainer style={{ flex: 1, backgroundColor: "white" }}>
//       {userLoggedIn ? (
//         <Tab.Navigator>
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Categories" component={CategoriesScreen} />
//           <Tab.Screen name="Wishlist" component={WishlistScreen} />
//           <Tab.Screen name="Profile" component={ProfileScreen} />
//           {/* <Tab.Screen name="ProductDetails" component={ProductDetails} /> */}
//           {/* <Tab.Screen name="ProductDetails" component={ProductDetails} /> */}
//           {/* <Stack.Screen name="ProductDetails" component={ProductDetails} /> */}
//         </Tab.Navigator>
//       ) : (
//         <LoginScreen onLogin={handleLogin} />
//       )}
//     </NavigationContainer>
//   );
// }

{
  /* <Stack.Navigator>
  <Stack.Screen name="ProductDetails" component={ProductDetails} />
</Stack.Navigator> */
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import WishlistScreen from "./screens/WishlistScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/Login";
import ProductDetails from "./screens/ProductDetails";
import CatalogScreen from "./screens/CatalogScreen";
import SearchScreen from "./screens/SearchScreen";

import SearchButton from './components/SearchButton'
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
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);

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
                <Tab.Screen name="Home" component={HomeScreen} options={{headerTitle: "", headerShown: false}} />
                <Tab.Screen name="Categories" component={CategoriesScreen} options={{headerTitle: "", headerShown: false}} />
                <Tab.Screen name="Wishlist" component={WishlistScreen} options={{headerTitle: "", headerShown: false}} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{headerTitle: "", headerShown: false}} />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerTitle: ""}} />
          <Stack.Screen name="CatalogScreen" component={CatalogScreen} options={{headerTitle: ""}}/>
          <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerTitle: ""}} />
        </Stack.Navigator>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
