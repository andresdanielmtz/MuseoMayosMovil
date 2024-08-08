import Carousel from "react-native-reanimated-carousel";
import { View, StyleSheet, Dimensions,  Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import Mayos1 from "@/assets/images/home/mayos1.jpg"
import Mayos2 from "@/assets/images/home/mayos2.png"

const { width: screenWidth } = Dimensions.get("window");

export default function CarouselComponent() {
  return (
    <View style={styles.carouselContainer}>
      <Carousel<{ image: any }>
        width={screenWidth}
        height={200} // Set a fixed height for the carousel
        autoPlay={true}
        autoPlayInterval={5000}
        data={[{ image: Mayos1 }, { image: Mayos2 }]}
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
