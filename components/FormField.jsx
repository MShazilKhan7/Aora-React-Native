import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { icons } from "../constants/constants";
const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`w-full space-y-2 ${otherStyles}`}>
      <Text className="font-pmedium text-gray-100">{title}</Text>
      <View className="h-16 w-full bg-black-200 rounded-lg flex flex-row items-center px-2 focus:border-2 focus:border-secondary-100">
        <TextInput
          // style={{ outline: "none" }}
          value={value}
          className="flex-1 text-white text-base"
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title.toLowerCase() === "password" && !showPassword}
        />
        {title.toLowerCase() === "password" && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            <Image
              resizeMode="contain"
              className="w-6 h-6"
              source={showPassword ? icons.eye : icons.hideeye}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
