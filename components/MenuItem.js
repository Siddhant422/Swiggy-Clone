import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'

const MenuItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style = {{margin: 10}}>
      <Pressable onPress={() => navigation.navigate("Menu")} style = {{flexDirection: 'row'}}>
        <View>
        <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={{ aspectRatio: 5 / 6, height: 170 }}
            source={{ uri: item.image }}>
          </ImageBackground>
          <Icon name ="hearto" style = {{position: "absolute", right:10, top:10}} color="white" size={24}/>
        </View>
        <View style = {{marginLeft: 10}}>
            <Text style = {{fontSize:16, fontWeight:'bold'}}>{item.name}</Text>
            <View style = {styles.descStyle}>
                <MaterialCommunityIcons name="star-circle" size={24} color="green" />
                <Text style = {{marginLeft: 3, fontSize: 15 ,fontWeight: '400'}}>{item.rating}</Text>
                <Text style = {{marginLeft: 3}}>•</Text>
                <Text style = {{marginLeft: 3, fontSize: 15 ,fontWeight: '400'}}>{item.time} mins</Text>
            </View>
            <Text style ={{marginTop:6}}>{item.adress}</Text>
            <View style = {{flexDirection:'row', marginTop: 6}}>
                <FontAwesome name = "rupee" size = {22} style = {{marginLeft:3}}/>
                <Text style = {{marginHorizontal: 10}}>{item.cost_for_two} for two</Text>
            </View>
            <View style = {{flexDirection: 'row'}}>
                <Fontisto name = "motorcycle" size ={24} style = {{marginTop:7}}/>
                <Text style ={{marginTop:9, marginLeft: 10}}>Free Delivery</Text>
            </View>
        </View>
        
      </Pressable>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({
    descStyle : {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
})