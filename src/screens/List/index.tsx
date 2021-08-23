import { useLazyQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { FETCH_CHARACTERS } from '../../apollo/Queries';
import { CharactersQueryType } from '../../apollo/Types';
import { COLORS, SIZES, STRINGS, STYLES } from '../../constants';
import { CharacterCard, FilterModal } from '../../components';

import styles from './styles';
import { errorHandler } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList, TouchableOpacity } from 'react-native';

export type Props = {
  navigation: any;
};

const List: React.FC<Props> = ({ navigation }) => {
  List.propTypes = {
    navigation: PropTypes.any,
  };
  const [filter, setFilter] = useState<string>('');

  const flatlistRef = useRef<any>();

  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  useEffect(() => {
    navigation.setOptions({
      title: STRINGS.rickAndMorty,
      headerTransparent: false,
      headerRight: () => (
        <Icon
          onPress={() => setModalVisible(true)}
          name={'filter'}
          style={styles.iconStyle}
          size={27}
          color={COLORS.black}
        />
      ),
    });
  }, []);

  const [getData, { data, fetchMore, loading, error }] = useLazyQuery<CharactersQueryType>(
    FETCH_CHARACTERS,
    {
      variables: {
        page: 1,
      },
    },
  );

  useEffect(() => {
    getData();
  }, []);

  const queryData = data && data.characters;
  const showNoMoreMessage = queryData && !queryData.info.next && queryData.info.pages > 1;
  const characters = queryData ? queryData.results : null;
  const canLoadMore = queryData && queryData.info.next && !loadingMore;

  const applyFilter: (value: string) => void = async (value) => {
    getData({
      variables: {
        filter: {
          name: value,
        },
      },
    });
  };

  const loadMoreHandler = async () => {
    if (!canLoadMore || !fetchMore) {
      return null;
    } else {
      setLoadingMore(true);
      await fetchMore({
        variables: {
          page: data?.characters.info.next,
        },
      });
      setLoadingMore(false);
    }
  };

  const renderFooter = () => {
    if (data && loadingMore) {
      return <ActivityIndicator style={styles.indicator} color={COLORS.koromike} />;
    } else if (showNoMoreMessage) {
      return (
        <View style={styles.noMoreContainer}>
          <Text style={styles.noMoreText}>{STRINGS.noMoreChars}</Text>
          <TouchableOpacity
            style={styles.upIcon}
            onPress={() => flatlistRef.current.scrollToIndex({ index: 0 })}>
            <Icon name={'arrow-up'} size={SIZES.h2} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.centeredView}>
      {loading && (
        <ActivityIndicator color={COLORS.koromike} style={styles.indicator} size={'small'} />
      )}
      {error ? (
        <Text style={STYLES.errorText}>{errorHandler(error)}</Text>
      ) : (
        characters && (
          <FlatList
            showsVerticalScrollIndicator={false}
            ref={flatlistRef}
            data={characters}
            renderItem={({ item }) => <CharacterCard character={item} />}
            ListFooterComponent={renderFooter}
            contentContainerStyle={styles.list}
            keyExtractor={(item) => `${item.id}`}
            onEndReachedThreshold={0}
            onEndReached={loadMoreHandler}
          />
        )
      )}
      {modalVisible && (
        <FilterModal
          filter={filter}
          setFilter={setFilter}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          applyFilter={(filter: string) => applyFilter(filter)}
        />
      )}
    </View>
  );
};

export default List;
