import LittleLemonFooter from "@/components/LittleLemonFooter";
import LittleLemonHeader from "@/components/LittleLemonHeader";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <LittleLemonHeader />
      <Stack screenOptions={{ headerShown: false }} initialRouteName="(tabs)" />
      <LittleLemonFooter />
    </>
  );
}
