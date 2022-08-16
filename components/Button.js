import { TouchableOpacity, View, Text, Image } from 'react-native'
import React from 'react'

import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

export const CircleButton = (props) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: COLORS.white,
      width: 40, height: 40,
      position: "absolute",
      ...props,
      borderRadius: SIZES.extraLarge,
      alignItems: 'center',
      justifyContent: 'center',
      ...SHADOWS.light}}
      onPress={props.handlePress}
    >
      <Image
        source={props.imgUrl}
        resizeMode='contain'
        style={{
          width: 24,
          height: 24
        }}
      />
    </TouchableOpacity>
  )
};

export const ReactButton = () => {
  return (
    <View>
      <Text>CircleButton</Text>
    </View>
  )
};
