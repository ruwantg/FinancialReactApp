import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const transactions = [
  { id: "1", name: "Starbucks", amount: "$12.00", date: "Mar 11, 2024" },
  { id: "2", name: "Apple Store", amount: "$101.00", date: "Mar 10, 2024" },
  { id: "3", name: "Sephora", amount: "$12.00", date: "Mar 10, 2024" },
  {
    id: "4",
    name: "Shoppers Drug Mart",
    amount: "$12.00",
    date: "Mar 10, 2024",
  },
  { id: "5", name: "Pizza Hut", amount: "$12.00", date: "Mar 10, 2024" },
  {
    id: "6",
    name: "Cheesecake Factory",
    amount: "$12.00",
    date: "Mar 10, 2024",
  },
  { id: "7", name: "Nike", amount: "$12.00", date: "Mar 10, 2024" },
  { id: "8", name: "Tim Hortons", amount: "$12.00", date: "Mar 10, 2024" },
  { id: "9", name: "Whole Foods", amount: "$12.00", date: "Mar 10, 2024" },
  { id: "10", name: "Cineplex", amount: "$12.00", date: "Mar 10, 2024" },
];

const TransactionsListScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.transactionItem}
            onPress={() =>
              navigation.navigate("Transaction Detail", { transaction: item })
            }
          >
            <Text>{item.name}</Text>
            <Text>{item.amount}</Text>
            {/* <Text>{item.date}</Text> */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default TransactionsListScreen;
