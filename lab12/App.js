import React from "react";
import { StyleSheet } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyNavigator from "./navigation/MyNavigator";
import { createStore, combineReducers } from 'redux';
import mealsReducer from "./store/reducers/mealsReducer";
import { Provider } from 'react-redux'
// import คอมโพเนนต์ที่จำเป็น

const MealsNavigator = createNativeStackNavigator();

const rootReducer = combineReducers({
  meals: mealsReducer
})


const store = createStore(rootReducer)

export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return <Provider store={store}><MyNavigator /></Provider>;

  // return (
  // <NavigationContainer>
  //   <MealsNavigator.Navigator initialRouteName="S1">
  //     <MealsNavigator.Screen name="S1" component={CategoriesScreen}
  //       options={{
  //         title: "Meal Categories",
  //         headerStyle: { backgroundColor: "#4a148c", },
  //         headerTintColor: "white"
  //       }} />
  //     <MealsNavigator.Screen name="S2" component={CategoryMealsScreen}
  //       options={
  //         ({ route }) => ({
  //           title: route.params.title.toString(),
  //           headerStyle: { backgroundColor: "#4a148c", },
  //           headerTintColor: "white"
  //         })} />
  //     <MealsNavigator.Screen name="S3" component={MealDetailScreen}
  //       options={
  //         ({ route }) => ({
  //           title: route.params.title.toString(),
  //         })}
  //     />
  //   </MealsNavigator.Navigator>
  // </NavigationContainer>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
