import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.amount}>{transaction.amount}</Text>
      <Text style={styles.name}>{transaction.name}</Text>
      <Text style={styles.location}>{transaction.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  amount: {
    fontSize: 32,
    fontWeight: "bold",
  },
  name: {
    fontSize: 24,
    marginTop: 16,
  },
  location: {
    fontSize: 18,
    marginTop: 8,
    color: "#555",
  },
});

export default TransactionDetailScreen;
