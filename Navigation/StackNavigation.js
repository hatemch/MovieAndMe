// Navigation/StackNavigation.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import Search from '../Components/Search';
import FilmDetail from '../Components/FilmDetail';
import Favorites from '../Components/Favorites';
import News from '../Components/News';
import Avatar from '../Components/Avatar';
import AvatarProfile from '../Components/AvatarProfile';
import BgTracking from '../Components/BgTracking';
import MapPosition from '../Components/MapPosition';
import GeoLocalisation from '../Components/GeoLocalisation';

const SearchStackNavigator = createStackNavigator();

const SearchStackNavigation = () => {
  return (
    <SearchStackNavigator.Navigator>
      <SearchStackNavigator.Screen
        name="Search"
        component={Search}
        options={{ title: 'Rechercher' }}
      />
      <SearchStackNavigator.Screen
        name="FilmDetail"
        component={FilmDetail}
      />
    </SearchStackNavigator.Navigator>
  )
}
export { SearchStackNavigation }; // Stack-Navigator for Screen 1 Tab

const FavoritesStackNavigator = createStackNavigator();

const FavoritesStackNavigation = () => {
  return (
    <FavoritesStackNavigator.Navigator>
      <FavoritesStackNavigator.Screen
        name="Favoris"
        component={Favorites}
      />
      <FavoritesStackNavigator.Screen
        name="AvatarProfile"
        component={AvatarProfile}
        options={{ title: 'Paramétre' }}

      />
      <FavoritesStackNavigator.Screen
        name="Localisation"
        component={BgTracking}
      />
      <FavoritesStackNavigator.Screen
        name="Position"
        component={MapPosition}
      />
      <FavoritesStackNavigator.Screen
        name="Avatar"
        component={Avatar}
      />
      <FavoritesStackNavigator.Screen
        name="FilmDetail"
        component={FilmDetail}
      />
    </FavoritesStackNavigator.Navigator>
  )
}
export { FavoritesStackNavigation }; // Stack-Navigator for Screen 2 Tab

const NewsStackNavigator = createStackNavigator();

const NewsStackNavigation = () => {
  return (
    <NewsStackNavigator.Navigator>
      <NewsStackNavigator.Screen
        name="Films Récents"
        component={News}
      />
      <NewsStackNavigator.Screen
        name="FilmDetail"
        component={FilmDetail}
      />
    </NewsStackNavigator.Navigator>
  )
}
export { NewsStackNavigation }; // Stack-Navigator for Screen 3 Tab

const LocalisationStackNavigator = createStackNavigator();

const LocalisationStackNavigation = () => {
  return (
    <LocalisationStackNavigator.Navigator>
      <LocalisationStackNavigator.Screen
        name="Options"
        component={GeoLocalisation}
      />
      <LocalisationStackNavigator.Screen
        name="Localisation"
        component={BgTracking}
      />
      <LocalisationStackNavigator.Screen
        name="Position"
        component={MapPosition}
      />
    </LocalisationStackNavigator.Navigator>
  )
}
export { LocalisationStackNavigation }; // Stack-Navigator for Screen 3 Tab
