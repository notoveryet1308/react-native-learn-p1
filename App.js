import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Focus } from "./src/features/focus/focus";
import { Timer } from "./src/features/timer";

export default function App() {
  const [focusSubjet, setFocusSubject] = useState("Studyig");

  return (
    <View style={styles.container}>
      {focusSubjet ? (
        <Timer
          focusSubject={focusSubjet}
          onTimerEnd={() => setFocusSubject("")}
        />
      ) : (
        <Focus addItem={setFocusSubject} />
      )}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#272254",
    backgroundColor: "#000",

    // alignItems: "center",
    // justifyContent: "center",
  },
});
