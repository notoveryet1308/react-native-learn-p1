import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export const RoundButton = ({
  style = {},
  textStyle = {},
  size = 50,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius]} onPress={onPress}>
      <Text style={[styles(size).buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (style) =>
  StyleSheet.create({
    radius: {
      // display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: style,
      height: style,
      borderRadius: style / 2,
      borderColor: "#fff",
      borderWidth: 2,
    },
    buttonText: { color: "#fff", fontSize: 20 },
  });
