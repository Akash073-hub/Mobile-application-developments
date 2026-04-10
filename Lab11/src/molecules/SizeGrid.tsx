import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const sizes = [
  "6","6.5","7","7.5",
  "8","8.5","9","9.5",
  "10","10.5","11","11.5",
  "12","13","14","15"
];

const SizeGrid = () => {

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>

      {sizes.map((size) => {

        const active = selected === size;

        return (
          <TouchableOpacity
            key={size}
            style={[styles.box, active && styles.selected]}
            onPress={() => setSelected(size)}
          >
            <Text style={[styles.text, active && styles.selectedText]}>
              {size}
            </Text>
          </TouchableOpacity>
        );
      })}

    </View>
  );
};

export default SizeGrid;

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 20
  },

  box: {
    width: "22%",
    padding: 14,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  },

  selected: {
    backgroundColor: "#ff4d4d",
    borderColor: "#ff4d4d"
  },

  text: {
    fontWeight: "600",
    color: "#333"
  },

  selectedText: {
    color: "#fff"
  }

});
