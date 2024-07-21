import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { APIProvider } from "./src/api";
import RootApp from "./src";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <KeyboardProvider>
        <SafeAreaProvider>
          <APIProvider>
            <RootApp />
          </APIProvider>
        </SafeAreaProvider>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
