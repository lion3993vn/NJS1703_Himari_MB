import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Nếu dùng SecureStore, import SecureStore

// Bắt buộc với `expo-auth-session`
WebBrowser.maybeCompleteAuthSession();

const API_URL = "https://wizlab.io.vn:12345/api/v1/auth/login/google/oauth";

// Cấu hình Google OAuth
const useGoogleAuth = () => {
  const [user, setUser] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      "30879456615-if2h2961oa2o059jf9lvncjpo0b68rfv.apps.googleusercontent.com",
    iosClientId: "IOS_CLIENT_ID.apps.googleusercontent.com",
    androidClientId: "ANDROID_CLIENT_ID.apps.googleusercontent.com",
    expoClientId:
      "30879456615-if2h2961oa2o059jf9lvncjpo0b68rfv.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      handleSignIn(authentication.accessToken);
    }
  }, [response]);

  const handleSignIn = async (token) => {
    try {
      const { data } = await axios.post(API_URL, { token });
      console.log("User Info:", data);
      setUser(data.user);
    } catch (error) {
      console.error("Google Sign-In API Error:", error);
    }
  };

  return { user, promptAsync };
};

export default useGoogleAuth;
