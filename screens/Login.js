import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/Logo.png";
import CustomButton from "../components/CustomButton";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ onLogin }) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 30,
        }),
      });
      if (response.ok) {
        let responseData = await response.json();
        await AsyncStorage.setItem('token', responseData.token);
        onLogin();        
      }
      else{
        setError("Invalid username or password");
      }
    } catch (error) {
      console.log(error);
      // TODO: handle error
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
      <CustomButton onPress={handleLogin} />
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
