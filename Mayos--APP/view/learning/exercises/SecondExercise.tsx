import { StyleSheet, ScrollView } from 'react-native';
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";
import { CurrentActivity } from "@/components/CurrentActivity";
import { ThemedText } from '@/components/ThemedText';
import { animalSection } from '@/constants/Exercise';

export function SecondExercise() {
  return (
    <ThemedView style={styles.container}>
      <Header
        showIcon={false}
        title={"Ejercicio #2"}
        subtitle={"Identificando Animales"}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ThemedView style={styles.cardcontainer}>
          <ThemedText type="title" style={{ textAlign: 'center', marginBottom: 20, paddingHorizontal: 10 }}>Seleccione el nombre del animal</ThemedText>
          <CurrentActivity activityStructure={animalSection} />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 550,
  },
  cardcontainer: {
    paddingTop: 30,
    paddingBottom: 80,
  },
  touch: {
    height: "25%",
    marginBottom: 20,
  }
});