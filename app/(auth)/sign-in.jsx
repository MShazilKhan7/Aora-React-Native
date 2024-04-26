import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native-web";
import { images } from "../../constants/constants";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="bg-[red] min-h-[85vh] w-full px-4">
          <Image
            source={images.logo}
            className="w-[135px] h-[84px]"
            resizeMode="contain"
          />
          <Text className="font-pbold mt-10 text-left">Sign in</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
