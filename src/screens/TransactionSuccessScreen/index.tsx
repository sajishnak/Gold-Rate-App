import { StyleSheet, View } from "react-native";
import { secondaryBlack } from "../../constants/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import TransactionSuccess from "../../types/componentType/TransactionSuccess";
import Toolbar from "../../components/Toolbar";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";

const TransactionSuccessScreen = () => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  const goToHome = () => {
    navigation.navigate("Home" as never);
  };

  return (
    <SafeAreaView style={styles.root} edges={["bottom", "left", "right"]}>
      <Toolbar title="My Gold" backIcon onBack={onBack} />
      <TransactionSuccess />
      <View style={styles.buttonContainer}>
        <Button text="Home" onPress={goToHome} />
      </View>
    </SafeAreaView>
  );
};

export default TransactionSuccessScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: secondaryBlack,
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
