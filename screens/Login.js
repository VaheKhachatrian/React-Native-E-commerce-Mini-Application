// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     // Add your login logic here, e.g., validation, API call
//     if (username === 'admin' && password === 'password') {
//       // Navigate to the home screen or perform other actions
//       console.log('Login successful');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Username...     "
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password..."
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <Button title="Login" onPress={handleLogin} />
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 32,
//     marginBottom: 20,
//   },
//   input: {
//     width: '400px',
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 10,
//     marginBottom: 20,
//     padding: 15,
//     fontSize: 18,
//   },
//   error: {
//     color: 'red',
//     marginTop: 10,
//     fontSize: 16,
//   },
// });

// export default LoginScreen;

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/Logo.png";
import CustomButton from "../components/CustomButton";

const LoginScreen = ({ onLogin }) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOG IN</Text>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Username..."
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password..."
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton
        onPress={handleLogin}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  logoContainer: {
    height: 200,
  },
  logo: {
    width: 250, 
    height: 150, 
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    fontSize: 18,
  },
  error: {
    color: "red",
    marginTop: 10,
    fontSize: 16,
  },
});

export default LoginScreen;
