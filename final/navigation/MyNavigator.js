import React from "react";
// import library ที่จำเป็น
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; // v.6.x
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import screen ที่เกี่ยวข้อง
import WelcomeScreen from "../screens/WelcomeScreen";
import SemesterScreen from "../screens/SemesterScreen";
import ListScreen from "../screens/SubjectListScreen";
import PlaneScreen from "../screens/PlanScreen"
import DetailScreen from "../screens/SubjectDetailScreen"

const Welcome = createNativeStackNavigator();
const tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

function StudyPlanTab() {
  return (
    <tab.Navigator screenOptions = {{headerShown:false}}>
      <tab.Screen name="Subjects" component={StudyPlanStack}/>
      <tab.Screen name="Plan" component={PlaneScreen}/>
    </tab.Navigator>
  );
}

function StudyPlanStack() {
  return (
    <stack.Navigator screenOptions = {{headerShown:false}}>
      <stack.Screen name="list" component={ListScreen}/>
      <stack.Screen name="detail" component={DetailScreen}/>
    </stack.Navigator>
  );
}

export default function MyNavigator() {
  return (
    <NavigationContainer>
      <Welcome.Navigator initialRouteName="Welcome">
      <Welcome.Screen name="Welcome" component={WelcomeScreen} />
      <Welcome.Screen name="Semester" component={SemesterScreen} 
        options={{
          title: "Semester Selection",
      }}/>
      <Welcome.Screen name="ListSubject" component={StudyPlanTab} 
        options={{
          title: " Study Planner",
      }} />
      </Welcome.Navigator>
    </NavigationContainer>
  );
}
