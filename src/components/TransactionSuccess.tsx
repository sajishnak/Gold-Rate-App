import { Image, StyleSheet, Text, View } from "react-native";
import { black, lightBrown, white } from "../constants/Color";
import images from "../../assets/images";
import TransactionComponent from "./TransactionComponent";
import { TransactionSuccessProps } from "../types/componentType/TransactionSuccess";

const TransactionSuccess = (props: TransactionSuccessProps) => {
  const { isBuy, value, weight } = props;

  return (
    <View style={styles.topContainer}>
      <Image style={{ height: 100, width: 100 }} source={images.success} />
      <Text style={styles.title}>Congratulations</Text>
      <Text style={styles.subTitle}>
        {isBuy
          ? "Transaction successfull for gold purchase"
          : "Transaction successfull for gold Sales"}
      </Text>
      <TransactionComponent value={value} weight={weight} />
      <Text style={styles.title}>View Transactions</Text>
    </View>
  );
};

export default TransactionSuccess;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: black,
    borderBottomEndRadius: 80,
    borderBottomLeftRadius: 80,
    paddingBottom: 48,
    alignItems: "center",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    color: white,
    fontSize: 16,
    fontWeight: "700",
    marginTop: 30,
  },
  subTitle: {
    color: lightBrown,
    marginTop: 8,
    fontSize: 14,
  },
});
