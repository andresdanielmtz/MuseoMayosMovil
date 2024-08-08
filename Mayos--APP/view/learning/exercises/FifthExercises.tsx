import { StyleSheet, ScrollView } from 'react-native';
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";
import { CurrentActivity } from "@/components/CurrentActivity";
import { ThemedText } from '@/components/ThemedText';
import { numberSection } from '@/constants/Exercise';

export function FifthExercise() {
  return (
    <ThemedView style={styles.container}>
      <Header
        showIcon={false}
        title={"Ejercicio #5"}
        subtitle={"Números"}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ThemedView style={styles.cardcontainer}>
          <ThemedText type="title" style={{ textAlign: 'center', marginBottom: 50, paddingHorizontal: 10 }}>Seleccione la palabra correcta</ThemedText>
          <CurrentActivity activityStructure={numberSection} />
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
    paddingBottom: 150,
  },
  cardcontainer: {
    paddingTop: 30,
    paddingBottom: 80,
  },
  touch: {
    height: "25%",
    marginBottom: 50,
  }
});