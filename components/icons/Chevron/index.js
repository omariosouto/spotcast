import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ChevronIcon = ({ ...props }) => {
  return (
    <Svg
      style={{ width: 20, height: 20 }}
      { ...props }
      viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M13.825 7.15833L10 10.975L6.175 7.15833L5 8.33333L10 13.3333L15 8.33333L13.825 7.15833Z" fill="white"/>
    </Svg>
  );
}