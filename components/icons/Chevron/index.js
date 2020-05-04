import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export const Chevron = () => {
  return (
    <View style={{ width: 20, height: 20 }}>
      <Svg style={{ flex: 1 }} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M13.825 7.15833L10 10.975L6.175 7.15833L5 8.33333L10 13.3333L15 8.33333L13.825 7.15833Z" fill="white"/>
      </Svg>
    </View>
  );
}