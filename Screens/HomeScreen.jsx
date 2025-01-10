import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from "../Components/Header";
import LinearGradient from 'react-native-linear-gradient';
import Category from '../Components/Category';
import Products from '../Components/Products';
import Icon2 from "react-native-vector-icons/Feather"
import data from "../data/data.json"

const categories = ["Trending", "All", "New", "Men", "Women"]
const HomeScreen = () => {
  const [selectCategory, setSelectCategory] = useState(null);
  const [product, setProduct]=useState(data.products);

  return (
    <LinearGradient
      colors={['#425D7B', '#C7E5F8']} // Array of colors
      locations={[0.1, 0.75]}
      start={{ x: 0, y: 0 }} // Start from top-left corner
      // end={{ x: 1, y: 0 }} // End at the top-right corner (horizontal gradient)
      style={styles.container} // Style applied to the gradient container
    >
      <Header />
      {/* Search  */}

      <Text style={styles.appName}>MultiLatest</Text>
      <View style={styles.searchBox}>
        <View style={styles.searchIcon}>
          <Icon2 name="search" size={24} color="#000000" />
        </View>
        <TextInput placeholder='Search Headphones you need' style={styles.placeholder} />
      </View>

      <FlatList 
      numColumns={2}
      ListHeaderComponent={
        <>
            {/* Category Section */}

      <FlatList data={categories} renderItem={({ item }) => <Category item={item}
        selectCategory={selectCategory} setSelectCategory={setSelectCategory} />}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false} />
        </>
        
      }
      //  Product Section 
      data={product} renderItem={({item})=><Products item={item}/>} 
     />

    </LinearGradient>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  // container:{
  //   flex: 1
  // },
  products: {
    flexDirection: "row",
  },
  appName: {
    margin: 11,
    fontSize: 24,
    fontWeight: "bold",
    color: "#FCFCFC",
    marginLeft: 15,
    fontFamily: "Montserrat"
  },
  searchBox: {
    flexDirection: "row",
    width: 381,
    height: 48,
    backgroundColor: "#FCFCFC",
    borderRadius: 8,
    margin: 15,
  },
  searchIcon: {
    margin: 11
  },
  placeholder: {
    fontSize: 16,
    color: "#5A5A5A",
    fontWeight: "regular"
  }
})