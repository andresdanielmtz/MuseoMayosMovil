import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, ScrollView } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import CardRedirect from "@/components/menuInfo/cardRedirect";
import Header from "@/components/Header";
import { Vocabulary } from "@/view/learning/Vocabulary";
import { Exercises } from "@/view/learning/Exercises";

type RootStackParamList = {
  Menu: undefined;
  Vocabulary: undefined;
  Exercises: undefined;
};

type MenuScreenProps = NativeStackScreenProps<RootStackParamList, "Menu">;

function MenuScreen({ navigation }: MenuScreenProps) {
  return (
    <ThemedView className="w-full text-black" style={{flex: 1}}>
      <Header
        showIcon={false}
        title={"Aprendizaje"}
        subtitle={"¡Aprende a tu manera!"}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
        <ThemedView className="pt-8">
          <TouchableOpacity className="h-[30%] mb-5" onPress={() => navigation.navigate('Vocabulary')}>
            <CardRedirect
              image={require('@/assets/images/mayosVocabulario.jpeg')}
              imageHeight={"120%"}
              text={'Vocabulario'}
              color={'#EF8867'}
              opacity={0.65}/>
          </TouchableOpacity>

          <TouchableOpacity className="h-[30%] mb-5" onPress={() => navigation.navigate('Exercises')}>
            <CardRedirect
              image={require('@/assets/images/mayosEjercicios.png')}
              imageHeight={"150%"}
              text={'Ejercicios'}
              color={'#FFE073'}
              opacity={0.6}/>
          </TouchableOpacity>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

export default function LearnScreen() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Vocabulary" component={Vocabulary} />
        <Stack.Screen name="Exercises" component={Exercises} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
