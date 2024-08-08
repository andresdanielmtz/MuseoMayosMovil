import Header from "@/components/Header";
import { ThemedView } from "@/components/ThemedView";


import {
  ImageBackground,
  Dimensions,
  FlatList
} from "react-native";
import React from "react";
import InfoCard from "@/components/QuienesSon/InfoCard";


const windowWidth = Dimensions.get("window").width
const windowHeigth = Dimensions.get("window").height

const windowSplit = windowHeigth/2

const imgWidth = windowWidth * .90

const listData: {id: string, info: string}[] = [
  {
    id: "1",
    info: "La lengua mayo pertenece a la familia tara-cahita del tronco yuto-nahua, aunque la lengua dominante de la región es el español. "
  },
  {
    id: "2",
    info: "Los mayos comparten su origen, lengua e historia con los yaquis. La cultura se remonta al año 180 a.C en la zona de Aridoamérica."
  },
  {
    id: "3",
    info: "Tienen una población de 54,658 (2023) esparcida en 217 localidades en Sonora y Sinaloa, principalmente."
  },
  {
    id: "4",
    info: "La palabra mayo significa:“la gente de la ribera”. Los mayos se reconocen como Yoremes: “el pueblo que respeta la tradición”."
  },
]



export default function QuienesSon() {

  
  return (
    <ThemedView>
      <ThemedView className="flex h-full ">
        <Header
          title={"¿Quiénes Son?"}
          showIcon={true}
          subtitle={"Aprende mas sobre los Mayos"}
        />
          
            <ThemedView 
              className={`basis-1/3 items-center justify-center py-12`}
              style={{height: windowSplit*.7}}
              >
            <ImageBackground 
              className="rounded-md"
              source={require('@/assets/images/mayosQuienesSon.jpg')}
              style={{
                width: imgWidth,
                height: imgWidth/2,
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 0},
                shadowRadius: 12,
                shadowOpacity: 10,
                elevation: 12
              }}
              imageStyle={{borderRadius: 12}}
            />
            </ThemedView>

              <FlatList 
                className="self-stretch "
                data={listData} 
                renderItem={({item}) => <InfoCard item={item}/>}
                horizontal
                showsHorizontalScrollIndicator
                pagingEnabled
                bounces={false}
              />
          
        </ThemedView>
    </ThemedView>
  )

}
