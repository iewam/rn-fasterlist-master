/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
    Button,
} from 'react-native';




export default class App extends React.Component {
    render() {

      const {navigation} = this.props;

      return (
          <View style={styles.container}>
            <Text>This is the App Page</Text>

            <Button
                title={"FlatListScreen"}
                onPress={()=>{
                  navigation.navigate('FlatListScreen');
                }}
            />
            <Button
              title={"SectionListScreen"}
              onPress={()=>{
                navigation.navigate('SectionListScreen');
              }}
            />
          </View>
      );
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

