import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchScreen from "../Screens/Search";
import TransactionScreen from "../Screens/Transaction";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export default class BottomTabNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Transaction" component={TransactionScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
