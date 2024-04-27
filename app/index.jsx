import { StyleSheet, Text, View, Image } from "react-native";
import { Link, router } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import { SafeAreaView,ScrollView } from "react-native";
import { images } from "../constants/constants";
import CustomButton from "../components/CustomButton";
export default function App() {
  return (
    // for safe content rendering (based on devices.)
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        {/* containing the scrollable content */}
        <View className="w-full min-h-[90vh] justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[135px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />
          <View className="w-full">
            <Text className="text-3xl font-bold text-center text-white">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary">Aora</Text>
            </Text>
            <Text className="mt-8 text-gray-100 text-center">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </Text>
            <CustomButton
              title={"Continue with Email"}
              handlePress={() => {
                // pushing the screen in a navigation stack
                router.push("/sign-in");
              }}
              isLoading={false}
              containerStyles="w-full mt-10"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    // // className="bg-black h-full w-full"
    // <View className="bg-white" style={styles.container}>
    //   <Text
    //     // style={{ fontSize: "50px", fontWeight: "900", fontFamily: "pblack" }}
    //     className="font-pblack text-5xl"
    //   >
    //     Aora
    //   </Text>
    //   <Link href="/profile" className="text-md">
    //     Go to Profile.
    //   </Link>
    //   <Link href="/home">Go to Home.</Link>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

NativeWindStyleSheet.setOutput({
  default: "native",
});
