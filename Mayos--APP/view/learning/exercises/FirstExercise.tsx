import { StyleSheet, ScrollView } from 'react-native';
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";
import { CurrentActivity } from "@/components/CurrentActivity";
import { ThemedText } from '@/components/ThemedText';
import { pluralSection } from '@/constants/Exercise';

export function FirstExercise() {
  return (
    <ThemedView style={styles.container}>
      <Header
        showIcon={false}
        title={"Ejercicio #1"}
        subtitle={"Plurales"}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ThemedView style={styles.cardcontainer}>
          <ThemedText type="title" style={{ textAlign: 'center', marginBottom: 50, paddingHorizontal: 10 }}>¿Cómo se vería en plural las siguientes palabras?</ThemedText>
          <CurrentActivity activityStructure={pluralSection} />
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
    paddingBottom: 50,
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