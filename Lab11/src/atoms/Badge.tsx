import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Badge = ({ price }: any) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{price}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({

  badge: {
    position: "absolute",
    right: -15,
    top: "45%",
    backgroundColor: "#ff4d4d",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20
  },

  text: {
    color: "#fff",
    fontWeight: "700"
  }

});
