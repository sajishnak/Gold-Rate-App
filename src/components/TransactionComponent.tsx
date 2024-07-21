import { StyleSheet, Text, View } from "react-native";
import {
  cardBottom,
  lightBrown,
  secondaryBlack,
  white,
} from "../constants/Color";
import { SubCard } from "./GoldCard";

const TransactionComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: secondaryBlack, fontSize: 12 }}>
        Purchased Form
      </Text>
      <Text
        style={{ color: white, marginTop: 4, fontSize: 14, fontWeight: "600" }}
      >
        Malabar Gold
      </Text>
      <View
        style={{
          marginTop: 30,
          height: 40,
          flexDirection: "row",
        }}
      >
        <SubCard
          title="kkk"
          subTitle="kk"
          style={{ backgroundColor: "transparent" }}
        />
        <SubCard
          title="kkk"
          subTitle="kk"
          style={{ backgroundColor: "transparent" }}
        />
        <SubCard
          title="kkk"
          subTitle="kk"
          style={{ backgroundColor: "transparent" }}
        />
      </View>
    </View>
  );
};

export default TransactionComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightBrown,
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 30,
  },
});
