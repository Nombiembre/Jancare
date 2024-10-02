import { View, Text } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Rutinas = () => {
  const [skinType, setSkinType] = useState("");

  const getSkinType = async () => {
    const data = await AsyncStorage.getItem("skinType");
    setSkinType(data);
  };

  getSkinType();

  const user = {
    _redirectEventId: undefined,
    apiKey: "AIzaSyAMlWP3Mx19_Al4i7SU4ombF4_kIvUk39Q",
    appName: "[DEFAULT]",
    createdAt: "1727730678131",
    displayName: "Nombiembre ",
    email: "nombiembre@gmail.com",
    emailVerified: false,
    isAnonymous: false,
    lastLoginAt: "1727734573724",
    phoneNumber: undefined,
    photoURL:
      "https://t3.ftcdn.net/jpg/06/07/84/82/360_F_607848231_w5iFN4tMmtI2woJjMh7Q8mGvgARnzHgQ.jpg",
    providerData: [[Object]],
    stsTokenManager: {
      accessToken:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZjYzNmY2I2NDAzMjc2MGVlYjljMjZmNzdkNDA3YTY5NGM1MmIwZTMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTm9tYmllbWJyZSAiLCJwaWN0dXJlIjoiaHR0cHM6Ly90My5mdGNkbi5uZXQvanBnLzA2LzA3Lzg0LzgyLzM2MF9GXzYwNzg0ODIzMV93NWlGTjR0TW10STJ3b0pqTWg3UThtR3ZnQVJuekhnUS5qcGciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vamFuY2FyZS1jZTk5MiIsImF1ZCI6ImphbmNhcmUtY2U5OTIiLCJhdXRoX3RpbWUiOjE3Mjc3MzQ1NzMsInVzZXJfaWQiOiJ3VUZLSUp0M2Y3U3RMZ3l3QVpXd1hrTUUwdUEyIiwic3ViIjoid1VGS0lKdDNmN1N0TGd5d0FaV3dYa01FMHVBMiIsImlhdCI6MTcyNzczNDU3MywiZXhwIjoxNzI3NzM4MTczLCJlbWFpbCI6Im5vbWJpZW1icmVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIm5vbWJpZW1icmVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ClzIqRc7-ZBTkkabyogqEccL9YhqaDIQGWr-GdAITaDK1yLJEPqijo62QadPAQO4YsLpimjsNy7iMVa3IHlRFoYURv-wUA9oyTI2Mqw1JOnHUu_8a4II933JEWesSyJL3K3tENwkb9Mv4GO_sb1y8QPwz34dxXQ-JO4mR50cSnaoOBM5WyUFMhPxVd2HC7qP5QQNFC6M8AVf5yBzhKF7Jx099TCOsQrf6Ij-dtULJy7Rr08iPXLO9GpIIrvXRlh6DN3KON8Kx_bef2Fhs6tnZ3y6iVxcciokK51gxwxRSnlCh9fzQ8LqnqJic4GSfmGVL7nOe67vm1GYYV8xJWugQg",
      expirationTime: 1727738173103,
      refreshToken:
        "AMf-vBwF9LRog8_z3F3GIBggD3Nrt_JG-mCzXQR1kcxsISh6z0XqkcCF4pGMvk5T3O2z7K9PRVBrwQSuXPv0Gg8smVMpqyQsXX6o830fZZQ5kGVNJBRj4LYw7paGoiNCiPom2X-suws95MjirOyZUxnWnJ7l_hiV9JKk2zyayapu0c2YJan91dgEhXxuB9qOWPze1ab1I1brCcxAE2TwnRF-Z2v4z9SzGAmTX_wTQlH8f3oLkX7ybaM",
    },
    tenantId: undefined,
    uid: "wUFKIJt3f7StLgywAZWwXkME0uA2",
  };

  return (
    <View>
      <Text>rutinas</Text>
      <Text>skin type: {skinType}</Text>
    </View>
  );
};

export default Rutinas;
