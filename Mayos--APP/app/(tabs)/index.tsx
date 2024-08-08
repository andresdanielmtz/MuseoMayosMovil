import { ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import CarouselComponent from "@/components/home/Carousel";
import Header from "@/components/Header";
import MayoCultureInfo from "@/components/home/MayoCulture";

export default function Home() {
  return (
    <ThemedView className="w-full flex-1 text-black">
      <Header
        showIcon={true}
        title={"Linea del Tiempo"}
        subtitle={"¡Aprende más sobre los Mayos!"}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
        <ThemedView className="flex-row items-center mt-5 gap-2"></ThemedView>
        <ThemedView className="w-full h-50">
          <CarouselComponent />
        </ThemedView>
        <MayoCultureInfo />
      </ScrollView>
    </ThemedView>
  );
}
