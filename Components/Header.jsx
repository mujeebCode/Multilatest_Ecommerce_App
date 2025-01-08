import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { startTransition, useEffect, useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { ServerContainer } from '@react-navigation/native';
import Icon2 from "react-native-vector-icons/Feather"
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';



const Header = ({ isCart, favourite, myCart,  histories }) => {

  const navigation = useNavigation()
  const cartData = useSelector(state => state.reducer)
  const [cartItems, setCartItems]=useState(0)

  useEffect(()=>{
    setCartItems(cartData.length)
  },[cartData])

  return (
    <View>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          {isCart ? <Icon name="chevron-back" size={30} color="#FCFCFC" />
            :
            <Icon name="menu" color="white" size={30} />
          }
        </TouchableOpacity>
        {favourite? <Text style={styles.myCart}>Favourites</Text>
        :
        null
        }
        {
          myCart? <Text style={styles.myCart}>My Cart</Text>
          : null
        }
        {
           histories? <Text style={styles.myCart}> Histories </Text>
           : null
        }
        <TouchableOpacity onPress={() => {
          navigation.navigate("CartScreen")
        }}>
        <View style={{position: "relative"}}>
          <Icon2 name="shopping-cart" size={30} color="#FCFCFC" />
        </View>
        <View style={{position: "absolute",left: "59%", bottom: "71%", backgroundColor: "#55759A", height: 16, width: 16, borderRadius: 22}}>
          <Text style={{color: "white", textAlign: "center", fontSize: 12, fontWeight: "medium"}}>{cartItems}</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: "row",
    margin: 15,
    justifyContent: "space-between"
  },
  myCart:{
    fontSize: 25,
    fontWeight: "400",
    color: "white"
  }

})