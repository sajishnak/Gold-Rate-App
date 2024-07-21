import { StyleSheet, Text, View } from "react-native";
import { lightBrown, secondaryBlack, white } from "../constants/Color";
import { SubCard } from "./GoldCard";

type Props = {
  weight?: string;
  value?: string;
};

const TransactionComponent = (props: Props) => {
  const { weight, value } = props;
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
          title="Order ID"
          subTitle="403-0631"
          style={{ backgroundColor: "transparent" }}
        />
        <SubCard
          title="Value"
          subTitle={`₹ ${value}`}
          style={{ backgroundColor: "transparent" }}
        />
        <SubCard
          title="Weights"
          subTitle={`${weight} mg`}
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
