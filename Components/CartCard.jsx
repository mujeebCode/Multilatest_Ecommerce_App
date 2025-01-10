import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useReducer } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import actions from '../redux/actions'
const { removeFromCart, removeFromWishList } = actions;


const CartCard = ({ item, wishListDelelte }) => {
    const dispatch = useDispatch()
    const removeCart = (item) => {
        dispatch(removeFromCart(item.id))
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.offPrice}>${item.price}</Text>
                <Text style={styles.originalPrice}>${item.original_price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeCart(item)}>
                <MaterialIcons name="delete-outline" size={30} color="#55759A" style={styles.deleteIcon} />
            </TouchableOpacity>
        </View>
    )
}

export default CartCard

const styles = StyleSheet.create({
    container: {
        height: 121,
        width: 371,
        backgroundColor: "#F6F6F6",
        margin: 13,
        borderRadius: 8,
        // flexDirection: "row",
        flexDirection: "row",
        marginHorizontal: 19
    },
    productImage: {
        height: 119,
        width: 112
    },
    title: {
        fontSize: 18,
        fontWeight: "900",
        marginTop: 19
    },
    offPrice: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 6
    },
    originalPrice: {
        fontSize: 12,
        fontWeight: "semibold",
        marginTop: 4
    },
    cardContent: {
        flex: 1,
        marginHorizontal: 11
    },
    deleteIcon: {
        margin: 11,
    }
})