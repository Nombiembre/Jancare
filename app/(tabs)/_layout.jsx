import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { Loader } from "../../components";
import { useState } from "react";
import { Link, Tabs } from "expo-router/build";
import Account from "../../components/Account";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      {icon}
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  const { loading, isLogged } = useState(false);

  // if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#518B90",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopWidth: 1,
            height: 84,
          },
          headerTitle: "",
          headerRight: () => <Account />,
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: "Inicio",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<Feather name="home" size={24} color={color} />}
                color={color}
                name="Inicio"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="rutinas"
          options={{
            title: "Rutinas",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<MaterialIcons name="self-improvement" size={24} color={color} />}
                color={color}
                name="Rutinas"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="foro"
          options={{
            title: "Foro",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<FontAwesome6 name="people-group" size={24} color={color} />}
                color={color}
                name="Foro"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="agendar"
          options={{
            title: "Citas",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<MaterialCommunityIcons name="calendar-month" size={24} color={color} />}
                color={color}
                name="Citas"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>

      <Loader isLoading={loading} />
      <StatusBar style="auto" />
    </>
  );
};

export default TabLayout;
