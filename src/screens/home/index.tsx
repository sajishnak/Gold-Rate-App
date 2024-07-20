import { StyleSheet } from "react-native";
import { secondaryBlack } from "../../constants/Color";
import GoldCarousel from "../../components/GoldCarousel";
import { SafeAreaView } from "react-native-safe-area-context";

const Homescreen = () => {
  return (
    <SafeAreaView style={styles.root} edges={["bottom", "left", "right"]}>
      <GoldCarousel />
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
