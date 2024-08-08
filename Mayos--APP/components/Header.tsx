import { Text, Image, Button, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationAction } from "@react-navigation/native";

interface Props {
  title?: String;
  subtitle?: String;
  showIcon?: Boolean;
  showPreviousButton?: Boolean;
  navigation?: Navigator;
}
const Header = (prop: Props) => {
  /**
   * onClick = {(props) => { props.navigation.goBack(null) }}
   * !! Navigation to the previous page is still in development. 
   * ?? Still figuring out how React Navigation (and React Native for that matter) works at all...
   */
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#F0995E", "#F0CAB1"]}
      className="h-[15vh] flex-row items-center px-5 pt-10"
    >
      {prop.showIcon ? (
        <Image
          source={require("../assets/images/mayosicon.png")}
          className="w-16 h-16 mr-4"
        />
      ) : null}
      <View className="flex flex-col">
        <Text className="text-white text-2xl font-bold">{prop.title}</Text>
        <Text className="text-white text-base">{prop.subtitle}</Text>
      </View>
    </LinearGradient>
  );
};

export default Header;
