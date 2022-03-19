import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { useSelector } from 'react-redux';
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
  const filtered = MEALS.filter((meal) => favoriteMeals.includes(meal.id));
  const navigation = props.navigation



  const renderMealItem = (itemData) => {
    return (
      // ส่วนนี้ <View>...</View> ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <MealItem> ข้างบนแทน
      <View style={{ width: "100%" }}>
        <MealItem
          title={itemData.item.title}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          image={itemData.item.imageUrl}
          onSelectMeal={() => {
            // เขียนโค้ดเพิ่ม
            navigation.navigate("MealDetail", { prev: "Screen2", ingre: itemData.item.ingredients, steps: itemData.item.steps, title: itemData.item.title });
          }}
        />
      </View>
    );
  };

  return (

    <View >
      <FlatList
        style={{ width: "100%" }}
        data={filtered}
        renderItem={renderMealItem}
      />
      {/* <Text>{props}</Text> */}
    </View>

  );
};




const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
