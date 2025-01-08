import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from "./Screens/ProfileScreen";
import Favourites from "./Screens/Favourites";
import Histories from "./Screens/Histories";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductD from './Screens/ProductD';
import CartScreen from './Screens/CartScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () =>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='Home' component={HomeScreen}/>
       <Stack.Screen name='ProductD' component={ProductD}/>
       <Stack.Screen name='CartScreen' component={CartScreen}/>
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          backgroundColor: "#55759A",
        },
        tabBarActiveTintColor: 'yellow', 
        tabBarInactiveTintColor: 'white'
      }}
      >
        <Tab.Screen name='HOME' component={MyHomeStack}
        options={{
          tabBarIcon:()=>{
            return(
              <Feather name="home" color="#FFFFFF" size={24}/>
            )
          }
        }}/>
        <Tab.Screen name="Favourites" component={Favourites}
        options={{
          tabBarIcon:(color)=>{
            return(
              <Feather name="heart" color="#FFFFFF" size={24} tabBarActiveTintColor="yellow"/>
            )
          }
        }}/>
        <Tab.Screen name="Histories" component={Histories}
        options={{
          tabBarIcon:()=>{
            return(
              <Ionicons name="chatbubble-outline" color="#FFFFFF" size={24}/>
            )
          }
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarIcon:()=>{
            return(
              <Feather name="user" color="#FFFFFF" size={24}/>
            )
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})