import React, { useState } from "react";
import { Image, Pressable, Text, View } from "../../components/styled";
import { BGImage, Logo } from "../../../assets";
import { useNavigation, useRoute } from "@react-navigation/native";
import OTPTextInput from "react-native-otp-textinput";
import {
  RootStackNavigationProps,
  RootStackScreenProps,
} from "../../navigations/types";

const ForgetPasswordScreen = () => {
  const [otp, setOtp] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();
  const route = useRoute<RootStackScreenProps<"VerifyResetOTP">["route"]>();
  const { email } = route.params;

  const handleOTPInput = (val: string) => {
    if (val.length === 6) {
      navigation.navigate("ResetPassword", { email, otp });
    }
  };

  return (
    <View className="flex-1 items-center justify-start">
      <Image source={BGImage} resizeMode="cover" className="h-96 w-full " />
      <View className="w-full h-full -mt-44 p-6 bg-white rounded-tl-[75px] space-y-6 items-center justify-start">
        <Image source={Logo} className="w-16 h-16" resizeMode="contain" />
        <Text className="text-primaryText text-xl font-bold">
          Forget Passowrd
        </Text>

        <View>
          <OTPTextInput
            keyboardType="default"
            inputCount={6}
            autoFocus
            handleTextChange={(e) => handleOTPInput(e)}
          />
          {/* <TouchableOpacity onPress={handleSendPasswordResetLink}>
            <View className="w-full flex-row items-center justify-center rounded-lg py-2 my-2 bg-primary ">
              {submitting ? (
                <Text className="font-semibold text-xl text-white">
                  <LoadingDots dots={4} size={12} bounceHeight={5} />
                </Text>
              ) : (
                <Text className="font-semibold text-xl text-white">
                  Forgot Password
                </Text>
              )}
            </View>
          </TouchableOpacity> */}
        </View>

        <View className="flex-row items-center justify-center space-x-2">
          <Text className="text-sm font-semibold text-primaryText">
            Remember your password?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text className="text-primary text-sm font-semibold ">Sign In</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;
