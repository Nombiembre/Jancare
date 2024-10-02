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
          headerTitleStyle: { fontFamily: "Poppins-Regular", fontSize: 18 },
          tabBarStyle: {
            borderTopWidth: 1,
            height: 84,
          },
        }}>
        <Stack.Screen
          name="account"
          options={{
            headerTitle: "Cuenta",
          }}
        />
      </Stack>

      <Loader isLoading={loading} />
      <StatusBar style="auto" />
    </>
  );
};

export default AuthLayout;
