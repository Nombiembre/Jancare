import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}></Stack>

      <StatusBar style="auto" />
    </>
  );
};

export default _layout;
