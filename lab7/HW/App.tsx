import React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import students from './student.json';

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Grade: {item.grade}</Text>
      <Text>Section: {item.section}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.navbar}>
        <Text style={styles.navTitle}>Student Directory</Text>
      </View>

      <FlatList
        data={students}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 15 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  navbar: {
    height: 60,
    backgroundColor: '#4a90e2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },

  navTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
