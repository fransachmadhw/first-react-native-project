import { View, Text, Image, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      paddingVertical: SIZES.font,
      paddingHorizontal: SIZES.extraLarge,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Image
          source={assets.logo}
          resizeMode='contain'
          style={{ width: 90, height: 25 }}
        />
        <Pressable
          onPress={() => navigation.navigate('Account', {})}
        >
          <View style={{ width: 45, height: 45 }}>
            <Image
              source={assets.person01}
              resizeMode='cover'
              style={{ width: '100%', height: '100%' }}
            />
            <Image
              source={assets.badge}
              resizeMode='cover'
              style={{
                position: 'absolute',
                width: 15, height: 15,
                bottom: 0, right: 0
              }}
            />
          </View>
        </Pressable>
      </View>

      <View style={{
        marginVertical: SIZES.font
      }}>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.white
        }}>
          Hello, Clara 👋
        </Text>
        <Text style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.large,
          color: COLORS.white,
          marginTop: SIZES.base / 2
        }}>
          Lets find a masterpiece NFT
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={{
          width: '100%',
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2
         }}>
          <Image
            source={assets.search}
            resizeMode='contain'
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder='Search NFT'
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader