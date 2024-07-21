import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { black, white } from "../constants/Color";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import images from "../../assets/images";

const Toolbar = (props: ToolbarProps) => {
  const { title, backIcon, onBack } = props;
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 10,
        },
      ]}
    >
      {backIcon && (
        <TouchableOpacity onPress={onBack}>
          <Image style={styles.backIcon} source={images.backIcon} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Toolbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: black,
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 10,
  },
  backIcon: {
    height: 16,
    width: 16,
  },
  title: {
    color: white,
    fontSize: 14,
    fontWeight: "700",
  },
});
