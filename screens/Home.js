import { View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
  const [nftData, setNftData] = React.useState(NFTData);

  const handleSearch = value => {
    if(!value.length) {
      return setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) => item.name.toLowerCase().startsWith(value.toLowerCase()));

    if(filteredData.length) {
      setNftData(filteredData);
    }

    else {
      setNftData(NFTData);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar
          barStyle='light-content'
          background='transparent'
        />
        <View style={{ flex: 1 }}>
          <View style={{ zIndex: 0 }}>
            <FlatList
              data={nftData}
              renderItem={({ item }) => <NFTCard data={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            />
          </View>

          <View style={{
            position: 'absolute',
            top: 0, bottom: 0, left: 0, right: 0,
            zIndex: -1
          }}>
            <View style={{ height: "50%", backgroundColor: COLORS.primary }} />
            <View style={{ flex: 1, backgroundColor: COLORS.white }} />
          </View>
        </View>
    </SafeAreaView>
  )
}

export default Home;
