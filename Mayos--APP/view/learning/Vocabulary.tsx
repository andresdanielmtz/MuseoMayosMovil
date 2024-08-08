import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";
import CardRedirect from "@/components/menuInfo/cardRedirect";
import { VocabularyModal } from '@/components/VocabularyModal';
import { SectionType, pluralSection, animalSection, bodySection, pronounSection, numberSection } from '@/constants/Vocabulary';

export function Vocabulary() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [sections, setSections] = React.useState<SectionType>([]);

  return (
    <ThemedView style={styles.container}>
      <Header
        showIcon={false}
        title={"Aprendizaje"}
        subtitle={"¡Aprende a tu manera!"}
      />
      <VocabularyModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        sections={sections}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ThemedView style={styles.cardcontainer}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              setSections(pluralSection);
              setModalVisible(true);
            }}
          >
            <CardRedirect
              image={require("@/assets/images/vocabularioPlurales.jpg")}
              imageHeight={"120%"}
              text={"Expresiones Plurales"}
              color={"#EF8867"}
              opacity={0.65}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              setSections(animalSection);
              setModalVisible(true);
            }}
          >
            <CardRedirect
              image={require("@/assets/images/vocabularioAnimales.jpg")}
              imageHeight={"120%"}
              text={"Animales"}
              color={"#FFE073"}
              opacity={0.6}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              setSections(bodySection);
              setModalVisible(true);
            }}
          >
            <CardRedirect
              image={require("@/assets/images/vocabularioManos.jpg")}
              imageHeight={"120%"}
              text={"Partes del Cuerpo"}
              color={"#B38B66"}
              opacity={0.65}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              setSections(pronounSection);
              setModalVisible(true);
            }}
          >
            <CardRedirect
              image={require("@/assets/images/vocabularioPronombres.jpg")}
              imageHeight={"120%"}
              text={"Pronombres"}
              color={"#F0995E"}
              opacity={0.65}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              setSections(numberSection);
              setModalVisible(true);
            }}
          >
            <CardRedirect
              image={require("@/assets/images/vocabularioNumeros.jpg")}
              imageHeight={"120%"}
              text={"Numeros"}
              color={"#EF8867"}
              opacity={0.65}
            />
          </TouchableOpacity>
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
    height: "18%",
    marginBottom: 20,
  }
});
