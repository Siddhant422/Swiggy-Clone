import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TypesFood = () => {
  const types = [
    {
      id: '0',
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq',
      name: 'Biriyani',
    },
    {
      id: '1',
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc',
      name: 'Dessert',
    },
    {
      id: '2',
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs',
      name: 'Burger',
    },
    {
      id: '3',
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud',
      name: 'Salad',
    },
    {
      id: '4',
      image:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb',
      name: 'Sandwiches',
    },
  ];
  return (
    <View>
        <Text style = {styles.heading}>What's on your mind ?</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item, index) => (
          <View key={index} style = {{margin:10}}>
            <Image
              source={{uri: item.image}}
              style={{width: 60, height: 60, borderRadius: 30}}
            />
            <Text style = {styles.textStyle}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TypesFood;

const styles = StyleSheet.create({
    textStyle: {
        marginTop:6, 
        textAlign:'center',
        color: 'black',
        fontWeight: '600',
    },
    heading: {
        padding: 15,
        fontWeight: '900',
        color: 'black',
        fontSize: 17,
        alignItems: 'center',
    }
});
