import React from 'react';
import { View, Text } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import LogOut from '../components/LogOut';
const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
        <ProfileCard username={"Gagik"}/>
        <View>
            <LogOut />
        </View>
    </View>
  );
}
export default ProfileScreen;