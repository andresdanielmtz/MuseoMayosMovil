import React from "react";
import { Modal, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface CustomModalProps {
  visible: boolean;
  title: string;
  text: string;
  onClose: () => void;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  title,
  text,
  onClose,
}) => {
  const navigation = useNavigation();

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <ThemedView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0, 0.5)",
        }}
      >
        <ThemedView style={styles.modalView}>
          <ThemedText type="title" style={styles.modalElement}>
            {title}
          </ThemedText>
          <ThemedText type="defaultSemiBold" style={styles.modalElement}>
            {text}
          </ThemedText>
          <Button
            color="#484848"
            title="Cerrar"
            onPress={() => {
              navigation.goBack();
              onClose();
            }}
          />
        </ThemedView>
      </ThemedView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    alignSelf: "center",
    backgroundColor: "white",
    padding: 35,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalElement: {
    color: "black",
    padding: 8,
  },
});
