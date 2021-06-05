import React, { useState, useEffect, useRef } from "react";
import { Text, StyleSheet } from "react-native";

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const CountDown = ({
  minutes = 2,
  isPaused = true,
  onProgress,
  onEnd,
}) => {
  const [millis, setMillis] = useState(minutesToMillis(minutes));

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  const interval = useRef(null);
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      // onProgress(timeLeft / minutesToMillis(minutes));
      return timeLeft;
    });
  };
  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
    millis === 0 && onEnd();
  }, [millis]);

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  return (
    <Text style={Styles.countDown}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const Styles = StyleSheet.create({
  countDown: {
    color: "#fff",
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
    padding: 40,
    // margin: 20,
    backgroundColor: "rgba(94,132,226,0.3)",
  },
});
