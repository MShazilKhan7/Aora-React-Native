import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { images } from "../../constants/constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

import { Link } from "expo-router";
const SignIn = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="min-h-[100vh] justify-center w-full px-4">
          <Image
            source={images.logo}
            className="w-[135px] h-[84px]"
            resizeMode="contain"
          />
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign up to Aora
          </Text>
          <FormField
            title="username"
            value={form.username}
            handleChangeText={(e) => {
              setForm({ ...form, username: e });
            }}
            otherStyles="mt-4"
          />
          <FormField
            title="email"
            value={form.email}
            handleChangeText={(e) => {
              setForm({ ...form, email: e });
            }}
            otherStyles="mt-4"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => {
              setForm({ ...form, password: e });
            }}
            otherStyles="mt-4"
            keyboardType="password"
          />
          <CustomButton
            title="Sign Up"
            // handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="mt-10 justify-center items-center">
            <Text className="text-lg font-psemibold text-gray-100">
              Already have an Account{" "}
              <Link
                className="text-secondary font-psemibold text-lg"
                href={"/sign-in"}
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
