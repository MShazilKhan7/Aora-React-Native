import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants/constants";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
// component rendered on empty data
const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="flex justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[210px]"
        resizeMode="contain"
      />
      <Text className="text-xl font-psemibold text-white mt-1.5">{title}</Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>
      <CustomButton
        containerStyles="w-full text-center mt-5"
        title={"Create Video"}
        handlePress={() => {
          router.push("/create");
        }}
      />
    </View>
  );
};

export default EmptyState;
