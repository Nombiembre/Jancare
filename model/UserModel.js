import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { router } from "expo-router";
import { $userToken } from "../context/UserContext";
import { firebaseConfig } from "../lib/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export class UserModel {
  static login(mail, password) {
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        $userToken.set(user);
        router.replace("/home");
      })
      .catch((error) => {
        alert(error);
      });
  }

  static async register(username, password, displayName, phoneNumber) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, username, password);
      const user = userCredential.user;

      // Async storage
      await AsyncStorage.setItem("skinType", "no definido");

      await updateProfile(user, {
        phoneNumber: phoneNumber,
        displayName: displayName,
        photoURL:
          "https://t3.ftcdn.net/jpg/06/07/84/82/360_F_607848231_w5iFN4tMmtI2woJjMh7Q8mGvgARnzHgQ.jpg",
      });

      $userToken.set(user);

      router.replace("/home");
    } catch (error) {
      Alert.alert(error);
    }
  }

  static logout() {
    $userToken.set("soy nulo");
    router.replace("/");
  }

  static getUserInfo() {}

  static deleteUserById(user) {
    deleteUser(user)
      .then(() => {
        $userToken.set("soy nulo");
        router.replace("/");
        console.log("Usuario eliminado");
      })
      .catch((error) => {
        console.log(error);
        router.replace("/");
      });
  }
}
