import { View, Text, Image } from "react-native";
import React from "react";
const PhotoCard = ({ title, prompt, imageurl }) => {
  return (
    <View className="w-full mb-10 px-4 text-center">
      <Text className="font-psemibold text-sm text-white" numberOfLines={1}>
        {title}
      </Text>
      <View className="w-full h-44">
        <Image
          source={imageurl}
          className="w-full h-full -ml-[25%]"
          resizeMode="contain"
        />
      </View>
      <Text className="font-psemibold text-sm text-white">{prompt}</Text>
    </View>
  );
};

export default PhotoCard;
