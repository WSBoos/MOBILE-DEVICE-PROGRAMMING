import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";


const MealDetailScreen = ({ route, navigation }) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const { prev, ingre, steps } = route.params;


  return (
    <View style={styles}>
      <Text style={styles.head}>Ingredients</Text>

      <FlatList
        style={{ width: "100%", }}
        data={route.params.ingre}
        renderItem={({ item, index }) => <Text>{index + 1}.{item}</Text>}
        keyExtractor={(index) => index.toString()}
      />
      <Text style={styles.head}>Steps</Text>

      <FlatList
        style={{ width: "100%" }}
        data={route.params.steps}
        renderItem={({ item, index }) => <Text>{index + 1}.{item}</Text>}
        keyExtractor={(index) => index.toString()}
      />
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          navigation.navigate("S1", { prev: "Screen3" });
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
  head: {
    fontSize: 20,
    margin: 9
  }
});

export default MealDetailScreen;
