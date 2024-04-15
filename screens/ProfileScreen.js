import React from 'react';
import { View, Text } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import LogOut from '../components/LogOut';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/auth/me', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${await AsyncStorage.getItem('token')}`, 
          }, 
        })
        if(!response.ok) {
          throw new Error("Network response was not ok");
        }
        let responseData = await response.json();
        console.log(responseData);
        setProfile({
          firstName: responseData.firstName,
          lastName: responseData.lastName,
          gender: responseData.gender,
          image: responseData.image});
        
      } catch (err) {
        console.log(error);
      }
    };
    fetchData();
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
        <ProfileCard profile={profile}/>
        <View>
            <LogOut />
        </View>
    </View>
  );
}
export default ProfileScreen;