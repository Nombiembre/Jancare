import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Loader } from "../../components";
import { useState } from "react";

const AuthLayout = () => {
  const { loading, isLogged } = useState(false);

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <>
      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Poppins-Regular", fontSize: 18 },
          headerTransparent: true,
        }}>
        <Stack.Screen
          name="sign-in"
          options={{
            headerTitle: "Iniciar Sesión",
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerTitle: "Registrarse",
          }}
        />
      </Stack>

      <Loader isLoading={loading} />
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;
