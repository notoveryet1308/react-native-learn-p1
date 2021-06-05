import React, { useState } from "react";
import { View, StyleSheet, Text, Platform, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";

import { CountDown } from "../../components/CountDown";
import { RoundButton } from "../../components/RoundedButton";
import { Timing } from "./timing";

export const Timer = ({ focusSubject, onTimerEnd }) => {
  useKeepAwake();
  const DEFAULT_TIME = 0.1;
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };
  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(100);
    }
  };
  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };
  return (
    <View style={Styles.conatiner}>
      <View style={Styles.countdown}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
      </View>

      <View style={{ paddingTop: 50 }}>
        <Text style={Styles.title}>Focusing on:</Text>
        <Text style={Styles.task}>{focusSubject}</Text>
      </View>
      <View style={{ paddingTop: 10 }}>
        <ProgressBar
          style={{ height: 10 }}
          color='#5E84E2'
          progress={progress}
        />
      </View>
      <View style={Styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>

      <View style={Styles.buttonWrapper}>
        {!isStarted ? (
          <RoundButton
            title='Start'
            size={90}
            style={{ marginRight: 30 }}
            onPress={() => setIsStarted(true)}
          />
        ) : (
          <RoundButton
            title='Pause'
            size={90}
            onPress={() => setIsStarted(false)}
          />
        )}
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 30,
  },
  title: {
    color: "#fff",
    textAlign: "center",
  },
  task: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
