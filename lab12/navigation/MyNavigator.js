import React from "react";
// import library ที่จำเป็น
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import screen ที่เกี่ยวข้อง
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen"

// สร้าง navigator ตามโจทย์กำหนด
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';

import { useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/actions/mealsAction'


// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
// function MyXXNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }

// อาจกำหนด Navigator เพิ่มได้
// function MyYYNavigator() {
//   return (
//     // กำหนดรายละเอียดของ navigator
//   );
// }
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// สร้าง Navigator หลัก
// export default function MealNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="S1">
//         <Stack.Screen name="S1" component={CategoriesScreen}
//           options={{
//             title: "Meal Categories",
//             headerStyle: { backgroundColor: "#4a148c", },
//             headerTintColor: "white"
//           }} />
//         <Stack.Screen name="S2" component={CategoryMealsScreen}
//           options={
//             ({ route }) => ({
//               title: route.params.title.toString(),
//               headerStyle: { backgroundColor: "#4a148c", },
//               headerTintColor: "white"
//             })} />
//         <Stack.Screen name="S3" component={MealDetailScreen}
//           options={
//             ({ route }) => ({
//               title: route.params.title.toString(),
//             })}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }

function MealsFavTabNavigator() {

  return (

    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "darkblue",
      tabBarStyle: { backgroundColor: "lightblue" },
      tabBarLabelStyle: { fontSize: 15 },
    }}>
      <Tab.Screen name="Meals" component={MealsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-restaurant" size={size} color={color} />;
          },
        }} />
      <Tab.Screen name="Favorites" component={FavNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="staro" size={size} color={color} />;
          },
        }} />
    </Tab.Navigator>

  );
}

function FavNavigator() {

  return (

    <Stack.Navigator initialRouteName="Fav"
      screenOptions={{
        headerShown: true
      }}>
      <Stack.Screen name="Favorite" component={FavoritesScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>

  );
}



function MealsNavigator() {
  const dispatch = useDispatch()

  const toggleFavoriteHandler = (mealId) => {
    dispatch(toggleFavorite(mealId));
  };

  return (


    <Stack.Navigator initialRouteName="S1"
    >
      <Stack.Screen name="S1" component={CategoriesScreen}
        options={{
          title: "Meal Categories",
          headerStyle: { backgroundColor: "#4a148c", },
          headerTintColor: "white"
        }} />
      <Stack.Screen name="S2" component={CategoryMealsScreen}
        options={
          ({ route }) => ({
            title: route.params.title.toString(),
            headerStyle: { backgroundColor: "#4a148c", },
            headerTintColor: "white",
            
          })} />
      <Stack.Screen name="S3" component={MealDetailScreen}
        options={
          ({ route }) => ({
            title: route.params.title.toString(),
            headerStyle: { backgroundColor: "#4a148c", },
            headerTintColor: "white",
            headerRight: () => (
              // <AntDesign onPress={() => { }} name="star" size={24} color="white" />
              <AntDesign name="staro" size={24} color="white" onPress={() => {
                toggleFavoriteHandler(route.params.id)
                // console.log(route.params.id)
              }} />
            ),
          })}
        initialParams
      />
    </Stack.Navigator>


  );
}

function FiltersNavigator() {
  return (
    <Stack.Navigator initialRouteName="Filters" screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Filter" component={FiltersScreen} />
    </Stack.Navigator>
  );

}

export default function MainNavigator() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "gray",
        }} >
        <Drawer.Screen name="Food" component={MealsFavTabNavigator}
          options={{
            drawerLabel: "Meals",
            drawerIcon: ({ color }) => { return <AntDesign name="tags" size={24} color={color} />; },
          }} />
        <Drawer.Screen name="Filters" component={FiltersNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>

  );

}
