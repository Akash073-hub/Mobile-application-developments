import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../navigation'

type HomeNavProp = StackNavigationProp<RootStackParamList, 'Home'>

interface Props {
  navigation: HomeNavProp
}

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View>

      <Text style={{fontSize:22}}>
        Welcome to My Store
      </Text>

      <Button
        title="View Product"
        onPress={() => navigation.navigate('Details')}
      />

    </View>
  )
}

export default Home