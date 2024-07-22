import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TransactionsListScreen from "../screens/TransactionsListScreen";
import TransactionDetailScreen from "../screens/TransactionDetailScreen";

const Stack = createStackNavigator();

function TransactionsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9EF5FA",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Transactions List"
        component={TransactionsListScreen}
      />
      <Stack.Screen
        name="Transaction Detail"
        component={TransactionDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default TransactionsStackNavigator;
