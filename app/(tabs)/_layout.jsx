import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants/constants";
// A utility function that returns you the Icon with the specified UI Structure.

const TabIcon = ({ icon, color, name, focused }) => {
  console.log("icon source:", icon);
  console.log("color: ", color);
  return (
    <View className="flex justify-center items-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        style={{ color: color }}
        className={`${focused ? "font-psemibold" : "font-pregular"}`}
      >
        {name}
      </Text>
    </View>
  );
};
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            height: 84,
            borderTopColor: "orange",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.home}
                  color={color}
                  name="Home"
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.bookmark}
                  color={color}
                  name="Bookmark"
                  focused={focused}
                />
              );
            },
          }}
        />
        {/* another screen  */}
        <Tabs.Screen
          name="create"
          options={{
            title: "create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.plus}
                  color={color}
                  name="Create"
                  focused={focused}
                />
              );
            },
          }}
        />
        {/* another screen */}
        <Tabs.Screen
          name="profile"
          options={{
            title: "profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.profile}
                  color={color}
                  name="Profile"
                  focused={focused}
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
