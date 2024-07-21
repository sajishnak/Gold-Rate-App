import { StyleSheet } from "react-native";
import { secondaryBlack } from "../../constants/Color";
import GoldCarousel from "../../components/GoldCarousel";
import { SafeAreaView } from "react-native-safe-area-context";
import GoldValues from "../../components/GoldValues";
import { useBuyPrice, useSellPrice } from "../../api";
import React, { useEffect, useState } from "react";
import { goldRateCalculation } from "../../utils/goldRateCalculation";
import Toolbar from "../../components/Toolbar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

const Homescreen = () => {
  const { data, isLoading, error } = useSellPrice();
  const {
    data: buyData,
    isLoading: isBuyLoading,
    error: buyError,
  } = useBuyPrice();

  const isFocused = useIsFocused();

  const [goldRate, setGoldRate] = useState(0.0);
  const [myBalance, setMyBalance] = useState("0.0");

  useEffect(() => {
    if (buyData?.current_price && buyData?.applicable_tax) {
      const goldRate = goldRateCalculation(
        buyData?.current_price,
        buyData?.applicable_tax
      );
      setGoldRate(goldRate);
    }
  }, [buyData]);

  useEffect(() => {
    AsyncStorage.getItem("goldBalance").then((item) => {
      if (item) setMyBalance(item);
    });
  }, [isFocused]);

  return (
    <>
      <SafeAreaView style={styles.root} edges={["bottom", "left", "right"]}>
        <Toolbar title="My Gold" />
        <GoldCarousel goldRate={goldRate} myBalance={myBalance} />
        <GoldValues
          sellingData={data}
          buyingData={buyData}
          myBalance={myBalance}
        />
      </SafeAreaView>
    </>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: secondaryBlack,
    flex: 1,
  },
});
