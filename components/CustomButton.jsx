import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
//  Touchable opacity in RN
// wrapper to views to respond to touchable events.
// pressing -> opacity -> (decrease)
//
const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.6}
      className={`rounded-lg bg-secondary min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text
        className={`text-center text-primary font-psemibold text-lg ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
