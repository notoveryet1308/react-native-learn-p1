import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import { RoundButton } from "../../components/RoundedButton";

export const Focus = ({ addItem }) => {
  const [tempSubjet, setTempSubject] = useState("");
  const handleOnPress = () => {
    setTempSubject("");
    addItem(tempSubjet);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What would you like to focus on ?</Text>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInput}
          value={tempSubjet}
          onChangeText={setTempSubject}
        />
        <RoundButton title='+' size={50} onPress={handleOnPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 30,
    paddingRight: 30,
    // alignItems: "center"
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "bold",
  },
  textInputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#e5e5e5",
    borderRadius: 5,
    marginRight: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
