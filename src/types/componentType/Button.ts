import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  text: string;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
};
