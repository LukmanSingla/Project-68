import React from "react";
import { StyleSheet, Text, View } from "react-native";
import fbScreen from "../Screens/fb";
import instaScreen from "../Screens/Insta";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export default class BottomTabNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <View
          style={{
            backgroundColor: "red",
            height: 50,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Buzz-App</Text>
        </View>
        <Tab.Navigator>
          <Tab.Screen name="Facebook" component={fbScreen} />
          <Tab.Screen name="Instagram" component={instaScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
