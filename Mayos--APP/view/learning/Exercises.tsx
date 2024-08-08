import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Header";
import CardRedirect from "@/components/menuInfo/cardRedirect";
import { FirstExercise } from "./exercises/FirstExercise";
import { SecondExercise } from "./exercises/SecondExercise";
import { ThirdExercise } from "./exercises/ThirdExercises";
import { FourthExercise } from "./exercises/FourthExercises";
import { FifthExercise } from "./exercises/FifthExercises";

type RootStackParamList = {
  Menu: undefined;
  FirstExercise: undefined;
  SecondExercise: undefined;
  ThirdExercise: undefined;
  FourthExercise: undefined;
  FifthExercise: undefined;
};

type MenuScreenProps = NativeStackScreenProps<RootStackParamList, "Menu">;

function MenuScreen({ navigation }: MenuScreenProps) {
  return (
    <ThemedView style={styles.container}>
      <Header
        showIcon={false}
        title={"Ejercicios"}
        subtitle={"¡Practica tus habilidades!"}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ThemedView style={styles.cardcontainer}>
          <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('FirstExercise')}>
            <CardRedirect
              image={require('@/assets/images/vocabularioPlurales.jpg')}
              imageHeight={"120%"}
              text={'Expresiones Plurales'}
              color={'#EF8867'}
              opacity={0.65}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('SecondExercise')}>
            <CardRedirect
              image={require('@/assets/images/vocabularioAnimales.jpg')}
              imageHeight={"120%"}
              text={'Animales'}
              color={'#FFE073'}
              opacity={0.6}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('ThirdExercise')}>
            <CardRedirect
              image={require('@/assets/images/vocabularioManos.jpg')}
              imageHeight={"120%"}
              text={'Partes del Cuerpo'}
              color={'#B38B66'}
              opacity={0.65}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('FourthExercise')}>
            <CardRedirect
              image={require('@/assets/images/vocabularioPronombres.jpg')}
              imageHeight={"120%"}
              text={'Pronombres'}
              color={'#F0995E'}
              opacity={0.65}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('FifthExercise')}>
            <CardRedirect
              image={require('@/assets/images/vocabularioNumeros.jpg')}
              imageHeight={"120%"}
              text={'Numeros'}
              color={'#EF8867'}
              opacity={0.65}
            />
          </TouchableOpacity>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

export function Exercises() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="FirstExercise" component={FirstExercise} />
        <Stack.Screen name="SecondExercise" component={SecondExercise} />
        <Stack.Screen name="ThirdExercise" component={ThirdExercise} />
        <Stack.Screen name="FourthExercise" component={FourthExercise} />
        <Stack.Screen name="FifthExercise" component={FifthExercise} />
      </Stack.Navigator>
    </NavigationContainer>
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