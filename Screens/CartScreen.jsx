import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import CartCard from '../Components/CartCard';
import { useSelector } from 'react-redux';

const CartScreen = () => {
  const cartData = useSelector(state => state.reducer)
    return (
        <LinearGradient
            colors={['#425D7B', '#C7E5F8']}
            start={{ x: 0, y: 0 }}
            locations={[0.1, 0.75]}
            style={styles.container}>

         {/* Header */}
            <Header isCart={true} myCart={true}/>
            <FlatList data={cartData} renderItem={({item}) => <CartCard item={item}/>} />
            <View>
                <View style={styles.total}>
                    <Text style={styles.totalText}>Total:</Text>
                    <Text style={styles.tprice}>$199</Text>
                </View>
                <View style={styles.total}>
                    <Text style={styles.totalText}>Shipping:</Text>
                    <Text style={styles.tprice}>$0.0</Text>
                </View>
                <View style={styles.devider} />
            </View>
            <View style={styles.total}>
                <Text style={styles.totalText}>Grand Total:</Text>
                <Text style={styles.tprice}>$199</Text>
            </View>
            <TouchableOpacity style={styles.cartButton}>
                <Text style={styles.cartButtonText}>Checkout</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    total: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 15,
        marginHorizontal: 19
    },
    devider: {
        borderWidth: 1,
        borderColor: "#C0C0C0",
        margin: 11

    },
    cartButton: {
        backgroundColor: "#55759A",
        padding: 18,
        borderRadius: 51,
        marginTop: 22,
        margin: 15
    },
    cartButtonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    }
})