import { Colors } from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'


const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveBackgroundColor: Colors.app.secondary,
                tabBarActiveTintColor: 'black',
                headerTitleStyle: { color: 'black' },
                headerShown: false,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: 'absolute',
                    },
                    default: {},
                }),
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title:"Login",
                    tabBarIcon: () => <MaterialCommunityIcons name="login" size={24} color="black" />,
                }} 
            />
            <Tabs.Screen 
                name="welcomeScrollView" 
                options={{
                    title:"Home",
                    tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color="black" />,
                }} 
            />
        </Tabs>
    )
}

export default _layout