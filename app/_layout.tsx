import { Stack } from "expo-router";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="login" options={{ headerShown: false }}/>
      <Stack.Screen name="register" options={{ headerShown: false }}/>
      <Stack.Screen name="register-popup" options={{ headerShown: false }}/>
      <Stack.Screen name="forgot-password" options={{ headerShown: false }}/>
      <Stack.Screen name="forgot-password-email" options={{ headerShown: false }}/>
      <Stack.Screen name="user" options={{ headerShown: false }}/>
      <Stack.Screen name="edit-user" options={{ headerShown: false }}/>
      <Stack.Screen name="preferences" options={{ headerShown: false }}/>
      <Stack.Screen name="forgot-password-pin" options={{ headerShown: false }}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{headerShown: false }} />
    </Stack>
  );
}
