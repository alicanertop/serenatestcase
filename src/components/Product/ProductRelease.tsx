import React, { useCallback } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type IProduct = { image: string; title: string; price: number };
export type ProductReleaseProps = { product?: IProduct };

const buttonHeight = 30;
const styles = StyleSheet.create({
  orderButton: {
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  orderText: {
    fontSize: 16,
    fontWeight: 'bold',
    height: buttonHeight,
    lineHeight: buttonHeight,
    textAlign: 'center',
  },
  titleWrapper: { justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginTop: 10, fontWeight: 'bold' },
  footerWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  priceText: {
    fontSize: 16,
    marginTop: 4,
    marginRight: 10,
    height: buttonHeight,
    lineHeight: buttonHeight,
    textAlign: 'center',
  },
  imageWrapper: { justifyContent: 'center', alignItems: 'center' },
  image: { width: 320, height: 540, resizeMode: 'contain', fontSize: 22, marginTop: 10, fontWeight: 'bold' },
});

export const ProductRelease = ({ product }: ProductReleaseProps) => {
  const onOrder = useCallback(() => {
    Alert.alert(
      'Do you want to order ?',
      `${product?.title}`,
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => {} },
      ],
      { cancelable: false }
    );
  }, [product]);

  return (
    <>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{product?.title}</Text>
      </View>

      <View style={styles.imageWrapper}>
        <Image source={{ uri: product?.image }} style={styles.image} />
      </View>

      <View style={styles.footerWrapper}>
        <Text style={styles.priceText}>{`${Number(product?.price).toFixed(2)} €`}</Text>
        <TouchableOpacity onPress={onOrder} style={styles.orderButton}>
          <Text style={styles.orderText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
