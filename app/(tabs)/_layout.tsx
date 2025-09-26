import { Tabs } from 'expo-router'
import { Globe, HistoryIcon, HomeIcon, UserCircle } from 'lucide-react-native'
import React from 'react'

export default function TabLayout() {
  return (
    <Tabs >
        <Tabs.Screen name='Home' 
        options={{
            tabBarIcon: ({color, size}) => 
            <HomeIcon size={size} color={color}/>
        }}/>
        <Tabs.Screen name='Explore'
        options={{
            tabBarIcon: ({color, size}) => 
            <Globe size={size} color={color}/>
        }}/>c
        <Tabs.Screen name='History'
        options={{
            tabBarIcon: ({color, size}) => 
            <HistoryIcon size={size} color={color}/>
        }}/>
        <Tabs.Screen name='Profile'
        options={{
            tabBarIcon: ({color, size}) => 
            <UserCircle size={size} color={color}/>
        }}/>
    </Tabs>
  )
}