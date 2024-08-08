import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from "@/components/ThemedView";
import CardRedirect from "@/components/menuInfo/cardRedirect";
import { CustomModal } from './CustomModal';
import { ActivityStructureType } from '@/constants/Exercise';

interface CurrentActivityProps {
  activityStructure: ActivityStructureType;
}

export const CurrentActivity: React.FC<CurrentActivityProps> = ({ activityStructure }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");

  const handleOptionPress = (isCorrect: boolean) => {
    if (isCorrect) {
      if (currentIndex < activityStructure.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setTitle("¡Felicidades!");
        setText("Terminaste el ejercicio");
        setModalVisible(true);
      }
    }
    else {
      setTitle("¡Error!");
      setText("Intente de nuevo");
      setModalVisible(true);
    }
  };

  const currentActivity = activityStructure[currentIndex];
  return (
    <ThemedView>
      <CustomModal
        visible={modalVisible}
        title={title}
        text={text}
        onClose={() => setModalVisible(false)}
      />
      <ThemedText type="subtitle" style={{ textAlign: 'center', marginBottom: 50 }}>{currentActivity.title}</ThemedText>
      {currentActivity.image && ( <Image source={currentActivity.image} style={styles.image} /> )}
      {currentActivity.options.map((option, index) => {
        const [text, isCorrect] = Object.entries(option)[0];
        return (
          <TouchableOpacity key={index} style={styles.touch} onPress={() => handleOptionPress(isCorrect)}>
            <CardRedirect
              imageHeight={"100%"}
              text={text}
              color={'#FFE073'}
              opacity={0.6}
              textColor='#000'
            />
          </TouchableOpacity>
        );
      })}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  touch: {
    height: "25%",
    marginBottom: 50,
  },
  modalElement: {
    color: 'black',
    padding: 8,
  },
  imageContainer: {
    height: 300,
    width: "50%",
  },
  image: {
    width: "100%",
    height: "20%",
    marginBottom: 50,
  },
});