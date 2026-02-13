import React from 'react';
import { View, Text, useColorScheme, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  const colorScheme = useColorScheme(); 
  const isDark = colorScheme === 'dark';   

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? '#000' : '#fff' }
      ]}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={isDark ? '#000' : '#fff'}
      />

      <Text style={[styles.text, { color: isDark ? '#fff' : '#000' }]}>
        Hello Everyone! Suzain here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
