import { Alert, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Text from "../../components/Text";
import Constants from "expo-constants";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { CustomButton } from "../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const size = 20;
const iconColor = "#666";

const Select = () => {
  const handlePress = (value) => {
    setSkinType(value);
  };

  const SkinField = ({ value, icon }) => {
    return (
      <TouchableOpacity
        onPress={() => handlePress(value)}
        className={`flex-row items-center border p-4 w-44 border-gray-400 rounded-lg transition-all  ${skinType === value && "border-secondary bg-secondary/10"}`}>
        <View className="mr-2  rounded-full overflow-hidden">{icon}</View>
        <Text className="text-lg">{value}</Text>
      </TouchableOpacity>
    );
  };

  const submitSkinType = async () => {
    try {
      await AsyncStorage.setItem("skinType", skinType);
      Alert.alert("¡Guardado!");
      router.replace("/home");
    } catch (error) {
      Alert.alert(error);
    }
  };

  const [skinType, setSkinType] = useState("no definido");

  return (
    <View className="bg-white flex-1 p-4" style={{ paddingTop: Constants.statusBarHeight + 20 }}>
      <Text className="text-xl font-pregular">Selecciona tu tipo de piel</Text>

      <View className="mx-auto mt-8 flex-1">
        <View className="flex-row" style={{ gap: 12 }}>
          <SkinField
            value="Normal"
            icon={<FontAwesome6 name="face-smile" size={size} color={iconColor} />}
          />

          <SkinField
            value="Mixta"
            icon={<MaterialCommunityIcons name="water-opacity" size={size} color={iconColor} />}
          />
        </View>
        <View className="flex-row mt-3" style={{ gap: 12 }}>
          <SkinField
            value="Seca"
            icon={<FontAwesome5 name="chess-board" size={size} color={iconColor} />}
          />

          <SkinField
            value="Grasa"
            icon={<MaterialCommunityIcons name="water" size={size} color={iconColor} />}
          />
        </View>

        <View className="mt-auto">
          <CustomButton title="Guardar" handlePress={submitSkinType} />
        </View>
      </View>
    </View>
  );
};

export default Select;
