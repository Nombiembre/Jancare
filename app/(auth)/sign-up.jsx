import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions } from "react-native";

import { CustomButton, FormField } from "../../components";
import { useState } from "react";
import { UserModel } from "../../model/UserModel";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleCreateUser = () => {
    UserModel.register(username, password, displayName);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}>
          <FormField
            title="Nombre"
            value={displayName}
            handleChangeText={(e) => setDisplayName(e)}
            otherStyles="mt-7"
            keyboardType="default"
          />
          <FormField
            title="Correo"
            value={username}
            handleChangeText={(e) => setUsername(e)}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Contraseña"
            value={password}
            handleChangeText={(e) => setPassword(e)}
            otherStyles="mt-7"
            keyboardType="default"
          />

          <CustomButton title="Registrarse" handlePress={handleCreateUser} containerStyles="mt-7" />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-md text-gray-600 font-pregular">¿Ya tienes una cuenta?</Text>
            <Link href="/sign-in" className="text-md font-psemibold text-secondary">
              Iniciar Sesión
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
