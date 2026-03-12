import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation'

type CartNavProp = StackNavigationProp<RootStackParamList, 'Cart'>

interface Props {
  navigation: CartNavProp
}

const Cart: React.FC<Props> = ({ navigation }) => {
  return (
    <View>

      <Text style={{fontSize:22}}>Your Cart</Text>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />

    </View>
  )
}

export default Cart