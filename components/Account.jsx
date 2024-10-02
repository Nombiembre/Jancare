import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { getAuth } from "firebase/auth";

const Account = () => {
  const auth = getAuth();
  const { photoURL } = auth.currentUser;

  return (
    <View>
      {!photoURL ? (
        <Link href="/account" className="mr-4" asChild>
          <TouchableOpacity>
            <FontAwesome name="user-circle" size={24} color={"#518B90"} />
          </TouchableOpacity>
        </Link>
      ) : (
        <Link href="/account" className="mr-4" asChild>
          <TouchableOpacity>
            <Image
              source={{
                uri: photoURL,
              }}
              resizeMode="cover"
              className="w-8 h-8 rounded-full"
            />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
};

export default Account;
