import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Cities from './src/Cities/Cities'
import AddCity from './src/AddCity/AddCity'
import Countries from './src/Countries/Countries';
import AddCountry from './src/AddCountry/AddCountry';

const Tab = createBottomTabNavigator();

export default class App extends Component {
  state = {
    cities: [],
    countries: []
  }

  addCity = (city) => {
    const cities = this.state.cities
    cities.push(city)
    this.setState({ cities })
  }
  addCountry = (country) => {
    const countries = this.state.countries
    countries.push(country)
    this.setState({ countries })
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="CitiesNav"  initialParams={{cities: this.state.cities, addCity: this.addCity}} component={Cities} />
          <Tab.Screen name="AddCity" initialParams={{cities: this.state.cities, addCity: this.addCity}} component={AddCity} />
          <Tab.Screen name="CountriesNav" initialParams={{countries: this.state.countries, addCountry: this.addCountry}} component={Countries} />
          <Tab.Screen name="AddCountry" initialParams={{countries: this.state.countries, addCountry: this.addCountry}} component={AddCountry} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}