import React, { useCallback } from "react";
import {
  View,
  FlatList,
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from "react-native";

import { products } from "../data/products";
import DropCard from "../molecules/DropCard";

const screenWidth = Dimensions.get("window").width;

const categories = [
  { name: "Sneakers", color: "#ff4d4d" },
  { name: "Hoodies", color: "#6c5ce7" },
  { name: "Accessories", color: "#00b894" },
  { name: "Caps", color: "#fdcb6e" },
  { name: "Limited", color: "#0984e3" }
];

const FeedScreen = ({ navigation }: any) => {

  const renderItem = useCallback(({ item, index }: any) => {

    const featured = index % 5 === 0;

    return (
      <View style={featured ? styles.heroWrapper : styles.gridWrapper}>
        <DropCard
          item={item}
          navigation={navigation}
          featured={featured}
        />
      </View>
    );

  }, []);

  const keyExtractor = (item: any) => item.id;

  return (
    <SafeAreaView style={styles.container}>

      {/* CATEGORY BAR */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryBar}
      >
        {categories.map((cat) => (
          <View
            key={cat.name}
            style={[styles.categoryChip, { backgroundColor: cat.color }]}
          >
            <Text style={styles.categoryText}>{cat.name}</Text>
          </View>
        ))}
      </ScrollView>


      {/* PRODUCT FEED */}

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={7}
        removeClippedSubviews
        getItemLayout={(data, index) => ({
          length: 220,
          offset: 220 * index,
          index
        })}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

    </SafeAreaView>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f8f8f8"
  },

  categoryBar: {
    paddingVertical: 12,
    paddingLeft: 10
  },

  categoryChip: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 12
  },

  categoryText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14
  },

  heroWrapper: {
    width: "100%"
  },

  gridWrapper: {
    width: "48%"
  }

});
