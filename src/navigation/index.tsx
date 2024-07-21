import * as React from "react";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Homescreen from "../screens/home";
import TransactionSuccessScreen from "../screens/TransactionSuccessScreen";

export type RootStackParamList = {
  Home: undefined;
  TransactionSuccessScreen: { value: string; weight: string; isBuy: boolean };
};

export type TranactionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "TransactionSuccessScreen"
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

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
