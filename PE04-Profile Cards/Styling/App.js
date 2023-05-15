import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.flexContainer, {justifyContent: 'flex-start'}]}>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage}
                    source={require('./assets/user.png')}/>
            </View>
            <View>
              <Text style={styles.cardName}>
                John Doe
              </Text>
            </View>
            <View style={styles.cardOccupationContainer}>
              <Text style={styles.cardOccupation}>
                React Native Developer
              </Text>
            </View>
            <View>
              <Text style={styles.cardDescription}>
                John is a really great JavaScript developer. He
                loves using JS to build React Native applications
                for iOS and Android.
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.flexContainer, {justifyContent: 'center'}]}>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage}
                    source={require('./assets/user.png')}/>
            </View>
            <View>
              <Text style={styles.cardName}>
                John Doe
              </Text>
            </View>
            <View style={styles.cardOccupationContainer}>
              <Text style={styles.cardOccupation}>
                React Native Developer
              </Text>
            </View>
            <View>
              <Text style={styles.cardDescription}>
                John is a really great JavaScript developer. He
                loves using JS to build React Native applications
                for iOS and Android.
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.flexContainer, {justifyContent: 'flex-end'}]}>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage}
                    source={require('./assets/user.png')}/>
            </View>
            <View>
              <Text style={styles.cardName}>
                John Doe
              </Text>
            </View>
            <View style={styles.cardOccupationContainer}>
              <Text style={styles.cardOccupation}>
                React Native Developer
              </Text>
            </View>
            <View>
              <Text style={styles.cardDescription}>
                John is a really great JavaScript developer. He
                loves using JS to build React Native applications
                for iOS and Android.
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.flexContainer, {justifyContent: 'space-between'}]}>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage}
                    source={require('./assets/user.png')}/>
            </View>
            <View>
              <Text style={styles.cardName}>
                John Doe
              </Text>
            </View>
            <View style={styles.cardOccupationContainer}>
              <Text style={styles.cardOccupation}>
                React Native Developer
              </Text>
            </View>
            <View>
              <Text style={styles.cardDescription}>
                John is a really great JavaScript developer. He
                loves using JS to build React Native applications
                for iOS and Android.
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    alignItems: 'center', //new
    boarderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 200,
    height: 300,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center', //new
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 30, //new
    paddingTop: 15, //new
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1
      },
      android: {
        borderWidth: 3,
        brderColor: 'black',
        elevation: 15
      }
    })
  },
  cardImage: {
    width: 20,
    height: 20
  },
  cardName: {
    color: 'white',
    marginTop: 30
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
  },
  cardDescription: {
    marginTop: 10,
    marginBottom: 10
  },
  cardDescription: {
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
  },
  flexContainer: {
    width: 10,
    height: 10,
    borderWidth: 1,
    margin: 5,
    flexDirection: 'row'
  }

});