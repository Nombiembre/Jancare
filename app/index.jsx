import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../components/Text";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useState } from "react";

const Welcome = () => {
  const { loading, isLogged } = useState(false);

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-[#f9f8fc] h-full">
      <Loader isLoading={loading} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}>
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="max-w-[380px] w-full h-[298px] mt-8"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl font-pmedium text-center">
              Cuida tu piel, fortalece tu confianza
            </Text>
          </View>

          <Text className="text-sm text-gray-600 mt-4 text-center">
            Donde el cuidado de la piel se encuentra con el bienestar: Descubre hábitos saludables
            con JanCare
          </Text>

          <CustomButton
            title="Continuar"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
