import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Header from "@/components/Header";
import CardRedirect from "@/components/menuInfo/cardRedirect";

import GeografiaScreen from "@/view/info/Geography";
import CultureScreen from "@/view/info/Culture";


// Navigation
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Traditions from "@/view/info/Traditions";
import QuienesSon from "@/view/info/QuienesSon";
// Navigation

type RootStackParamList = {
  Menu: undefined;
  QuienesSon: undefined;
  Cultura: undefined;
  Geografia: undefined;
  Tradiciones: undefined;
};

type MenuScreenProps = NativeStackScreenProps<RootStackParamList, "Menu">;

export default function MyStack() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>

        <Stack.Screen
          name="Menu"
          component={MenuInfoMayos}
        />

        <Stack.Screen name="QuienesSon" component={QuienesSon} />

        <Stack.Screen 
          name="Cultura" 
          component={CultureScreen} />

        <Stack.Screen 
          name="Geografia" 
          component={GeografiaScreen} /> 

        <Stack.Screen 
          name="Tradiciones" 
          component={Traditions} />  

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MenuInfoMayos({ navigation }: MenuScreenProps) {
  return (
    <ThemedView style={styles.container}>

        <ThemedView>
          <Header
            showIcon={false}
            title={"Los Mayos"}
            subtitle={"¡Aprende más sobre los Mayos!"}
          />
        </ThemedView>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ThemedView style={styles.cardcontainer}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => navigation.navigate("QuienesSon")}
          >
            <CardRedirect
              image={require("@/assets/images/mayosQuienesSon.jpg")}
              imageHeight={"120%"}
              text={'¿Quiénes\nson?'}
              color={'#EF8867'}
              opacity={0.65}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch}
            onPress={() => navigation.navigate("Cultura")}
          >
            <CardRedirect
              image={require("@/assets/images/mayosCultura.jpg")}
              imageHeight={"150%"}
              text={'Cultura'}
              color={'#FFE073'}
              opacity={0.8}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch}
            onPress={() => navigation.navigate("Geografia")}
          >
            <CardRedirect
              image={require("@/assets/images/mayosGeografia.jpg")}
              imageHeight={"140%"}
              text={'Geografía'}
              color={'#B38B66'}
              opacity={0.65}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch}
            onPress={() => navigation.navigate("Tradiciones")}
          >
            <CardRedirect
              image={require("@/assets/images/mayosTradiciones.jpg")}
              imageHeight={"150%"}
              text={'Tradiciones'}
              color={'#F0995E'}
              opacity={0.65}/>
          </TouchableOpacity>
          
        </ThemedView>
      </ScrollView>
    </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF6F0",
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
    height: "24%",
    marginBottom: 20,
  },
});
