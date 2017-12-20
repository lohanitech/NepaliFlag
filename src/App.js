/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import flag from './assets/flag-of-nepal.png';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Nepal
        </Text>
          <Image resizeMode="cover" style={styles.map} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1200px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"}} />
        <View style={styles.twoColumn}>
          <View style={[styles.borderedView,styles.columnOne, {backgroundColor: '#ccc'}]}>
            <Image style={styles.flag} source={flag} />
          </View>
          <View style={[styles.borderedView, styles.columnTwo]}>
            <Text style={styles.description}>
              The national flag of Nepal (Nepali: नेपालको झण्डा) is the world's only non-quadrilateral national flag. The flag is a simplified combination of two single pennons, the vexillological word for a pennant.
            </Text>

          </View>
        </View>
        <Text style={styles.footerText}>Made by <Text style={[styles.description,styles.name]}>Damodar Lohani</Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#fcfcfc',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center'
  },
  flag: {
    marginTop: 40,
    alignSelf: 'center'

  },
  map: {
    width: '100%',
    height: 200,
  },
  twoColumn: {
    flexDirection: 'row',
    
  },
  borderedView: {
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  columnOne: {
    width: "50%",
    borderRightWidth: 0
  },
  columnTwo: {
    width: "50%"
  },
  description: {
    fontSize: 18,
    padding: 20
  },
  footerText: {
    alignSelf: "flex-end",
    marginTop: 'auto',
    marginRight: 20,
    marginBottom: 20,
  },
  name: {
    fontWeight: 'bold',
  }
  
});
