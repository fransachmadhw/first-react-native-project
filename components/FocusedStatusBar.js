import { StatusBar, View, Text } from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import React from 'react'

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
  // return (
  //   <View>
  //     <Text style={{ backgroundColor: props.background }}>FocusedStatusBar</Text>
  //   </View>
  // )

}

export default FocusedStatusBar