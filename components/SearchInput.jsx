import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { icons } from "../constants/constants";

const SearchInput = ({
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
}) => {
  return (
    <View className="h-16 w-full bg-black-200 rounded-lg flex flex-row items-center px-2 focus:border-2 focus:border-secondary-100">
      <TextInput
        style={{ outline: "none" }}
        value={value}
        selectionColor={"black"}
        className="w-full h-full mt-0.5 flex-1 text-white text-base"
        onChangeText={handleChangeText}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
      />

      <TouchableOpacity onPress={() => {}}>
        <Image resizeMode="contain" className="w-6 h-6" source={icons.search} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
