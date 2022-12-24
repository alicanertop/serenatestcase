/* eslint-disable quotes */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Product, IProduct } from 'components';

const styles = StyleSheet.create({ view: { flex: 1 } });

const product: IProduct = {
  price: 15.0,
  image:
    'https://sun9-55.userapi.com/impf/c631325/v631325363/1d3c5/hvcu06I9YMs.jpg?size=320x640&quality=96&sign=9bd614bc983e805dc2c709bccf21b268&type=album',
  title: `Don't Starve Together`,
};
export const Home = () => {
  return (
    <View style={styles.view}>
      <Product product={product} />
    </View>
  );
};
