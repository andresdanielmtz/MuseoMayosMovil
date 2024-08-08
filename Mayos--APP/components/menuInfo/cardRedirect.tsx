import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, ImageBackground, ImageSourcePropType, DimensionValue } from 'react-native';

interface Props {
    image?: ImageSourcePropType;
    imageHeight?: DimensionValue;
    text?: String;
    color?: string;
    opacity?: number;
    textColor?: string; 
}

const CardRedirect = (prop: Props) => {
    return (
        <ThemedView style={styles.card}>
            <ImageBackground 
              source={prop.image}
              imageStyle={[styles.backImage, {height: prop.imageHeight}]}
              resizeMode = 'cover'>
                <ThemedView style={[styles.overlay, {backgroundColor: prop.color, opacity: prop.opacity}]} />
                <ThemedText style={[styles.subtitleText, {color: prop.textColor || 'white'}]} 
                  className="text-white text-2xl font-bold">
                    {prop.text}
                </ThemedText>
            </ImageBackground>
        </ThemedView>
    );
}

export default CardRedirect;

const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        width: '85%',
        height: '100%',
        borderRadius: 30,
        overflow: 'hidden',
      },
      backImage: {
        alignSelf: 'center',
        borderRadius: 30,
        width: '100%',
        resizeMode: 'cover',
      },
      overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        width: '100%',
        height: '160%',
      },
      subtitleText: {
        alignSelf: 'flex-end',
        textAlign: 'right',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        letterSpacing: 2,
        marginRight: 15,
        marginTop: 75
      },
});