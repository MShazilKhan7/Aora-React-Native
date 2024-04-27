import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { images } from "../../constants/constants";
import FormField from "../../components/FormField";
import { Link } from "expo-router";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="bg-[red] min-h-[85vh] w-full px-4">
          <Image
            source={images.logo}
            className="w-[135px] h-[84px]"
            resizeMode="contain"
          />
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <FormField
            title="email"
            value={form.email}
            handleChangeText={(e) => {
              setForm({ ...form, email: e });
            }}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => {
              setForm({ ...form, password: e });
            }}
            otherStyles="mt-7"
            keyboardType="password"
          />
          <View className="mt-10 justify-center items-center">
            <Text className="text-lg font-psemibold text-gray-100">
              Don't have an Account{" "}
              <Link
                className="text-secondary font-psemibold text-lg"
                href={"/sign-up"}
              >
                Sign up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
