import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList"


const CategoryMealsScreen = ({route, navigation},props) => {
//   const renderMealItem = (itemData) => {
//     return (
//       <MealItem
//         title={itemData.item.title}
//         duration={itemData.item.duration}
//         complexity={itemData.item.complexity}
//         affordability={itemData.item.affordability}
//         image={itemData.item.imageUrl}
//         onSelectMeal={() => {
//           navigation.navigate("MealDetail", {foodName : itemData.item.title, steps: itemData.item.steps })
//         }}
//       />
      

//       // ส่วนนี้ <View>...</View> ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <MealItem> ข้างบนแทน
//     //   <View style={{ height: 50, width: "40%" }}>
//     //     <Text>{itemData.item.title}</Text>
//     //   </View>
//     );
//   };

  
   const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View>
        <MealList
        listData={displayedMeals}
        navigation={navigation}
        />

    </View>
    // <View style={styles.screen}>
    //   <FlatList
    //     style={{ width: "100%" }}
    //     data={displayedMeals}
    //     renderItem={renderMealItem}
    //     numColumns={1}
    //   />
    // </View>

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <FlatList> ข้างบนแทน
    // <View>
    //   <Text>Category Meals Screen!!</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
