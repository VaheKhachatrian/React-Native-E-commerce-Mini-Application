import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LogOut = ({ onPressLogout }) => {
    const navigation = useNavigation();

    const handlePress = () => {
      navigation.navigate('Login');
    };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <TouchableOpacity onPress={onPressLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#ddd',
    borderRadius: 0,
    paddingHorizontal: 20,
    paddingVertical: '7%',
    marginTop: "140%",
    width: '100%',
    backgroundColor: '#fff',
  },

  logoutButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default LogOut;
