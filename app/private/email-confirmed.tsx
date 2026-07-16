// app/email-confirmed.tsx

import { Text, View, Dimensions, PixelRatio } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Check } from "lucide-react-native";
import { router } from "expo-router";
import { AuthCustomButton } from "../../components/auth/AuthCustomButton";

export default function EmailConfirmed() {


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          padding: 16,
          justifyContent: "space-evenly",

        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            Fit<Text style={{ color: "#00dfc0" }}>Tracker.</Text>
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <View
            style={{
              width: 260,
              paddingVertical: 40,
              paddingHorizontal: 24,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "#E5E7EB",
              alignItems: "center",
              backgroundColor: "#FAFAFA",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <View
              style={{
                width: 72,
                height: 72,
                borderRadius: 36,
                backgroundColor: "#00dfc0",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <Check size={40} color="white" strokeWidth={3} />
            </View>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Email Confirmed!
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#6B7280",
                textAlign: "center",
                marginTop: 8,
              }}
            >
              Your account is verified and ready to go.
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <AuthCustomButton
            title="Continue"
            type="solid"
            onPress={() => router.replace("/public/login")}
            containerStyle={{ width: "80%", marginBottom: 20 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}