import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FocusedStatusBar />
        <HomeHeader />
        <NFTCard />
    </SafeAreaView>
  )
}

export default Home;
