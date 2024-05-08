import { useState } from "react";
import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import PhotoCard from "../../components/PhotoCard";
import { images } from "../../constants/constants";
const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  // one flatlist
  // with list header
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and vertical scroll (two flat lists, within trending)
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[
          {
            title: "Study on Mars",
            prompt: "Generate an image of mars where people studying",
            imageurl: images.people_studyin_on_mars,
          },
          {
            title: "Space X",
            prompt: "Generate a Clear and historical Space x Image",
            imageurl: images.space,
          },
          {
            title: "Motivational Book Cover",
            prompt: "genrate an image of a Motivational Book Cover",
            imageurl: images.book_cover,
          },
          {
            title: "Motivational Book Cover",
            prompt: "genrate an image of a Motivational Book Cover",
            imageurl: images.book_cover,
          },
          {
            title: "Motivational Book Cover",
            prompt: "genrate an image of a Motivational Book Cover",
            imageurl: images.book_cover,
          },
          {
            title: "Motivational Book Cover",
            prompt: "genrate an image of a Motivational Book Cover",
            imageurl: images.book_cover,
          },
          {
            title: "Motivational Book Cover",
            prompt: "genrate an image of a Motivational Book Cover",
            imageurl: images.book_cover,
          },
          {
            title: "Motivational Book Cover",
            prompt: "genrate an image of a Motivational Book Cover",
            imageurl: images.book_cover,
          },
          {
            title: "Motivational Book Cover",
            prompt: "genrate an image of a Motivational Book Cover",
            imageurl: images.book_cover,
          },
        ]}
        keyExtractor={({ title }) => title}
        renderItem={({ item }) => {
          return (
            <PhotoCard
              title={item.title}
              imageurl={item.imageurl}
              prompt={item.prompt}
            />
          );
        }}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  JSMastery
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>

              <Trending posts={[]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Images Found"
            subtitle="No Images created yet"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
