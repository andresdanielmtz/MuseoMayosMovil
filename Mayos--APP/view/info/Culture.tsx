import Header from "@/components/Header"
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
    Button,
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
} from "react-native";
import React from "react";
import { Collapsible } from "@/components/Collapsible";
import { LinearGradient } from "expo-linear-gradient";

export default function CultureScreen() {
    return (
        <ThemedView style={styles.container}>
            <Header
                title={"Cultura"}
                showIcon={true}
                subtitle={"Aprende mas sobre los Mayos"}
            />
            <ScrollView >
                <ThemedView className="flex flex-col flex-1 p-5 ">
                    <ThemedText style={styles.textTitle} type="title">Religión </ThemedText>

                </ThemedView>
                <Collapsible title="" children={<>
                    <ThemedText style={styles.textCollapsible}>
                        Tienen dos influencias: la<ThemedText style={styles.textBold}> naturaleza</ThemedText>,
                        expresado en danzas como El Venado y El Pascola y la <ThemedText style={styles.textBold}>fe cristiana</ThemedText> ,
                        reflejada en la veneración de San Francisco, San José, etc.
                        Su organización religiosa se basa en compromisos a través de <ThemedText style={styles.textBold}>promesas</ThemedText>,
                        que deben ser realizadas por un individuo que espera o recibió un favor divino.
                    </ThemedText>
                    <View>
                        <Image source={require("@/assets/images/mayosCultura2.png")} style={styles.image} />
                    </View>
                </>} />
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#F0995E", "#F0CAB1"]}
                    style={styles.linearGradient}><Text>&nbsp;</Text>
                </LinearGradient>
                <ThemedView>
                    <ThemedText style={styles.textTitle} type="title">Festividades
                    </ThemedText>
                    <Collapsible title="" children={<>
                        <ThemedText style={styles.textCollapsible}>
                            Casi todas sus fiestas tienen vínculos con la <ThemedText style={styles.textBold}>Iglesia católica</ThemedText> y se
                            llevan a cabo en iglesias, campanarios, las casas de los fiesteros,
                            ramada o espacios para el conti. Estas fiestas involucran <ThemedText style={styles.textBold}>danza</ThemedText>, orquestas,
                            imágenes de santos, etc.
                            Algunas de sus <ThemedText style={styles.textBold}>fiestas más importantes</ThemedText> son Semana Santa, Día de Muertos, Santísima Trinidad y Virgen de Guadalupe
                        </ThemedText>
                        <View>
                            <Image source={require("@/assets/images/mayosCultura1.png")} style={styles.image} />
                        </View>
                    </>} />
                </ThemedView>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#F0995E", "#F0CAB1"]}
                    style={styles.linearGradient}><Text>&nbsp;</Text>
                </LinearGradient>
                <ThemedView>
                    <ThemedText style={styles.textTitle} type="title">Artesania</ThemedText>
                    <Collapsible title="" children={<>
                        <ThemedText style={styles.textCollapsible}>
                            Los mayos elaboran máscaras de piel de chivo, utilizadas en Semana Santa,
                            y de cuero de venado, cobijas y fajas de lana de borrego, ollas de barro,
                            instrumentos como arpas, violines y sonajas, entre otros.
                        </ThemedText>
                        <View>
                            <Image source={require("@/assets/images/mayosCultura3.png")} style={styles.image} />
                        </View>
                    </>}>

                    </Collapsible>
                </ThemedView>
            </ScrollView>
            {/* <TestChart /> */}
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
    },
    textTitle: {
        textAlign: "center"
    },
    textCollapsible: {
        fontSize: 20,
        fontWeight: "normal",
    },
    textBold: {
        fontSize:20,
        fontWeight: "bold"
    },
    linearGradient: {
        marginTop: 20,
        marginBottom: 20,
    },
    image: {
        marginTop: 10,
    }

});