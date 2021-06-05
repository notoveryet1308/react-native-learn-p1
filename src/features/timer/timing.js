import React from "react";
import { RoundButton } from "../../components/RoundedButton";
import { View, StyleSheet } from "react-native";
export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundButton
          size={75}
          title='10'
          onPress={() => {
            onChangeTime(10);
          }}
        />
        <RoundButton
          size={75}
          title='15'
          onPress={() => {
            onChangeTime(15);
          }}
        />
        <RoundButton
          size={75}
          title='20'
          onPress={() => {
            onChangeTime(20);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
