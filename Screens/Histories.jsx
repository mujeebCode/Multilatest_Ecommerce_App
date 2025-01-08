import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import CartCard from '../Components/CartCard';

const Histories = () => {
    return (
        <LinearGradient
            colors={['#425D7B', '#C7E5F8']}
            start={{ x: 0, y: 0 }}
            locations={[0.1, 0.75]}
            style={styles.container}>

         {/* Header */}
            <Header isCart={true} histories={true}/>
            <TouchableOpacity style={styles.cartButton}>
                <Text style={styles.cartButtonText}>Remove All</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default Histories;

const styles = StyleSheet.create({
    container: {
        flex: 1
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