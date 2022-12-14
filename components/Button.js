import { TouchableOpacity, View, Text, Image } from 'react-native'
import React from 'react'

import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants';

export const CircleButton = (props) => {
  const [clicked, setClicked] = React.useState(false)

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
      onPress={() => setClicked(e => !e)}
      activeOpacity={0.5}
    >
      <Image
        source={!clicked ? assets.heartLine : assets.heartSolid}
        resizeMode='contain'
        style={{
          width: 24,
          height: 24
        }}
      />
    </TouchableOpacity>
  )
};

export const ArrowButton = (props) => {
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

export const ReactButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.extraLarge,
      padding: SIZES.small,
      minWidth: minWidth,
      ...props,}}
      onPress={handlePress}
    >
      <Text style={{
        color: COLORS.white,
        fontFamily: FONTS.semiBold,
        fontSize: fontSize,
        textAlign: 'center'
       }}>Place a bid</Text>
    </TouchableOpacity>
  )
};
