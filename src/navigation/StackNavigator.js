import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "../screens/DetailsScreen";
import TabNavigator from "./TabNavigator";
import TicketScreen from "../screens/TicketScreen";
import WebviewScreen from "../components/WebviewScreen";
import PaymentScreen from "../screens/PaymentScreen";


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bottomtab" component={TabNavigator} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Ticket" component={TicketScreen} />
      <Stack.Screen name="Webview" component={WebviewScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>

  )
}

export default StackNavigator;