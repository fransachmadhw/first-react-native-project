import { View, Text, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, ReactButton } from './Button';
import { SubInfo, EthPrice, EndDate, NFTTitle } from './SubInfo';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark,
      // width: "100%",
      height: 400
    }}>
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode='cover'
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />

      </View>
      <View style={{
        position: 'absolute',
        left: 0,
        bottom: 130,
        width: '100%',
        height: 48,
        // backgroundColor: '#4287f5'
      }}>
          <SubInfo photo={data.photo} />
          <EndDate />
      </View>
      {/* <SubInfo
        people={data.bids}
      /> */}

      <View style={{
        width: "100%",
        padding: SIZES.font,
        marginTop: SIZES.large
      }}>
          <NFTTitle
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.font}
          />

          <View style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <EthPrice price={data.price} />
            <ReactButton
              minWidth={120}
              fontSize={SIZES.font}
              handlePress={() => navigation.navigate('Details', { data })}
            />
          </View>
      </View>
    </View>
  )
}

export default NFTCard