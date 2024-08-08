import { ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Header from "@/components/Header";
import { StyleSheet, Image, View } from "react-native";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function Traditions() {
  return (
    <ThemedView>
      <Header
        showIcon={false}
        title={"Tradiciones"}
        subtitle={"Aprende más sobre los Mayos"}
      />
      <ScrollView>
        <ThemedView style={styles.container}>
          <ThemedView style={styles.itemfull}>
            <ThemedText style={styles.sectionTitleLeft}>Danza</ThemedText>
          </ThemedView>
          <ThemedView>
            <ThemedText style={styles.subsectionTitleLeft}>
              Danza de pascola
            </ThemedText>
            <ThemedText style={styles.infoTextLeft}>
              Este danzante representa al mal, porque al bailar al son del
              tambor y la flauta, se convierte entonces en animal maligno.
            </ThemedText>
          </ThemedView>
          <ThemedView>
          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require("@/assets/images/traditions/Tradiciones-3.png")}
              style={styles.imageStyle}
            />
            </View> 
          </ThemedView>
          <ThemedView style={styles.itemfull}>
            <ThemedText style={styles.infoTextLeft}>
              Por ello se pone la máscara sobre su rostro para cubrirlo. En
              cambio cuando baila al son del violín y el arpa es nuevamente
              gente, pues lo hace con la cara sin la máscara al frente. Durante
              nuestras celebraciones este oficio es importante ya que el mayor
              de ellos es quién pide permiso al santo patrón para abrir la
              fiesta y sin ellos no se hace.
            </ThemedText>
            <ThemedText style={styles.infoTextLeft}>
              Este destino se transmite por herencia de la familia, otras veces
              por gusto o un don que recibe el danzante de esta virtud, como es
              un compromiso ineludible porque Dios los ha señalado desde arriba
              aún antes de nacer. Por eso, al recibir el saludo de algún
              promesero o fiestero, no puede negarse a participar;
              espiritualmente y físicamente es su destino. A este ritual también
              se le conoce como el culto de los montes, desde el punto de vista
              prehispánico. Esto es lo que significan los diversos símbolos en
              la danza de pascola:
            </ThemedText>

            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#F0995E", "#F0CAB1"]}
              style={styles.linearGradient}
            >
              <Text>&nbsp;</Text>
            </LinearGradient>

            <View style={styles.container}>
              <Text style={styles.subsectionTitleLeft}>
                Elementos de la Danza
              </Text>
              <View style={styles.listContainer}>
                <Text style={styles.infoTextLeft}>
                  JUYYA-ANIA: El monte, el entorno ecológico, la naturaleza que
                  nos rodea.
                </Text>
                <Text style={styles.infoTextLeft}>
                  PASCOLA: Fiesta vieja o pascola viejo.
                </Text>
                <Text style={styles.infoTextLeft}>
                  LA FLOR: El distintivo ante Dios y los Santos.
                </Text>
                <Text style={styles.infoTextLeft}>
                  TENOBARIS: La víbora de cascabel.
                </Text>
                <Text style={styles.infoTextLeft}>
                  FAJA NEGRA: La víbora negra.
                </Text>
                <Text style={styles.infoTextLeft}>
                  TRAJE BLANCO: La luz para caminar ante Dios.
                </Text>
                <Text style={styles.infoTextLeft}>
                  COYOLIS: La campataña de todos los santos o los Doce
                  Apóstoles.
                </Text>
                <Text style={styles.infoTextLeft}>
                  SONAJAS: Se abre el camino con su sonido, ya sea bueno o malo
                  su andar.
                </Text>
                <Text style={styles.infoTextLeft}>
                  LA MÁSCARA: Representa el mal cuando se cubre el rostro; los
                  instintos animales. Mientras está descubierto se dice que
                  vuelve a ser hombre; hay una especie de nahualismo en esta
                  danza. El principio dual se manifiesta. Puede hablarse de una
                  lucha entre el bien y el mal.
                </Text>
                <Text style={styles.infoTextLeft}>
                  LA DANZA DE LOS MATACHINES: Es una danza muy significativa
                  porque según lo que cuentan y se ve es una manifestación de
                  guardia en honor de una imagen o ante un altar en ocasiones
                  improvisado por alguna celebración.
                </Text>
                <Text style={styles.infoTextLeft}>
                  LA CORONA: Significa la corona real del Rey del cielo y la
                  tierra.
                </Text>
                <Text style={styles.infoTextLeft}>
                  EL PAÑO: Que usa en la cabeza el danzante representa la
                  honestidad.
                </Text>
                <Text style={styles.infoTextLeft}>
                  LAS DOCE FLORES: Que tiene la corona en sus arcos nos
                  recuerdan a las Doce Tribus de Israel, los doce Apóstoles y
                  los doce meses del año.
                </Text>
                <Text style={styles.infoTextLeft}>
                  -{" "}
                  <Text style={styles.listElement}>
                    LOS LISTONES Y LA ÚLTIMA FLOR:
                  </Text>{" "}
                  Representan al Padre Eterno con sus rayos de luz de oro,
                  cuando visitó a Jesús en Belén por medio de los ángeles.
                </Text>
                <Text style={styles.infoTextLeft}>
                  - <Text style={styles.listElement}>LA SONAJA:</Text> Es el
                  palpitar de nuestro corazón que se hace presente en este
                  sonido.
                </Text>
                <Text style={styles.infoTextLeft}>
                  - <Text style={styles.listElement}>LA PALMA</Text> Son el
                  aleteo de los ángeles que se mueven constantemente como el
                  danzante de matachín mueve la palma al son de la música.
                </Text>
                <Text style={styles.infoTextLeft}>
                  LOS TRES MÚSICOS: Quienes tocan los sones de la danza
                  significan las tres personas distintas de la Santísima
                  Trinidad en un solo Dios.
                </Text>
                <Text style={styles.infoTextLeft}>
                  LAS TRES PATADAS A LA TIERRA: Son la Trinidad soberana que
                  son: Dios Padre, Dios Hijo y Dios Espíritu Santo.
                </Text>
              </View>
            </View>

            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#F0995E", "#F0CAB1"]}
              style={styles.linearGradient}
            >
              <Text>&nbsp;</Text>
            </LinearGradient>

            <ThemedText style={styles.infoTextLeft}>
              Esta danza no es propia de sus costumbres o raíces ancestrales;
              más bien se introdujo como una forma de evangelizar a los pueblos,
              los cuales lo han recibido y lo han inculcado, La persona que
              dirige la danza es llamado monarca y se compone el monarcado de
              tres grados.
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.imagesEndContainer}>
            <ThemedText style={styles.sectionTitleLeft}>Música</ThemedText>
            <ThemedView style={styles.item}>
              <ThemedText style={styles.infoTextLeft}>
                Danza de pascola
              </ThemedText>
            </ThemedView>
            <ThemedView style={styles.item}>
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image
                source={require("@/assets/images/traditions/Tradiciones-1.png")}
                style={styles.imageStyle}
              />

                </View>
  
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.imagesEndContainer}>
            <ThemedText style={styles.sectionTitleLeft}>Vestimenta</ThemedText>
          </ThemedView>
          <ThemedView style={styles.item}>
            <ThemedText style={styles.infoTextLeft}>Tenábaris</ThemedText>
          </ThemedView>
          <ThemedView style={styles.item}>
          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require("@/assets/images/traditions/Tradiciones-2.png")}
              style={[styles.imageStyle, styles.itemFull]}
            />
            </View> 
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  subsectionTitleLeft: {
    // Add styles for subsection titles here
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoTextLeft: {
    // Add styles for information text here
    fontSize: 16,
    marginBottom: 5,
  },
  listElement: {
    // Add styles for list elements here
    fontWeight: "bold",
  },
  container: {
    // Add styles for the overall container here
    padding: 20,
  },
  sectionTitle: {
    // Add styles for section titles here
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listContainer: {
    // Add styles for the list container here
    marginLeft: 20,
    marginBottom: 10,
  },
  listItem: {
    // Add styles for list items here
    fontSize: 16,
    marginBottom: 5,
  },
  imageStyle: {
    width: 500,
    height: 400,
    resizeMode: "contain",
    marginBottom: 10,
  },
  sectionTitleRight: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  infoTextRight: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 10,
  },
  sectionTitleLeft: { fontSize: 20, fontWeight: "bold" },
  item: {
    flex: 1,
    flexDirection: "column",
  },
  linearGradient: {
    marginTop: 20,
    marginBottom: 20,
  },
  itemFull: {
    marginBottom: 125,
  },
  imagesEndContainer: {
    marginTop: 15
  },

});
