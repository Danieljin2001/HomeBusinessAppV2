import React from "react";
import { StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { mix, mixColor } from "react-native-redash";

const size = 30;
const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

interface ChevronProps {
  progress: Animated.SharedValue<number>;
}

const Chevron = ({ progress }: ChevronProps) => {
  const style = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${mix(progress.value, 0, Math.PI)}rad` }],
  }));
  return (
    <Animated.View style={[styles.container, style]}>
      <Feather name = "chevron-down" size = {25} color={"black"}/>
    </Animated.View>
  );
};

export default Chevron;
