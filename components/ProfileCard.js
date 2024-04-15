import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = ({ profile }) => {
  const { firstName, lastName, gender, image } = profile;
  return (
    <View style={styles.container}>
      <Image style={styles.userIcon} source={{uri: String(image)}}/>
      <View style={styles.userInfo}>
        <Text style={styles.username}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.gender}>{gender}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  gender: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProfileCard;
