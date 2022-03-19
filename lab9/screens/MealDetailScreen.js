import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({route,navigation}) => {

  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้
//   const {foodName, steps} = route.params;

  return (
    <View style={styles.screen}>
      {/* <Text>The Meal Detail Screen!</Text> */}
      <Text style={styles.foodTitle}>{route.params.mealTitle}</Text>
      <Text style={styles.steps}>{route.params.mealStep}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  foodTitle: {
      fontSize : 25,
      margin : 15
  },
  steps :{
    fontSize : 20,
    margin : 10
  }
});

export default MealDetailScreen;
