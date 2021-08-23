import React from 'react';
import { View, TouchableOpacity, Modal, Text } from 'react-native';
import styles from './styles';
import { STRINGS } from '../../constants/Strings';
interface FilterModalType {
  setFilter: any;
  filter: string;
  applyFilter: any;
  modalVisible: boolean;
  setModalVisible: any;
}

export type FilterModalProps = FilterModalType;

let FilterModal: React.FC<FilterModalProps> = ({
  setFilter,
  filter,
  applyFilter,
  modalVisible,
  setModalVisible,
}: any) => {
  const onClose = () => {
    applyFilter(filter);
    setModalVisible(false);
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>{STRINGS.filter}</Text>
            <View style={styles.divider} />
            <View onTouchEnd={() => setFilter('')} style={styles.filterRow}>
              <Text style={styles.bodyText}>{STRINGS.all}</Text>
              <View style={styles.radioButton}>
                {filter === '' && <View style={styles.radioButtonSelected} />}
              </View>
            </View>
            <View onTouchEnd={() => setFilter('rick')} style={styles.filterRow}>
              <Text style={styles.bodyText}>Rick</Text>
              <View style={styles.radioButton}>
                {filter === 'rick' && <View style={styles.radioButtonSelected} />}
              </View>
            </View>
            <View onTouchEnd={() => setFilter('morty')} style={styles.filterRow}>
              <Text style={styles.bodyText}>{STRINGS.morty}</Text>
              <View style={styles.radioButton}>
                {filter === 'morty' && <View style={styles.radioButtonSelected} />}
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>{STRINGS.applyFilter}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
FilterModal = React.memo(FilterModal);
export { FilterModal };
