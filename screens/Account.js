import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import React from 'react'

import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants';
import { CircleButton, ReactButton, FocusedStatusBar, DetailsDesc, DetailsBid, ArrowButton } from '../components';

const Account = () => {
  return (
    <SafeAreaView>
        <FocusedStatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
            // translucent={true}
        />
        <View style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{ width: 80, height: 80 }}>
                <Image
                  source={assets.person01}
                  resizeMode='cover'
                  style={{ width: '100%', height: '100%' }}
                />
            </View>
            <View style={{
                marginVertical: 15,
                marginLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.large
                }}>Clara Augusta</Text>
                <View style={{ width: 20, height: 20, marginLeft: 1 }}>
                    <Image
                        source={assets.badge}
                        resizeMode='cover'
                        style={{
                          width: '100%', height: '100%',
                        }}
                    />
                </View>
            </View>
            <Text>Account Screen</Text>
            <Text>Account Screen</Text>
        </View>
    </SafeAreaView>
  )
}

export default Account