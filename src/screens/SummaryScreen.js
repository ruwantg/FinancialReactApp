import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SummaryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text style={styles.item}>Transactions: 10</Text>
      <Text style={styles.item}>Balance: $692.39</Text>
      <Text style={styles.item}>High Spending: Nike $250.00</Text>
      <Text style={styles.item}>Low Spending: Tim Hortons $7.89</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    fontSize: 18,
    marginTop: 8,
  },
});

export default SummaryScreen;
