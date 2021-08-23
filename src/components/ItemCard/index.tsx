import React from 'react';
import { Text, View, Image } from 'react-native';
import { Character } from '../../apollo/Types';
import { STRINGS } from '../../constants/Strings';
import styles from './styles';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }: CharacterCardProps) => {
  return (
    <View testID="CharacterCard" style={styles.itemContainer}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.idTitle} numberOfLines={1}>
          {STRINGS.idTitle}
          <Text style={styles.idText} numberOfLines={1}>
            {character.id}
          </Text>
        </Text>
        <Text style={styles.nameTitle} numberOfLines={1}>
          {STRINGS.nameTitle}
          <Text style={styles.nameText} numberOfLines={1}>
            {character.name}
          </Text>
        </Text>
        <Text style={styles.nameTitle} numberOfLines={1}>
          {STRINGS.locationTitle}
          <Text style={styles.locationText} numberOfLines={1}>
            {character.location.name}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export { CharacterCard };
