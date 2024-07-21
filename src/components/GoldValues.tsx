import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { lightBrown, white } from "../constants/Color";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import { GoldValuesProp } from "../types/componentType/GoldValues";
import { goldRateCalculation } from "../utils/goldRateCalculation";

const GoldValues = (props: GoldValuesProp) => {
  const { sellingData, buyingData } = props;
  const navigation = useNavigation();
  const [amount, setAmount] = useState<string>("");
  const [gold, setGold] = useState<string>("");

  const goldRate: number =
    buyingData &&
    goldRateCalculation(
      buyingData?.current_price,
      buyingData?.applicable_tax
    ).toFixed(2);

  const getGoldVal = (amount: number) => {
    const gold = (amount / goldRate).toFixed(2);
    if (gold !== "NaN") {
      setGold(gold.toString());
    } else {
      setGold("");
    }
  };

  const getGoldRate = (gold: number) => {
    const rate = (gold * goldRate).toFixed(2);
    if (rate !== "NaN") {
      setAmount(rate);
    } else {
      setAmount("");
    }
  };

  const onChangeText = (val: string, type?: string) => {
    if (type === "gold") {
      setGold(val);
      getGoldRate(parseFloat(val));
      setAmount("");
    }
    if (type === "amount") {
      setAmount(val);
      getGoldVal(parseFloat(val));
    }
  };

  const onBuyPress = () => {
    navigation.navigate("TransactionSuccessScreen" as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
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
          <Button text="Buy" onPress={onBuyPress} />
          <Button text="Sell" onPress={() => {}} />
        </View>
      </View>
      <Text>
        <Text style={{ color: white }}>Buying price ₹${goldRate} / mg</Text>
        <Text style={{ color: lightBrown }}> (including Tax/GST)</Text>
      </Text>
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
  subContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
