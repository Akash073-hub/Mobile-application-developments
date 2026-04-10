import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import Badge from "../atoms/Badge";
import CustomText from "../atoms/CustomText";

const DropCard = ({ item, navigation }: any) => {

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetail", { item })}
    >

      <View>

        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />

        <Badge price={item.price} />

      </View>

      <CustomText style={styles.title}>
        {item.name}
      </CustomText>

    </TouchableOpacity>
  );
};

export default React.memo(DropCard);

const styles = StyleSheet.create({

  card: {
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    elevation: 3
  },

  image: {
    height: 180,
    borderRadius: 12
  },

  title: {
    marginTop: 8,
    fontWeight: "700",
    fontSize: 14
  }

});
