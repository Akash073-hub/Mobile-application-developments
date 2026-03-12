import React, { useMemo } from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet, StatusBar, Dimensions } from 'react-native';
import menuData from './menu.json';

const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'Veg': '#E8F5E9',
    'Non-Veg': '#FFEBEE',
    'Beverage': '#E3F2FD'
  };
  return colors[category] || '#F5F5F5';
};

const getCategoryBadgeColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'Veg': '#4CAF50',
    'Non-Veg': '#F44336',
    'Beverage': '#2196F3'
  };
  return colors[category] || '#9E9E9E';
};

const FoodCard = ({ item }: any) => (
  <View style={[styles.card, { backgroundColor: getCategoryColor(item.category) }]}>
    <View style={styles.cardContent}>
      <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
      <View style={[styles.badge, { backgroundColor: getCategoryBadgeColor(item.category) }]}>
        <Text style={styles.badgeText}>{item.category}</Text>
      </View>
    </View>
    <View style={styles.priceRatingRow}>
      <View style={styles.priceCol}>
        <Text style={styles.label}>Price</Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
      <View style={styles.ratingCol}>
        <Text style={styles.label}>Rating</Text>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
      </View>
    </View>
  </View>
);

const ListHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>🍽 Restaurant Menu</Text>
    <Text style={styles.headerSubtitle}>Fresh dishes for you</Text>
  </View>
);

const ListFooter = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>🙏 Thank You for Visiting</Text>
  </View>
);

export default function App(): React.ReactElement {
  React.useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  const data = useMemo(() => {
    return [...menuData].sort((a: any, b: any) => {
      const order: { [key: string]: number } = { 'Veg': 1, 'Non-Veg': 2, 'Beverage': 3 };
      return (order[a.category] - order[b.category]) || a.name.localeCompare(b.name);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ListHeader />
      <View style={styles.scrollWrapper}>
        <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {data.map((item: any) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </ScrollView>
      </View>
      <ListFooter />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  scrollWrapper: { flex: 1 },
  scrollContent: { paddingHorizontal: 12, paddingVertical: 12 },
  header: { backgroundColor: '#FF6B35', padding: 20, borderRadius: 12, marginBottom: 16, marginTop: 8, marginHorizontal: 16 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginBottom: 4 },
  headerSubtitle: { fontSize: 12, color: '#FFFACD' },
  footer: { backgroundColor: '#4CAF50', padding: 20, borderRadius: 12, marginTop: 16, marginBottom: 8, marginHorizontal: 16, alignItems: 'center' },
  footerText: { fontSize: 16, fontWeight: 'bold', color: '#FFF' },
  card: { borderRadius: 12, padding: 16, width: Dimensions.get('window').width - 48, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, marginHorizontal: 8 },
  cardContent: { marginBottom: 12 },
  name: { fontSize: 14, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 8 },
  badge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 20, minWidth: 60, alignSelf: 'flex-start' },
  badgeText: { color: '#FFF', fontSize: 10, fontWeight: '700', textAlign: 'center' },
  priceRatingRow: { flexDirection: 'row', justifyContent: 'space-between' },
  priceCol: { flex: 1, marginRight: 12 },
  ratingCol: { flex: 1 },
  label: { fontSize: 12, color: '#666', marginBottom: 4 },
  price: { fontSize: 16, fontWeight: 'bold', color: '#FF6B35' },
  rating: { fontSize: 12, fontWeight: '600', color: '#FF6B35' }
});