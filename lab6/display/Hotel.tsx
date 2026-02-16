import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Hotel">;

const hotels = [
  { id: "1", name: "Hotel Satu", image: "https://picsum.photos/200/200?1" },
  { id: "2", name: "Hotel Dua", image: "https://picsum.photos/200/200?2" },
  { id: "3", name: "Hotel Tiga", image: "https://picsum.photos/200/200?3" },
  { id: "4", name: "Hotel Empat", image: "https://picsum.photos/200/200?4" },
  { id: "5", name: "Hotel Satu", image: "https://picsum.photos/200/200?1" },
  { id: "6", name: "Hotel Dua", image: "https://picsum.photos/200/200?2" },
  { id: "7", name: "Hotel Tiga", image: "https://picsum.photos/200/200?3" },
  { id: "8", name: "Hotel Empat", image: "https://picsum.photos/200/200?4" },
];

const HotelScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  // Using Text characters to ensure stars appear without icon library issues
  const renderStars = () => (
    <View style={styles.starRow}>
      <Text style={styles.starActive}>★</Text>
      <Text style={styles.starActive}>★</Text>
      <Text style={styles.starActive}>★</Text>
      <Text style={styles.starActive}>★</Text>
      <Text style={styles.starInactive}>★</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Pilihan Hotel</Text>

        <FlatList
          data={hotels}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("Payment")}
            >
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>

                <View style={styles.locationRow}>
                  {/* Small purple circle/icon placeholder */}
                  <View style={styles.locIcon} />
                  <Text style={styles.location}>Indonesia</Text>
                </View>
                
                {renderStars()}
              </View>

              <Text style={styles.price}>Rp 1.000.000</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HotelScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#A855F7", 
  },
  card: { 
    flex: 1, 
    backgroundColor: "#FFFFFF", 
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 30,
    marginTop: 10,
  },
  title: { 
    fontSize: 26, 
    fontWeight: "bold", 
    color: "#333",
    marginBottom: 25, 
  },
  row: {
    flexDirection: "row",
    marginBottom: 25,
    alignItems: "center",
  },
  image: { 
    width: 80, 
    height: 65, 
    borderRadius: 15, 
    marginRight: 15 
  },
  info: { flex: 1 },
  name: { 
    fontSize: 18, 
    fontWeight: "700", 
    color: "#222",
    marginBottom: 2 
  },
  locationRow: { 
    flexDirection: "row", 
    alignItems: "center",
    marginBottom: 4 
  },
  locIcon: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#A855F7",
    marginRight: 5,
  },
  location: { 
    fontSize: 13, 
    color: "#999", 
  },
  starRow: { 
    flexDirection: "row", 
  },
  starActive: {
    fontSize: 14,
    color: "#FFD700", // Yellow
    marginRight: 1,
  },
  starInactive: {
    fontSize: 14,
    color: "#E0E0E0", // Light grey
  },
  price: { 
    fontSize: 16,
    fontWeight: "bold", 
    color: "#A855F7"
  },
});

