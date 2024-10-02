import { View, Image } from "react-native";
import React from "react";
import { getAuth } from "firebase/auth";
import Text from "../../components/Text";

const Perfil = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const { displayName, email, photoURL } = user;

  return (
    <View className="flex-row space-x-6 mb-4 items-center bg-white px-6 py-5 border rounded-lg border-gray-300">
      <Image
        source={{
          uri: photoURL,
        }}
        resizeMode="cover"
        className="w-16 h-16 rounded-full"
      />
      <View>
        <Text className="font-pmedium text-lg">{displayName}</Text>
        <Text className="text-gray-600 text-xs">{email}</Text>
      </View>
    </View>
  );
};

export default Perfil;
