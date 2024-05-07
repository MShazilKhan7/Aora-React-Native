import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";

//  scroll View doesnot support horizontal and vertial scrolling at the same time 
// Here, having two Flat List.

const Trending = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        console.log(item);
        return <Text className="text-3xl text-gray-100">{item.id}</Text>;
      }}
      horizontal
    />
  );
};

export default Trending;
