import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import VideoScreen from "./VideoPlayer";

export default function MayoCultureInfo() {
  return (
    <ThemedView>
      <ThemedText className="w-full text-center mt-5" type="title">
        La Cultura Mayo
      </ThemedText>
      <ThemedText className="ml-5 mr-5 text-justify mt-2">
        La cultura mayo es parte integral de la identidad de las comunidades que
        la conforman. Preservarla significa mantener viva la historia, las
        tradiciones, el idioma y las prácticas culturales que han definido a
        este pueblo a lo largo de generaciones. Ayuda a fortalecer el sentido de
        pertenencia y orgullo entre los miembros de la comunidad.
      </ThemedText>

      <VideoScreen />
    </ThemedView>
  );
}
