import MapaImagen from "@/assets/images/mapa.png";
import Header from "@/components/Header";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import React from "react";
import TestChart from "@/components/TestChart";

export default function GeografiaScreen() {
  return (
    <ThemedView>
      <Header
        title={"Geografia"}
        showIcon={true}
        subtitle={"Aprende mas sobre la Geografia"}
      />
      <ScrollView>
        <ThemedView className="flex-1 p-5 bg-orange-100">
          <View style={styles.mapContainer}>
            <Image source={MapaImagen} style={styles.image} />
          </View>

          <ThemedText style={styles.infoText}>
            (2020) Con un total de 54,648 habitantes, es Sonora la sede
            principal del Pueblo Mayo, abarcando casi un 80% de su población en
            el estado con 43,623 personas siendo de origen Mayo. A su vez,
            Sinaloa posee el otro 20%, con una población de 11,035 personas de
            origen Mayo.
          </ThemedText>
          <TestChart />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "#888",
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  mapContainer: {
    height: 300,
    width: "100%",
    marginVertical: 20,
  },
  image: {
    width: "100%",

    // resizeMode: "cover",
    marginVertical: 1,
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 80,
  },
});
