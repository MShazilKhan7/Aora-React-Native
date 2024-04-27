import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const one = () => {
  return (
    <>
      <View>
        <Text>one</Text>
      </View>
      <StatusBar backgroundColor="#FFF" style="dark" />
    </>
  );
};

export default one;
const styles = StyleSheet.create({});
