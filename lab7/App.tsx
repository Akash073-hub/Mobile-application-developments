
import React from "react";
import { FlatList,StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from './data.json'
import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

function App() {
  return (
    <SafeAreaView>
      <FlatList
      data={data}
      renderItem = {({ item }) => (
        <View style = {styles.card}>
        <Text style = {styles.text}>{item.name}</Text>
        <Text style = {styles.text}>{item.type}</Text>
        </View>
      )
    }
      />
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor :'white',
    borderRadius :8,
    borderWidth :1,
  },
  card:{
    padding:10,
    backgroundColor:'grey',
    borderRadius :8,
    borderWidth :1,
  },
  text:{
    fontSize:18,
  }
});
