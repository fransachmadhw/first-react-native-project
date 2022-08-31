import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
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
            // width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: SIZES.extraLarge
        }}>
            <View style={{ width: 80, height: 80, ...SHADOWS.dark, backgroundColor: COLORS.white, borderRadius: 100 }}>
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
                    fontSize: SIZES.large,
                    color: COLORS.primary
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
            <View style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: SIZES.font
            }}>
                <TouchableOpacity style={{
                    width: '100%',
                    // ...SHADOWS.dark,
                    // backgroundColor: COLORS.secondary,
                    // borderRadius: SIZES.font,
                    padding: SIZES.font,
                    marginBottom: SIZES.font,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    }}
                    activeOpacity={0.5}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 120 }}>
                        <View style={{ width: 30, height: 30 }}>
                            <Image
                                source={assets.eth}
                                resizeMode='cover'
                                style={{ width: '100%', height: '100%' }}
                            />
                        </View>
                        <Text style={{
                            color: COLORS.gray,
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.medium,
                            // backgroundColor: COLORS.primary,
                            textAlign: 'left',
                            width: 70
                        }}>My Bids</Text>
                    </View>
                    <View style={{ width: 20, height: 20 }}>
                        <Image
                            source={assets.left}
                            resizeMode='cover'
                            style={{ width: '100%', height: '100%', transform: [{ scaleX: -1 }] }}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: '100%',
                    // ...SHADOWS.dark,
                    // backgroundColor: COLORS.secondary,
                    // borderRadius: SIZES.font,
                    padding: SIZES.font,
                    marginBottom: SIZES.font,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}
                activeOpacity={0.5}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 120 }}>
                        <View style={{ width: 30, height: 30 }}>
                            <Image
                                source={assets.cc}
                                resizeMode='cover'
                                style={{ width: '100%', height: '100%' }}
                            />
                        </View>
                        <Text style={{
                            color: COLORS.gray,
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.medium,
                            textAlign: 'left',
                            width: 70
                        }}>Payment</Text>
                    </View>
                    <View style={{ width: 20, height: 20 }}>
                        <Image
                            source={assets.left}
                            resizeMode='cover'
                            style={{ width: '100%', height: '100%', transform: [{ scaleX: -1 }] }}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: '100%',
                    // ...SHADOWS.dark,
                    // backgroundColor: COLORS.secondary,
                    // borderRadius: SIZES.font,
                    padding: SIZES.font,
                    marginBottom: SIZES.font,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}
                activeOpacity={0.5}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 120 }}>
                        <View style={{ width: 30, height: 30 }}>
                            <Image
                                source={assets.profile}
                                resizeMode='cover'
                                style={{ width: '100%', height: '100%' }}
                            />
                        </View>
                        <Text style={{
                            color: COLORS.gray,
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.medium,
                            textAlign: 'left',
                            width: 70
                        }}>Profile</Text>
                    </View>
                    <View style={{ width: 20, height: 20 }}>
                        <Image
                            source={assets.left}
                            resizeMode='cover'
                            style={{ width: '100%', height: '100%', transform: [{ scaleX: -1 }] }}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: '100%',
                    // ...SHADOWS.dark,
                    // backgroundColor: COLORS.secondary,
                    // borderRadius: SIZES.font,
                    padding: SIZES.font,
                    marginBottom: SIZES.font,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}
                activeOpacity={0.5}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 120 }}>
                        <View style={{ width: 30, height: 30 }}>
                            <Image
                                source={assets.cog}
                                resizeMode='cover'
                                style={{ width: '100%', height: '100%' }}
                            />
                        </View>
                        <Text style={{
                            color: COLORS.gray,
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.medium,
                            textAlign: 'left',
                            width: 70
                        }}>Settings</Text>
                    </View>
                    <View style={{ width: 20, height: 20 }}>
                        <Image
                            source={assets.left}
                            resizeMode='cover'
                            style={{ width: '100%', height: '100%', transform: [{ scaleX: -1 }] }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity style={{
            width: '100%',
            position: 'absolute',
            bottom: 10,
            paddingVertical: SIZES.font,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255,255,255,0.5)',
            zIndex: 1
        }}
        activeOpacity={0.5}>
        {/* <ReactButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} /> */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 20, height: 20, marginRight: 5 }}>
                    <Image
                        source={assets.logOut}
                        resizeMode='cover'
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
                <Text style={{
                    color: COLORS.gray,
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small,
                    // backgroundColor: COLORS.primary,
                    textAlign: 'left',
                    width: 70
                }}>Sign Out</Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Account