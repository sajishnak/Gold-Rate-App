import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import GoldCard from "./GoldCard";
import { black, white } from "../constants/Color";
import images from "../../assets/images";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CarouselRenderItemInfo } from "react-native-reanimated-carousel/lib/typescript/types";
import { useState } from "react";

const DATA = [
  {
    title: "Muthoot Gold",
    subTitle: "99.99% 24K Pure Gold",
  },
  {
    title: "Malabar Gold",
    subTitle: "99.99% 24K Pure Gold",
  },
  {
    title: "Joy Alukkas Gold",
    subTitle: "99.99% 24K Pure Gold",
  },
];

const GoldCarousel = (props: GoldCarousel) => {
  const { goldRate, myBalance } = props;
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState(1);

  const renderItem = ({ index, item }: CarouselRenderItemInfo<CaroselType>) => {
    return (
      <GoldCard
        title={item.title}
        subtitle={item.subTitle}
        day="Today"
        rate={`${goldRate.toFixed(2)}`}
        isSelected={selected === index}
        onPress={() => setSelected(index)}
      />
    );
  };

  return (
    <View style={[styles.topContainer, { paddingTop: insets.top }]}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal
        ItemSeparatorComponent={<View style={{ width: 10 }} />}
        snapToInterval={100}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.balanceTitle}>My Gold Balance</Text>
      <View style={styles.goldContainer}>
        <Image style={styles.coin} source={images.goldCoin} />
        <Text style={styles.gold}>{myBalance} mg</Text>
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
    paddingBottom: 48,
  },
  balanceTitle: {
    color: white,
    fontWeight: "500",
    fontSize: 14,
    marginTop: 40,
    alignSelf: "center",
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
