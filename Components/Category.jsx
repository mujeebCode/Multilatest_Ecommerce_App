import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({item, selectCategory, setSelectCategory}) => {
  return (
    <TouchableOpacity onPress={()=>setSelectCategory(item)}
    style={{margin: 15}}>
        <Text style={[styles.Trending, selectCategory === item && {
            color: "#FFFFFF",
            backgroundColor: "#55759A"
        } ]}>{item}</Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    Trending:{
        backgroundColor: "#F6F6F6",
        color: "#787878",
        fontSize: 16,
        fontWeight: "600",
        borderRadius: 16,
        // marginHorizontal: 11,
        paddingHorizontal: 35,
        paddingVertical: 11,
        textAlign: "center",
        // margin: 11,
    },

})