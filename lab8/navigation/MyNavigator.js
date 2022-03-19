import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // v.6
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; 

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'

// สร้าง navigator ตามโจทย์กำหนด
const MealsNavigator = createNativeStackNavigator();
const MealsFavTabNavigator = createBottomTabNavigator();
const FavNavigator = createNativeStackNavigator();

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
function MealNavigator() {
  return (
    <MealsNavigator.Navigator initialRouteName="Categories"
    screenOptions={{
     headerStyle: { backgroundColor: "#4a148c", },
     headerTintColor: "white",
    }}>

   <MealsNavigator.Screen name="Categories" component={CategoriesScreen} 
     options={{
       title: "Meal Categories",
   }} />

   <MealsNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen} 
   options={
     ({ route }) => ({
     title: route.params.title.toString(),
     }) } />
   <MealsNavigator.Screen name="MealDetail" component={MealDetailScreen} />
   </MealsNavigator.Navigator>
  );
}

function MealFavTabNavigator() {
  return (
    <MealsFavTabNavigator.Navigator>
      <MealsFavTabNavigator.Screen name="Meals" component={MealNavigator} 
        options={{
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="ios-restaurant" size={size} color={color} />
          },
        }}/>

      <MealsFavTabNavigator.Screen name=" Favorites" component={FavNavigate}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="ios-star" size={size} color={color} />
          },
        }}/>
    </MealsFavTabNavigator.Navigator>
  );
}

function FavNavigate() {
  return (
    <FavNavigator.Navigator>
    <FavNavigator.Screen name="Favorites" component={FavoritesScreen} />
    <FavNavigator.Screen name="MealDetail" component={MealDetailScreen} />
    </FavNavigator.Navigator>
  );
}

// อาจกำหนด Navigator เพิ่มได้
// function MyYYNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <MealFavTabNavigator/>
    </NavigationContainer>
  );
}
