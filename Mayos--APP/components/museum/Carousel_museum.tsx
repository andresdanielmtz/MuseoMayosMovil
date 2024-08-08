import Carousel from "react-native-reanimated-carousel";
import { View, StyleSheet, Dimensions,  Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Museum1 from "@/assets/images/museum/museomayos1.jpg"
import Museum2 from "@/assets/images/museum/of.jpg"
import Museum3 from "@/assets/images/museum/ma.jpg"
import Museum4 from "@/assets/images/museum/carro.jpg";
import Museum5 from "@/assets/images/museum/sc.jpg"
import Museum6 from "@/assets/images/museum/ft.jpg"


const { width: screenWidth } = Dimensions.get("window");

export default function CarouselMuseumComponent() {
  return (
    <View style={styles.carouselContainer}>
      <Carousel<{ image: any }>
        width={screenWidth}
        height={200} // Set a fixed height for the carousel
        autoPlay={true}
        autoPlayInterval={3000}
        data={[{ image: Museum1 }, { image: Museum2 }, { image: Museum3 }, { image: Museum4 }, { image: Museum5 },{ image: Museum6 }]}
        renderItem={({ item }) => {
          return (
            <ThemedView style={styles.carouselItem}>
              <Image source={item.image} style={styles.carouselImage} />
            </ThemedView>
          );
        }}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    width: "100%",
    height: 200, // Ensure the container has the same height as the carousel
  },
  carouselItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Adjust the image resizing mode
  },
});
