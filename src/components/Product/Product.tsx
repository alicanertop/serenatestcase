import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper-flatlist';
import { SwiperFlatListRefProps } from 'react-native-swiper-flatlist/src/components/SwiperFlatList/SwiperFlatListProps';

import * as ProductRelease from './ProductRelease';

const { width } = Dimensions.get('window');

const heightSize = 40;
const styles = StyleSheet.create({
  header: { flexDirection: 'row', height: heightSize, backgroundColor: '#dcdcdc' },
  headerActive: { backgroundColor: '#46f08a' },
  headerButton: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    height: heightSize,
    lineHeight: heightSize,
    textAlign: 'center',
  },
  swiperChild: { width },
});

const headerTitleList = [
  { text: 'Lastest Releases', index: 0 },
  { text: 'Classics', index: 1 },
  { text: 'Upcoming', index: 2 },
];

export const Product = ({ product }: {} & ProductRelease.ProductReleaseProps) => {
  const swiperRef = useRef<SwiperFlatListRefProps | null>();
  const [index, setIndex] = useState(0);

  const handleIndexChange = useCallback(
    (i: number) => () => {
      setIndex(i);
      swiperRef.current?.scrollToIndex({ index: i, animated: true });
    },
    []
  );

  return (
    <>
      <View style={styles.header}>
        {headerTitleList.map((headeTitle) => (
          <TouchableOpacity
            key={headeTitle.index}
            onPress={handleIndexChange(headeTitle.index)}
            style={[styles.headerButton, index === headeTitle.index ? styles.headerActive : {}]}
          >
            <Text style={styles.text}>{headeTitle.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Swiper ref={(ref) => (swiperRef.current = ref)} onChangeIndex={(i) => setIndex(i.index)}>
        <View style={styles.swiperChild}>
          <ProductRelease.ProductRelease product={product} />
        </View>
        <View style={styles.swiperChild}>
          <Text>{headerTitleList[index].text}</Text>
        </View>
        <View style={styles.swiperChild}>
          <Text>{headerTitleList[index].text}</Text>
        </View>
      </Swiper>
    </>
  );
};
