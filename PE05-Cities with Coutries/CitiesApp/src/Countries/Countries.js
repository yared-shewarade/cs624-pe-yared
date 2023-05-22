// Listing 6.7 Cities route (functionality)
// Listing 6.8 Cities route (styling)
import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

export default class Countries extends React.Component {
  static navigationOptions = {
    title: 'Countries',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400'
    }
  }
  navigate = (item) => {
    this.props.navigation.navigate('Country', { country: item })
  }
  render() {
    const {  countries  } = this.props.route.params;
    return (
      <ScrollView  contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
          {
            !countries.length && <CenterMessage message='No saved cities!' />
          }
          {
            countries.map((item, index) => (
              <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
                <View style={styles.countryContainer}>
                  <Text style={styles.country}>{item.country}</Text>
                  <Text style={styles.currency}>{item.currency}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  country: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)'
  },  
})