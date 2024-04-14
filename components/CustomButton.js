import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>LOG IN</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7867BE', 
    padding: 10,
    borderRadius: 5,
    width: '100%',
    
  },
  text: {
    color: '#ffffff', 
    textAlign: 'center',
    fontSize: 16,
  },
});

export default CustomButton;
