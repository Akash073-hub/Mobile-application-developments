import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from '../screens/Home'
import ProductDetails from '../screens/ProductDetails'
import Cart from '../screens/Cart'

export type RootStackParamList = {
  Home: undefined
  Details: undefined
  Cart: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator id="root">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
