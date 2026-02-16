import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const bankTransfers = ["Bank Mandiri", "Bank BCA", "Bank BNI", "Bank Mega"];
const virtualAccounts = ["Virtual Account Mandiri", "Virtual Account BCA", "Virtual Account BNI", "Virtual Account Mega"];
const installments = ["Kredivo", "Under 17 Years (Terms & Conditions Apply)"];

const PaymentScreen = () => {
  const navigation = useNavigation();
  
  // 1. Initial time set to 5 minutes (5 * 60 = 300 seconds)
  const [secondsLeft, setSecondsLeft] = useState(300);

  // 2. Timer Logic
  useEffect(() => {
    // If timer reaches 0, go back
    if (secondsLeft <= 0) {
      navigation.goBack();
      return;
    }

    // Set up the interval
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(timer);
  }, [secondsLeft, navigation]);

  // 3. Helper to format seconds into HH:MM:SS
  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, "0");
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
        <View style={{ width: 22 }} />
      </View>

      <View style={styles.card}>
        <Text style={styles.timerText}>
          Complete your order within{" "}
          <Text style={styles.timer}>{formatTime(secondsLeft)}</Text>
        </Text>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
          <Section title="Bank Transfer" data={bankTransfers} />
          <Section title="Virtual Account" data={virtualAccounts} />
          <Section title="Installments Without Credit Card" data={installments} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// Section Component
const Section = ({ title, data }: { title: string; data: string[] }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {data.map((item, index) => (
      <TouchableOpacity key={index} style={styles.row}>
        <Text style={styles.rowText}>{item}</Text>
        <View style={styles.circleIcon}>
          <Text style={styles.arrowIcon}>›</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

export default PaymentScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#A855F7" },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 15 },
  backBtn: { padding: 5 },
  backArrow: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  card: { flex: 1, backgroundColor: "#FFFFFF", borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 25, paddingTop: 30 },
  timerText: { textAlign: "center", marginBottom: 25, fontSize: 15, color: "#333" },
  timer: { color: "#FF0000", fontWeight: "bold" },
  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#000", marginBottom: 15 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 15 },
  rowText: { fontSize: 16, color: "#333" },
  circleIcon: { width: 28, height: 28, borderRadius: 14, borderWidth: 1.5, borderColor: "#A855F7", justifyContent: "center", alignItems: "center" },
  arrowIcon: { color: "#A855F7", fontSize: 20, fontWeight: "bold", lineHeight: 22, marginLeft: 2 },
});


