import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import actions from "../redux/actions"
const {addTOWishList} = actions;

const Products = ({ item }) => {
  const navigation = useNavigation();
  
  const dispatch = useDispatch()
  
  const sendDataToWishList = (item) =>{
    dispatch(addTOWishList(item))
  }
  
  const [isLiked, setIsLiked]=useState(false)

  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate("ProductD", {item})
    }}
    
    style={styles.container}>
       <Image style={{height: 110, width: 120}}source={{uri: item.image}}/>
      <Text style={styles.productName}>{item.title}</Text>
      <View style={styles.price}>
      <Text style={styles.originalPrice}>{item.original_price}</Text>
      <Text style={styles.offPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity onPress={()=>{sendDataToWishList(item); setIsLiked(!isLiked)}}
      
      style={styles.heart}>
      {
        isLiked ?  
        <AntDesign name="heart" size={21} color="#55759A"/>
        :
        <AntDesign name="hearto" size={21} color="#55759A"/>
      }
        
       </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default Products

const styles = StyleSheet.create({
    container:{
        width: 172,
        height: 251,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        margin: 15,
        position: "relative",
        marginHorizontal: 21,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginRight: 1
        
    },
    productName:{
        color: "#000000",
        fontSize: 19,
        fontWeight: "800",
        textAlign: "center",
        marginTop: 22
    },
    price:{
        flexDirection: "row",
        margin: 15,
        marginTop: 9,
        textAlignVertical: "center"
    },
    originalPrice:{
        fontSize: 12,
        fontWeight: "bold",
        color: "#969696",
        marginTop: 4,
        marginLeft: 6
    },
    offPrice:{
       fontSize: 18,
       fontWeight: "600",
       color: "#282828",
       marginLeft: 11
    },
    heart:{
      position: "absolute",
      top: "5%",
      right: "11%"
    }
})