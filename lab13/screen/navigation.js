import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5, AntDesign, Ionicons } from "@expo/vector-icons";
import addstudent from "./addstudent";
import showstudent from "./showstudent";
import studentinfo from "./studentinfo";


const studentNavigator = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <studentNavigator.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#32B5FF" },
          headerTintColor: "white",
        //   headerShown: false,
        }}
      >
        <studentNavigator.Screen name="Add Student" component={addstudent} />
        <studentNavigator.Screen name="Student List" component={showstudent} />
        <studentNavigator.Screen name="Student Info" component={studentinfo} />
      </studentNavigator.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
