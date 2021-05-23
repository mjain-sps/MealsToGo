import React from "react";
import { Card, Title } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import RatingSvg from "../../../Assets/RatingStar.js";

//Defining all the syled components
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`;
const RestaurantCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 5px;
`;
const RestaurantContent = styled.View`
  padding-left: ${(props) => props.theme.space[3]};
`;
const RestaurantTitle = styled(Title)`
  color: ${(props) => props.theme.colors.ui.primary};
  text-align: left;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.body};
`;
const RestaurantAddress = styled.Text`
  color: ${(props) => props.theme.colors.ui.secondary};
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RatingStar = styled.View`
  padding-top: ${(props) => props.theme.space[0]};
  padding-bottom: ${(props) => props.theme.space[0]};
  flex-direction: row;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Haldirams",
    address = "Crazy Mall, Sector 12, Faridabad. Haryana",
    rating = 5,
    photo = [
      "https://c.ndtvimg.com/2019-01/nqbcj8k_pav-bhaji_625x300_25_January_19.jpg",
    ],
  } = restaurant;
  //create new Array based on Number of rating in the API
  const ratingArray = Array.from(new Array(rating));
  return (
    <RestaurantCard elevation={5}>
      <Card.Content>
        <RestaurantCover source={{ uri: photo[0] }} />
      </Card.Content>
      <RestaurantContent>
        <RestaurantTitle>{name}</RestaurantTitle>
        <RatingStar>
          {ratingArray.map(() => (
            <SvgXml xml={RatingSvg} height={15} width={15} />
          ))}
        </RatingStar>
        <RestaurantAddress>{address}</RestaurantAddress>
      </RestaurantContent>
    </RestaurantCard>
  );
};
