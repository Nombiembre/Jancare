import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Text from "../../components/Text";
import { getAuth } from "firebase/auth";
import { Link, Redirect } from "expo-router";
import images from "../../constants/images";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const auth = getAuth();
  const { displayName } = auth.currentUser;
  const [skinType, setSkinType] = useState("");

  const spas = [
    {
      name: "Club Laverdieri",
      img: "https://laverdieri.com/wp-content/uploads/2021/01/salon_belleza_bogota_spa.png",
      ratings: [4, 5, 5, 4, 3],
      direccion: "Av. de la Constitución, 100, Bogotá",
      href: "/clubLaverdieri",
    },
    {
      name: "Salón de Belleza Actuälis",
      img: "https://images.adsttc.com/media/images/5012/c42c/28ba/0d70/2000/0008/newsletter/stringio.jpg?1414282468",
      ratings: [5],
      direccion: "cr 626-74",
      href: "/salonBellezaActualis",
    },
    {
      name: "Lash Spa",
      img: "https://lashspacolombia.com/wp-content/uploads/2017/07/SALON.png",
      ratings: [5, 4],
      direccion: "Carrera 90 No. 34-46",
      href: "/lashSpa",
    },
    {
      name: "Le Visage",
      img: "https://cdn0.matrimonio.com.co/vendor/0117/3_2/960/jpg/3037e6-706aaf1819344ecdbeff322703a3e89e-mv2_10_120117.jpeg",
      ratings: [],
      direccion: "Km 1.5 Vía Cajicá Chía (Cundinamarca)",
      href: "/leVisage",
    },
  ];

  const getSkinType = async () => {
    const data = await AsyncStorage.getItem("skinType");
    setSkinType(data);
  };

  getSkinType();

  if (skinType === "no definido") {
    return <Redirect href="/select" />;
  }

  return (
    <ScrollView className="bg-white h-full px-4">
      <Text className="text-2xl font-pbold">Hola {displayName}!</Text>
      <Text className="mt-4 text-md font-psemibold">Spa's recomendados</Text>
      <FlatList
        data={spas}
        showsHorizontalScrollIndicator={false}
        className="space-x-4 max-h-72"
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <>
            <Link
              asChild
              href={item.href}
              className="w-[300px] border border-gray-300 mt-4 mr-5 rounded-lg max-h-[266px] overflow-hidden">
              <TouchableOpacity activeOpacity={0.7}>
                <Image source={{ uri: item.img }} className="w-full h-48" resizeMode="cover" />
                <View className="p-4 ">
                  <Text numberOfLines={1} className="font-pmedium text-md">
                    {item.name}
                  </Text>
                  <Text numberOfLines={1} className="text-gray-600 text-xs">
                    {item.direccion}
                  </Text>
                </View>
              </TouchableOpacity>
            </Link>
          </>
        )}
        horizontal
      />
      <Text className="mt-4 text-md font-psemibold">Categorias</Text>
      <View className="h-[600px]">
        <Image
          source={images.categorias}
          resizeMode="contain"
          className="w-[350px] h-full border border-red-400 self-center"
        />
      </View>
    </ScrollView>
  );
};

export default Home;
