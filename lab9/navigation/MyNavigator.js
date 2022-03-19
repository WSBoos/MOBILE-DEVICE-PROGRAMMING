import React from "react";
// import library ที่จำเป็น
import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native'; // v.6.x
import { createNativeStackNavigator  } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";


// import screen ที่เกี่ยวข้อง
import Categories from "../screens/CategoriesScreen";
import  CategoryMeals from "../screens/CategoryMealsScreen";
import  MealDetail from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen"
import MealDetailScreen from "../screens/MealDetailScreen"
import FiltersScreen from "../screens/FiltersScreen"

const MealsNavigator = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const FavNavigator = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


// สร้าง navigator ตามโจทย์กำหนด

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

// สร้าง Navigator หลัก
  function MyNavigator() {
  return (
    // <NavigationContainer>
      <MealsNavigator.Navigator
          screenOptions={{ headerStyle: { backgroundColor: "#4a148c", },
                            headerTintColor: "white" }}>

              <MealsNavigator.Screen name="Categories" component={Categories} 
              options={{
                  title: "Meal Categories"
              }}/>

          
            <MealsNavigator.Screen name="CategoryMeals" component={CategoryMeals} 
              options={
                ({route}) => ({
                    title : route.params.categoryTitle
                })
              }/>

            <MealsNavigator.Screen name="MealDetail" component={MealDetail} 
              options={
                ({route}) => ({
                    title : route.params.foodName
                })
              }/>
          </MealsNavigator.Navigator>
    // </NavigationContainer> 
  );
}



function MealsFavTabNavigator() {
    return(
        //  <NavigationContainer>
             <Tab.Navigator   
                    screenOptions={{ headerShown : false }}>

            
            <Tab.Screen name="Meals" component={MyNavigator}
            options={{  tabBarIcon : ({color, size}) => {
                return<Ionicons name="ios-restaurant" size={24} color="black" />;
                },
            }}/>



            <Tab.Screen name="Favorites" component={FavStackNavigator}
            options={{  tabBarIcon : ({color, size}) => {
            return <Ionicons name="ios-star" size={24} color="black" />;
                },
            }}/>

            </Tab.Navigator>
         // </NavigationContainer>    



    );
}

function FavStackNavigator() {
    return(
        <FavNavigator.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "#4a148c", },
                          headerTintColor: "white" }}>

            <FavNavigator.Screen name="Favorites" component={FavoritesScreen} 
            options={{
                title: "FavoritesScreen"
            }}/>

        
          <FavNavigator.Screen name="MealDetail" component={MealDetailScreen} 
            options={
                {
                    title: "FavoritesScreen" 
                }
            //   ({route}) => ({
            //       title : route.params.categoryTitle
            //   })
            
            }/>

        </FavNavigator.Navigator>
    );
}


function FiltersNavigator() {
    return(
      <Stack.Navigator>
          <Stack.Screen name="Filters" component={FiltersScreen}/>
      </Stack.Navigator>
    );
}


export default function MainNavigator() {
    return(
    <NavigationContainer>
      <Drawer.Navigator >
          <Drawer.Screen name="MealsFav" component={MealsFavTabNavigator}
          options={
            {
                title: "Meals" 
            } }
          
          />

          <Drawer.Screen name="Filters" component={FiltersNavigator}/>
      </Drawer.Navigator>
     </NavigationContainer> 
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "blue",
      alignItems: "center",
      justifyContent: "center",
    },
  });
