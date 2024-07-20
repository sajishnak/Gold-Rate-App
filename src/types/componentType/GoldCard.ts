import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type SubCardProps = {
  style?: StyleProp<ViewStyle>;
  title: string;
  subTitle?: string;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
};

export type GoldCardProps = {
  title: string;
  subtitle: string;
  day: string;
  rate: number;
};
