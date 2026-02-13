import React from 'react';
import { SafeAreaView} from 'react-native-safe-area-context';
import { Text, StyleSheet,View,ScrollView } from 'react-native';
import { Image } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView horizontal contentContainerStyle = {{gap : 10}}>
      <View style={styles.profile}>
        <Image source={{uri:'data:image/jpeg;base64,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'}} style={{width:50,height:50,borderRadius:25}}></Image>
        <Text>suzaina</Text>
      </View>
       <View style={styles.card1}>
       </View>
        <View style={styles.card2}>
       </View> 
       <View style={styles.card3}>
       </View>
       <View style={styles.card1}>
       </View>
        <View style={styles.card2}>
       </View> 
       <View style={styles.card3}>
       </View><View style={styles.card1}>
       </View>
        <View style={styles.card2}>
       </View> 
       <View style={styles.card3}>
       </View><View style={styles.card1}>
       </View>
        <View style={styles.card2}>
       </View> 
       <View style={styles.card3}>
       </View><View style={styles.card1}>
       </View>
        <View style={styles.card2}>
       </View> 
       <View style={styles.card3}>
       </View><View style={styles.card1}>
       </View>
        <View style={styles.card2}>
       </View> 
       <View style={styles.card3}>
       </View><View style={styles.card1}>
       </View>
        <View style={styles.card2}>
       </View> 
       <View style={styles.card3}>
       </View><View style={styles.card1}>
       </View>
        <View style={styles.card2}>
       </View> 
       <View style={styles.card3}>
       </View><View style={styles.card1}>
       </View>
        <View style={styles.card2}>
       </View> 
       <View style={styles.card3}>
       </View><View style={styles.card1}>
       </View>
        <View style={styles.card2}>
       </View> 
       <View style={styles.card3}>
       </View><View style={styles.card1}>
       </View>
        <View style={styles.card2}>
       </View> 
       <View style={styles.card3}>
       </View><View style={styles.card1}>
       </View>
        <View style={styles.card2}>
       </View> 
       <View style={styles.card3}>
       </View>
       </ScrollView>
    </SafeAreaView>
      )
}

export default App;

const styles = StyleSheet.create({
 container :{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
 },
 card1 :{
  width:50,
  height:50,
  backgroundColor:'red',
  borderRadius:50
 },
 card2 :{
  width:50,
  height:50,
  backgroundColor:'blue',
   borderRadius:50
 } ,
 card3 :{
  width:50,
  height:50,
  backgroundColor:'green',
  borderRadius:50
 },
  profile :{
    borderRadius:15,
    width:50,
    height:50, 
    alignItems:'center',
 },
})
