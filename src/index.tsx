import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./navigation";

export default function RootApp() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
