import React from 'react';
import { Modal, Button, StyleSheet } from 'react-native';
import { SectionType } from '@/constants/Vocabulary';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface VocabularyModalProps {
  visible: boolean;
  onClose: () => void;
  sections: SectionType;
}

export const VocabularyModal: React.FC<VocabularyModalProps> = ({ visible, onClose, sections }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
    >
      <ThemedView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0, 0.5)'}}> 
      <ThemedView style={styles.modalView}>
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <ThemedText type="title" style={styles.modalElement}>{section.title}</ThemedText>
            {section.text.map((item, idx) => (
              <ThemedText key={idx} type="defaultSemiBold" style={styles.modalElement}>{item}</ThemedText>
            ))}
          </React.Fragment>
        ))}
        <Button
          color='#484848'
          title="Cerrar"
          onPress={onClose}
        />
      </ThemedView>
      </ThemedView> 
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 35,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalElement: {
    color: 'black',
    padding: 8,
  },
});
