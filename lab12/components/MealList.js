import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import CategoryGridTile from "./CategoryGridTile";
const MealList = (props) => {
  const navigation = props.navigation
  const renderMealItem = (itemData) => {
    return (
      //เขียนโค้ดเพิ่ม
      <View style={{ width: "50%" }}>
        {/* <Text>{itemData.item.title}</Text> */}
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onSelect={() => {
            // เขียนโค้ดเพิ่ม
            navigation.navigate("S2", { prev: "Screen1", id: itemData.item.id, title: itemData.item.title });
          }}
        />
      </View>
    );
  };

  return (
    <View >
      <FlatList data={props.listData} renderItem={renderMealItem} numColumns={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
