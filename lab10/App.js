import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Example01 from "./examples/Example01";
import Example02 from "./examples/Example02";
import Example03 from "./examples/Example03";
import Spring from "./examples/Spring";
import Parallel from "./examples/Parallel";
import Sequence from "./examples/Sequence";
import Example07 from "./examples/Example07";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#ee801e",
          tabBarLabelStyle: { fontSize: 15 },
        }}
      >
        <Tab.Screen name="Spring" component={Spring}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <MaterialIcons name="vibration" size={size} color={color} />;
            },
          }} />
        <Tab.Screen name="Sequence" component={Sequence}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <MaterialCommunityIcons name="view-sequential" size={size} color={color} />;
            },
          }} />
        <Tab.Screen name="Parallel" component={Parallel}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Entypo name="flow-parallel" size={size} color={color} />;
            },
          }} />
      </Tab.Navigator>
    </NavigationContainer>

  );;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

});