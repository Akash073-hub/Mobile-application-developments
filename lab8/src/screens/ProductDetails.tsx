import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation'

type DetailsNavProp = StackNavigationProp<RootStackParamList, 'Details'>

interface Props {
  navigation: DetailsNavProp
}

const ProductDetails: React.FC<Props> = ({ navigation }) => {
  return (
    <View>

      <Text style={{fontSize:20}}>Product Name: iPhone 15</Text>
      <Text>Price: ₹80000</Text>
      <Text>Description: Latest Apple smartphone</Text>

      <Button
        title="Add to Cart"
        onPress={() => navigation.navigate('Cart')}
      />

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />

    </View>
  )
}

export default ProductDetails