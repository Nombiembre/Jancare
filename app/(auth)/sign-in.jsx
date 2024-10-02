import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions } from "react-native";

import { CustomButton, FormField } from "../../components";
import { UserModel } from "../../model/UserModel";
import { useState } from "react";

const Signin = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState(false);

  const handleSignIn = () => {
    UserModel.login(mail, password);
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
            title="Correo"
            value={mail}
            handleChangeText={(e) => setMail(e)}
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

          <CustomButton
            title="Iniciar Sesión"
            handlePress={handleSignIn}
            containerStyles="mt-7"
            // isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-md text-gray-600 font-pregular">¿No tienes una cuenta?</Text>
            <Link href="/sign-up" className="text-md font-psemibold text-secondary">
              Registrarse
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
