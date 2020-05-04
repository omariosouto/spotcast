import React, { useEffect } from 'react';
import { Text, StyleSheet }  from 'react-native';
import Slider from "react-native-slider";
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeArea } from 'react-native-safe-area-context';
import { Chevron } from '../components/icons/Chevron';


// [Fundo]
const Background = ({ children }) => {
  const insets = useSafeArea();

  return (
    <LinearGradient
          colors={['#464769', '#1B1A1F']}
          style={{
            flex: 1,
            paddingTop: insets.top,
            paddingLeft: insets.left,
            paddingBottom: insets.bottom,
            paddingRight: insets.right, 
          }}>
      {children}
    </LinearGradient>
  );
};
// ./[Fundo]

// [TopBar]
const TopBar = styled.View`
  height: 48px;
  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
  align-items: flex-start;
`;
TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;
TopBar.Right = styled.View`
  flex: 1;
  align-items: flex-end;
  padding-right: 16px;
`;

const TopBarTitle = styled.Text`
  color: white;
  text-transform: uppercase;
  font-size: 12px;
`;

const TopBarSubTitle = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 12px;
`;
// ./[TopBar]


// [ScreenArea]
const ScreenArea = styled.View`
  flex: 1;
  padding: 32px;
`;
// ./[ScreenArea]


// [Player]
const PlayerArea = styled.View`
  flex: 1;  
`;

// ====================================

PlayerArea.SoundImageWrapper = styled.View`
  width: 100%;
  height: 200px;
`;
PlayerArea.SoundImage = styled.Image`
  flex: 1;
`;

// ====================================

// ./[Player]

export const PlayerScreen = () => {
  
  var soundSliderStyles = StyleSheet.create({
    container: {
      height: 30,
    },
    track: {
      height: 2,
      backgroundColor: '#303030',
    },
    thumb: {
      width: 15,
      height: 15,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
    }
  });

  return (
    <Background>
      <TopBar>
        <TopBar.Left>
          <Chevron />
        </TopBar.Left>
        <TopBar.Middle>
          <TopBarTitle>Tocando Podcast</TopBarTitle>
          <TopBarSubTitle>Hipsters Ponto Tech</TopBarSubTitle>
        </TopBar.Middle>
        <TopBar.Right>
          <Text>MENU</Text>
        </TopBar.Right>
      </TopBar>
      <ScreenArea>
        <PlayerArea>
          <PlayerArea.SoundImageWrapper>
            <PlayerArea.SoundImage
              source={{ uri: 'http://placehold.it/750x750', }}            
            />
          </PlayerArea.SoundImageWrapper>

          <Text>Angular vs React - Hipsters #142</Text>
          <Text>Hipsters Ponto Tech</Text>
          <Slider
            style={soundSliderStyles.container}
            trackStyle={soundSliderStyles.track}
            thumbStyle={soundSliderStyles.thumb}
            minimumTrackTintColor='white'
            thumbTouchSize={{width: 50, height: 50}}
          />
          <Text>00:01</Text>
          <Text>52:07</Text>


          <Text>ÍCONES</Text>

        </PlayerArea>  
      </ScreenArea>
    </Background>
  );
};