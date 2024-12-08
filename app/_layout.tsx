import LittleLemonFooter from "@/components/LittleLemonFooter";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
    <StatusBar style="auto" />
      <LittleLemonHeader/>
      <Stack screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="index"/>
        <Stack.Screen name="Login"/>
        <Stack.Screen name="FlatListMenu"/>
        <Stack.Screen name="SectionListMenu"/>
      </Stack>
      <LittleLemonFooter/>
    </>
  );
}
