import { View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import Text from "../../components/Text";
import Perfil from "./perfil";

const size = 20;
const iconColor = "#333";

const AccountOptions = () => {
  const options = [
    {
      text: "Cuenta",
      icon: <Feather name="user" size={size} color={iconColor} />,
      href: "/cuenta",
    },
    {
      text: "Metodos de pago",
      icon: <Ionicons name="wallet-outline" size={size} color={iconColor} />,
      href: "/metodosPago",
    },

    {
      text: "Privacidad",
      icon: <MaterialIcons name="privacy-tip" size={size} color={iconColor} />,
      href: "/privacidad",
    },
    {
      text: "Notificaciones",
      icon: <Feather name="bell" size={size} color={iconColor} />,
      href: "/notificaciones",
    },
    {
      text: "Almacenamiento y datos",
      icon: <MaterialIcons name="storage" size={size} color={iconColor} />,
      href: "/almacenamiento",
    },
    {
      text: "Ayuda",
      icon: <Entypo name="help" size={size} color={iconColor} />,
      href: "/ayuda",
    },

    {
      text: "Cerrar sesión",
      icon: <Feather name="log-out" size={size} color={iconColor} />,
      href: "/cerrarSesion",
    },
    {
      text: "Términos y condiciones",
      icon: <Ionicons name="document-text-outline" size={size} color={iconColor} />,
      href: "/terminos",
    },
  ];

  return (
    <FlatList
      data={options}
      ListHeaderComponent={() => <Perfil />}
      className="bg-white p-4"
      keyExtractor={(item, index) => index}
      renderItem={({ item, index }) => (
        <Link
          href={item.href}
          className={`py-5 ${index === options.length - 1 ? "" : "border-b border-gray-300"}`}
          asChild>
          <TouchableOpacity className="flex-row items-center">
            <View className="pr-[10px]">{item.icon}</View>
            <Text className="text-lg">{item.text}</Text>
          </TouchableOpacity>
        </Link>
      )}
    />
  );
};

export default AccountOptions;
