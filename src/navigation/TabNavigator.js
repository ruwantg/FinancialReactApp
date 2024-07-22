import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TransactionsStackNavigator from "./TransactionsStackNavigator";
import SummaryScreen from "../screens/SummaryScreen";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#9EF5FA" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Transactions") {
                iconName = focused ? "cash" : "cash-outline";
              } else if (route.name === "Summary") {
                iconName = focused
                  ? "information-circle"
                  : "information-circle-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: { backgroundColor: "#9EF5FA" },
            headerStyle: { backgroundColor: "#9EF5FA" }, // Customize header background color
            headerTintColor: "black", // Optionally customize header text color
            headerTitleStyle: { fontWeight: "bold" }, // Optionally customize header title style
          })}
        >
          <Tab.Screen
            name="Transactions"
            component={TransactionsStackNavigator}
          />
          <Tab.Screen name="Summary" component={SummaryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default TabNavigator;
