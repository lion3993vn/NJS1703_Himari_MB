import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { Platform } from "react-native";
import axios from "axios";

WebBrowser.maybeCompleteAuthSession();

const API_URL = "https://wizlab.io.vn:12345/api/v1/auth/login/google/oauth";

const getClientId = () => {
  if (Platform.OS === "ios") {
    return "IOS_CLIENT_ID.apps.googleusercontent.com";
  } else if (Platform.OS === "android") {
    return "30879456615-5k2sggt57slq2eot8ctc88iev2vm1m9s.apps.googleusercontent.com";
  }
  return "30879456615-if2h2961oa2o059jf9lvncjpo0b68rfv.apps.googleusercontent.com"; // Expo Go
};

const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: getClientId(),
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      if (authentication?.accessToken) {
        handleSignIn(authentication.accessToken);
      }
    }
  }, [response]);

  const handleSignIn = async (token) => {
    try {
      const { data } = await axios.post(API_URL, { token });
      console.log("User Info:", data.user); // Chỉ log user ra console
    } catch (error) {
      console.error("Google Sign-In API Error:", error);
    }
  };

  return { promptAsync };
};

export default useGoogleAuth;
