import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import CustomButton from "../atoms/CustomButton";
import SizeGrid from "../molecules/SizeGrid";

const ProductDetail = ({ route }: any) => {

  const { item } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <ScrollView style={{ flex: 1 }}>

        <Image source={{ uri: item.image }} style={styles.image} />

        <Text style={styles.title}>{item.name}</Text>

        <Text>{item.description}</Text>

        <SizeGrid />

      </ScrollView>

      <View style={styles.footer}>
        <CustomButton title="Join Waitlist" />
      </View>

    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  image: {
    height: 300,
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
