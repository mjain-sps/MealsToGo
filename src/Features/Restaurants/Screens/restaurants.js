import React from "react";
import { Searchbar } from "react-native-paper";
import { View, StatusBar } from "react-native";
import styled from "styled-components/native";
//importing Componenets
import { RestaurantInfoCard } from "../Components/restaurant-info-card";

//Defining Styled Components
const RestaurantScreen = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
   {
    ${StatusBar.currentHeight} && margin-top:${StatusBar.currentHeight}px
  }
`;
const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
export const RestaurantScreens = () => (
  <RestaurantScreen>
    <SearchBarContainer>
      <Searchbar placeholder="search" />
    </SearchBarContainer>

    <View>
      <RestaurantInfoCard />
    </View>
  </RestaurantScreen>
);
