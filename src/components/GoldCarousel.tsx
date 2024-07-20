import { Image, StyleSheet, Text, View } from "react-native";
import GoldCard from "./GoldCard";
import { black, white } from "../constants/Color";
import images from "../../assets/images";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const GoldCarousel = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.topContainer, { paddingTop: insets.top }]}>
      <GoldCard
        title="Malabar Gold"
        subtitle="99.99% 24K Pure Gold"
        day="Today"
        rate={3.35}
      />
      <Text style={styles.balanceTitle}>My Gold Balance</Text>
      <View style={styles.goldContainer}>
        <Image style={styles.coin} source={images.goldCoin} />
        <Text style={styles.gold}>0.0 mg</Text>
      </View>
    </View>
  );
};

export default GoldCarousel;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: black,
    borderBottomEndRadius: 80,
    borderBottomLeftRadius: 80,
    alignItems: "center",
    paddingBottom: 48,
  },
  balanceTitle: {
    color: white,
    fontWeight: "500",
    fontSize: 14,
    marginTop: 40,
  },
  gold: {
    color: white,
    fontSize: 12,
  },
  goldContainer: {
    flexDirection: "row",
    gap: 4,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  coin: {
    height: 20,
    width: 20,
  },
});
