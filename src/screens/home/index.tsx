import { StyleSheet } from "react-native";
import { secondaryBlack } from "../../constants/Color";
import GoldCarousel from "../../components/GoldCarousel";
import { SafeAreaView } from "react-native-safe-area-context";
import GoldValues from "../../components/GoldValues";

const Homescreen = () => {
  return (
    <SafeAreaView style={styles.root} edges={["bottom", "left", "right"]}>
      <GoldCarousel />
      <GoldValues />
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: secondaryBlack,
    flex: 1,
  },
});
