import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { lightBrown, white } from "../constants/Color";
import { ButtonProps } from "../types/componentType/Button";

const Button = (props: ButtonProps) => {
  const { text, style, textStyle, onPress } = props;
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightBrown,
    height: 80,
    width: 80,
    borderRadius: 40,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: white,
    fontSize: 16,
    fontWeight: "500",
  },
});
