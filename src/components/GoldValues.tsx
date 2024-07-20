import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { lightBrown, white } from "../constants/Color";
import Button from "./Button";

const GoldValues = () => {
  const [amount, setAmount] = useState<string>("");
  const [gold, setGold] = useState<string>("");

  const onChangeText = (val: string, type?: string) => {
    if (type === "gold") {
      setGold(val);
    }
    if (type === "amount") setAmount(val);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: lightBrown }}>Choose your value</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.input}>₹</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={(item) => {
            onChangeText(item, "amount");
          }}
          placeholder="0.00"
          placeholderTextColor={white}
        />
        <Text style={[styles.input, styles.devider]}>/</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={gold}
          onChangeText={(item) => {
            onChangeText(item, "gold");
          }}
          placeholder="0.0"
          placeholderTextColor={white}
        />
        <Text style={styles.input}>mg</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Buy" onPress={() => {}} />
        <Button text="Sell" onPress={() => {}} />
      </View>
    </View>
  );
};

export default GoldValues;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    color: white,
    fontSize: 24,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    gap: 4,
    marginTop: 16,
    justifyContent: "center",
  },
  devider: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    marginTop: 24,
    flexDirection: "row",
    gap: 16,
  },
});
