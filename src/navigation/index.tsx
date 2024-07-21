import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "../screens/home";
import TransactionSuccessScreen from "../screens/TransactionSuccessScreen";

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen
        name="TransactionSuccessScreen"
        component={TransactionSuccessScreen}
      />
    </Stack.Navigator>
  );
}
