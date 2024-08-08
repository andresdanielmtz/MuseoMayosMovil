import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function InfoCard({item}) {

    item.info.replace("te", '<b>' + "te" + '</b>')

    let cardColor: string[] = []

    if (Number(item.id) % 2 === 0){
        cardColor = ["#F38585","#F0995E"]


    } else {
        cardColor = ["#FF9F40", "#C27931", "#B06C29"]

    }

    return (
        <ThemedView className="w-screen flex h-full px-6 py-10">
            <LinearGradient 
                className=" flex justify-between basis-3/4 rounded-md w-full px-4 pt-10 pb-4 drop-shadow-2xl space-y-5"
                colors={cardColor}    
            >
                <ThemedText className="self-center font-bold font-xl text-center text-white ">{item.info}</ThemedText>
                <ThemedView className="flex flex-row justify-center bg-transparent space-x-1">
                <ThemedText className="self-center font-bold font-xl text-center text-white">
                    Deslizar
                    </ThemedText>
                <MaterialCommunityIcons name="gesture-swipe-horizontal" size={48} color="white" />
                </ThemedView>
            </LinearGradient>
        </ThemedView>
    )
}