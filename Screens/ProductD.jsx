import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { act, useState } from 'react'
import Header from '../Components/Header'
import LinearGradient from 'react-native-linear-gradient'
import { AirbnbRating, Rating } from 'react-native-ratings'
import { useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import actions from '../redux/actions'
const {addTOCart} = actions;

const colorsArray = [
  "#333333",
  "#234BC1",
  "#FF3131"
]
const ProductD = () => {
  const route = useRoute();
  const item = route.params.item;
  const [selectColor, showBorder] = useState(null)

  const dispatch = useDispatch()

    const handleAddtoCart = (item) =>{
          // and is use dispatch k zariye hum add to cart funtion ko data send karni hai
          dispatch(addTOCart(item))
          // console.log("This is data from add to cart button", item)
      }

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        //  colors={['#425D7B', '#605C8B', '#736DB6']}
        //  start={{x: 0, y: 0}}
        //  end={{x: 1, y: 0}}
        //  locations={[0, 0.79, 1]}

        colors={['#425D7B', '#C7E5F8']} // Array of colors
        locations={[0.1, 0.75]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}

        style={styles.top}>

        <View style={styles.bottom}>
          <View style={styles.detailes}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis ultricies dui turpis lobortis arcu vitae pretium.</Text>
            <Text style={styles.price}>${item.price}</Text>

            {/* Rating */}
            <View style={styles.ratingContainer}>
              <AirbnbRating reviews={["Poor", "Bad", "Good", "Very Good", "Excelent"]}
                defaultRating={5}
                selectedColor='#55759A'
                unSelectedColor="lightgray"
                size={20}
                showRating={false}
              />
            </View>
            {/* Colors */}
            <Text style={styles.colorText}>Item Color</Text>
            <View style={styles.colorContainer}>
              {
                colorsArray.map((color) => {
                  return (<TouchableOpacity onPress={() => {
                    showBorder(color)
                  }}
                    style={[styles.borderCircle, selectColor === color && {borderWidth: 2 }]}>
                    <View style={[styles.circle, { backgroundColor: color }]} />
                  </TouchableOpacity>


                  )
                })
              }
            </View>
          {/* Add to cart button */}
          <TouchableOpacity onPress={()=>handleAddtoCart(item)} style={styles.cartButton}>
            <Text style={styles.cartButtonText}>Add to cart</Text>
          </TouchableOpacity>
          </View>
        </View>
        <Image style={styles.productImage} source={{uri: item.image}} />
      </LinearGradient>


    </View>
  )
}

export default ProductD

const styles = StyleSheet.create({
  top: {
    flex: 1,
    justifyContent: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"

  },
  bottom: {
    flex: 2,
    backgroundColor: "white",
    height: 581,
    width: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: 261
  },
  productImage: {
    height: 241,
    width: 263,
    position: "absolute",
    top: "8%"
  },
  detailes: {
    marginTop: 99,
    margin: 18
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000"
  },
  description: {
    fontSize: 14,
    fontWeight: "regular",
    color: "#000000",
    marginTop: 11
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 25
  },
  ratingContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 11
  },
  circle: {
    height: 18,
    width: 18,
    borderRadius: 18,
  },
  colorContainer: {
    marginTop: 14,
    flexDirection: "row",
  },
  borderCircle: {
    height: 25,
    width: 25,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15
  },
  colorText:{
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15
  },
  cartButton:{
    backgroundColor: "#55759A",
    padding: 18,
    borderRadius: 51,
    marginTop: 55,
  },
  cartButtonText:{
    color: "#FFFFFF",
    fontSize: 18, 
    fontWeight: "bold",
    textAlign: "center"
  }
})