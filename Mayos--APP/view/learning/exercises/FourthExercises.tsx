import { StyleSheet, ScrollView } from 'react-native';
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";
import { CurrentActivity } from "@/components/CurrentActivity";
import { ThemedText } from '@/components/ThemedText';
import { pronounSection } from '@/constants/Exercise';

export function FourthExercise() {
  return (
    <ThemedView style={styles.container}>
      <Header
        showIcon={false}
        title={"Ejercicio #4"}
        subtitle={"Pronombres"}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ThemedView style={styles.cardcontainer}>
          <ThemedText type="title" style={{ textAlign: 'center', marginBottom: 50, paddingHorizontal: 10 }}>Conjuga la palabra</ThemedText>
          <CurrentActivity activityStructure={pronounSection} />
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