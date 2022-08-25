import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';
import React from 'react';

import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants';
import { CircleButton, ReactButton, FocusedStatusBar, DetailsDesc, DetailsBid, ArrowButton } from '../components';
import { SubInfo, EthPrice, EndDate, NFTTitle } from '../components/SubInfo';

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: '100%', height: 373 }}>
    <Image
      source={data.image}
      resizeMode='cover'
      style={{ width: '100%', height: '100%' }}
    />

    <ArrowButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      // imgUrl={assets.heart}
      // handlePress={() => navigation.goBack()}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />

      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 1
       }}>
        <ReactButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 5 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <View style={{
              position: 'absolute',
              left: 0,
              top: 350,
              width: '100%',
              height: 48,
              // backgroundColor: '#4287f5'
            }}>
              <SubInfo photo={data.photo} />
              <EndDate />
            </View>
            <View style={{ padding: SIZES.font, marginTop: SIZES.extraLarge }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text style={{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary
                 }}>
                  {data.bids.length > 1 ? 'Current Bids' : 'Current Bid'}
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}

export default Details;