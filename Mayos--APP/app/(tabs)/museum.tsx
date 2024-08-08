import React, { useState } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity, Linking ,Image} from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";
import CarouselMuseumComponent from "@/components/museum/Carousel_museum";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "@/hooks/useColorScheme";


const Museum: React.FC = () => {
  const [isLocationExpanded, setIsLocationExpanded] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isContactExpanded, setIsContactExpanded] = useState(false);
  const colorScheme = useColorScheme();
  const region: Region = {
    latitude: 26.82669837118677,
    longitude: -109.64536361062618,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  };
  const markerCoordinate = {
    latitude: 26.82669837118677,
    longitude: -109.64536361062618,
  };
  const toggleLocationAccordion = () => {
    setIsLocationExpanded(!isLocationExpanded);
  };

  const toggleServicesAccordion = () => {
    setIsServicesExpanded(!isServicesExpanded);
  };

  const toggleContactAccordion = () => {
    setIsContactExpanded(!isContactExpanded);
  };

  return (
    <ThemedView style={styles.container}>
      <Header title="Museo" subtitle="Aprende sobre el Museo" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedText style={styles.titleText} type="title">
          Somos el Museo Casa del General Álvaro Obregón
        </ThemedText>
        <ThemedView style={styles.carouselContainer}>
          <CarouselMuseumComponent />
        </ThemedView>
        <ThemedText style={styles.descriptionText}>
          El museo recrea diversos aspectos de la Revolución Mexicana y la vida
          y obra del general Álvaro Obregón. Se exponen objetos de su vida
          familiar, su retiro a la vida privada, información de su segunda
          campaña política para obtener la presidencia de México y de las
          circunstancias de su muerte.
        </ThemedText>
        <ThemedText style={styles.descriptionText}>
          El acervo se conformó con adquisiciones hechas por el Gobierno del
          Estado, aportaciones de los huatabampenses así como de familiares del
          general Obregón, como armas, documentos, facsímiles de publicaciones
          de la época, objetos varios, dioramas y el auto en el cual el general
          sufrió un atentado el 4 de noviembre de 1927, entre otras piezas
          históricas.
        </ThemedText>
        <TouchableOpacity style={styles.accordionHeader} onPress={toggleServicesAccordion}>
          <TabBarIcon
            name={isServicesExpanded ? "chevron-up-outline" : "chevron-down-outline"}
            color={colorScheme === 'dark' ? "#fff" : "#000"}
            style={styles.icon}
          />
          <ThemedText style={styles.servicesTitleText} type="title">
            Nuestros Servicios
          </ThemedText>
        </TouchableOpacity>
        {isServicesExpanded && (
          <View>
              <Image source={require("@/assets/images/museum/sorpresa.png")} style={styles.image} resizeMode="contain"/>

          <View style={styles.bulletContainer}>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>• Visitas guiadas previa cita concertada. Cerrado durante la segunda quincena del mes de julio.</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>• Sanitarios</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>• Folleto impreso del museo</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>• Visitas guiadas</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>• Conciertos</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>• Conferencias</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>• Presentaciones editoriales</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>• Concursos de arte</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>• Piezas interactivas</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>• Talleres:</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>  - Teatro</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>  - Música</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>  - Danza</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>  - Pintura</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>  - Serigrafía</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>  - Cerámica</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>  - Manualidades</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.bulletItem}>  - Talleres diversos</ThemedText>
          </View>
          </View>
        )}
        <ThemedView>
        <TouchableOpacity style={styles.accordionHeader} onPress={toggleLocationAccordion}>
          <TabBarIcon
            name={isLocationExpanded ? "chevron-up-outline" : "chevron-down-outline"}
            color={colorScheme === 'dark' ? "#fff" : "#000"}
            style={styles.icon}
          />
          <ThemedText style={styles.locationTitleText} type="title">
            ¿Dónde encontrarnos?
          </ThemedText>
        </TouchableOpacity>
        </ThemedView>
        {isLocationExpanded && (
        <View>
            <ThemedText className="ml-5 mr-5 text-justify mt-2">Av. Francisco I. Madero, Entre Calle Melchor Ocampo y Calle Constitución</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2">CP 85900</ThemedText>
            <ThemedText className="ml-5 mr-5 text-justify mt-2">Huatabampo, Huatabampo, Sonora</ThemedText>
            <View style={styles.mapContainer}>
            <MapView style={styles.map} initialRegion={region}>
                <Marker
                coordinate={markerCoordinate}
                title="Museo Casa del General Álvaro Obregón"
                description="Ubicación del museo"
                />
            </MapView>
            </View>
        </View>
        )}

        <ThemedView>
        <TouchableOpacity style={styles.accordionHeader} onPress={toggleContactAccordion}>
          <TabBarIcon
            name={isContactExpanded ? "chevron-up-outline" : "chevron-down-outline"}
            color={colorScheme === 'dark' ? "#fff" : "#000"}
            style={styles.icon}
          />
          <ThemedText style={styles.contactTitleText} type="title">
            Contáctanos
          </ThemedText>
        </TouchableOpacity>
        </ThemedView>
        {isContactExpanded && (
        <View>
            <Image source={require("@/assets/images/museum/telefono_mano.png")} style={styles.image} resizeMode="contain"/>
        
          <ThemedText className="ml-5 mr-5 text-justify mt-2">Teléfono: <ThemedText onPress={() => Linking.openURL('tel:647-426-1069')}><ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.linkText}>(647) 426-1069 </ThemedText></ThemedText></ThemedText>

          <ThemedText className="ml-5 mr-5 text-justify mt-2">Facebook: <ThemedText onPress={() => Linking.openURL('https://www.facebook.com/MuseoCasaDelGeneralAlvaroObregon')}><ThemedText className="ml-5 mr-5 text-justify mt-2" style={styles.linkText}>Museo Casa del General Álvaro Obregon</ThemedText></ThemedText></ThemedText>
        </View>
        )}
      </ScrollView>
    </ThemedView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linkText: {
    
    color: "blue",
    textDecorationLine: "underline",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  titleText: {
    paddingTop: 16,
    width: "85%",
    alignSelf: "center",
    textAlign: "center",
    marginTop: 16,
  },
  image:{
    width: "100%",
    height: 200,
    marginTop: 16,
  },
  carouselContainer: {
    width: "100%",
    height: 200,
    marginTop: 16,
  },
  descriptionText: {
    marginLeft: 16,
    marginRight: 16,
    textAlign: "justify",
    marginTop: 8,
  },
  locationTitleText: {
    width: "90%",
    textAlign: "center",
    marginTop: 20,
  },
  servicesTitleText: {
    width: "90%",
    textAlign: "center",
    marginTop: 20,
  },
  contactTitleText: {
    width: "90%",
    textAlign: "center",
    marginTop: 20,
  },
  accordionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderBottomWidth: 1, // Add bottom border width
    borderBottomColor: "#F0995E"
  },
  icon: {
    marginRight: 8, // Move the icon more to the left
  },
  mapContainer: {
    height: 200,
    margin: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bulletContainer: {
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16,
  },
  bulletItem: {
    marginBottom: 5,
  },
});

export default Museum;
