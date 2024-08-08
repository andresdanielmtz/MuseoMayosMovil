import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

/**
 * It uses ION Icons, you can get the name of several ones on https://ionic.io/ionicons
 */

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />

<Tabs.Screen
        name="menuInfoMayos"
        options={{
          title: "Mayos",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "flame" : "flame-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="learn"
        options={{
          title: "Aprende",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "school" : "school-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="museum"
        options={{
          title: "Museo",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "business" : "business-outline"}
              color={color}
            />
          ),
        }}
      />

    </Tabs>
  );
}
