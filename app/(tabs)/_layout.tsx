import { Tabs } from "expo-router";
import { Image, Dimensions } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabsLayout() {
  const screenHeight = Dimensions.get("window").height;
  const tabHeight = screenHeight * 0.1;

  return (
    <Tabs screenOptions={{
      tabBarStyle: { backgroundColor: "#344445", height: tabHeight },
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#FFFFFF",
      tabBarInactiveTintColor: "#808080"
    }}>
      
      <Tabs.Screen
        name="home"
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <FontAwesome name="home" style={{ fontSize: focused ? 41.6 : 40, color: focused ? "#FFFFFF" : "#808080" }} />
          )}}/>

      <Tabs.Screen
        name="scanner"
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="barcode-scan" style={{ fontSize: focused ? 41.6 : 40, color: focused ? "#FFFFFF" : "#808080" }} />
          )}}/>

      <Tabs.Screen
        name="search"
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <FontAwesome name="search" style={{ fontSize: focused ? 41.6 : 40, color: focused ? "#FFFFFF" : "#808080" }} />
            )}}/>
            
    </Tabs>
  );
}