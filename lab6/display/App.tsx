import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HotelScreen from "./screens/Hotel";
import PaymentScreen from "./screens/payment";


export type RootStackParamList = {
  Hotel: undefined;
  Payment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hotel">
        <Stack.Screen name="Hotel" component={HotelScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




