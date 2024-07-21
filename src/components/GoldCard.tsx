import { Pressable, Text, View, StyleSheet } from "react-native";
import { GoldCardProps, SubCardProps } from "../types/componentType/GoldCard";
import { cardBackground, cardBottom, white } from "../constants/Color";

export const SubCard = (props: SubCardProps) => {
  const { style, title, subTitle, titleStyle, subTitleStyle } = props;
  return (
    <View style={[styles.topContainer, style]}>
      <Text style={[styles.text, styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.text, subTitleStyle]}>{subTitle}</Text>
    </View>
  );
};

const GoldCard = (props: GoldCardProps) => {
  const { title, subtitle, day, rate } = props;
  const goldRate = `₹${rate} / mg`;
  return (
    <Pressable style={styles.root}>
      <SubCard title={title} subTitle={subtitle} />
      <SubCard
        title={day}
        subTitle={goldRate}
        style={styles.bottomContainer}
        titleStyle={[styles.dayText, styles.unitText]}
        subTitleStyle={styles.unitText}
      />
    </Pressable>
  );
};

export default GoldCard;

const styles = StyleSheet.create({
  root: {
    backgroundColor: cardBackground,
    width: 200,
    height: 200,
    borderRadius: 40,
    overflow: "hidden",
    alignSelf: "center",
  },
  topContainer: {
    flex: 1,
    backgroundColor: cardBottom,
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
  text: {
    color: white,
    fontSize: 12,
  },
  bottomContainer: {
    gap: 3,
    backgroundColor: cardBackground,
  },
  dayText: {
    fontWeight: 500,
  },
  unitText: {
    color: white,
    fontSize: 14,
  },
});
