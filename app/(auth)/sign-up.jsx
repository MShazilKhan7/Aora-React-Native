import { StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { images } from "../../constants/constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async () => {
    if (!form.email === "" || !form.password === "" || !form.username === "") {
      Alert.alert("Error", "please fill in all the fields");
    } else {
      setIsSubmitting(true);
      try {
        const result = await createUser(
          form.email,
          form.password,
          form.username
        );
        setUser(result);
        setIsLoggedIn(true);
        // set to the global state using context....
        router.replace("/home");
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ minHeight: "100%" }}>
        <View className="min-h-[110vh] justify-center w-full px-4">
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
            handlePress={onSubmit}
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
                Sign in
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
