import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProfilePage = ({navigation}) => {
  const navigate = useNavigation();
  return (
    <View>
      <Text>ProfilePage</Text>
      <Button title="Account Settings"  onPress={() => navigation.navigate("Account")}/>
    </View>
  )
}

export default ProfilePage

const styles = StyleSheet.create({})