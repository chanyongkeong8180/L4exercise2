import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

const Exercise = () => {
    return (
        <View>
          <View style={[styles.greenBox]}>
            <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
          </View>

          <View style={styles.greenBox}>
            <Text style={[styles.boxText, styles.title]}>Our People</Text>
          </View>

          <View style={styles.greenBox}>
            <Text style={[styles.boxText, styles.title]}>Our Campus</Text>
          </View>
        </View>
    );
};
export default Exercise;

const styles = StyleSheet.create({
  greenBox: {
    width: 100,
    height: 100,
    marginTop: 30,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black'
  },

  boxText: {
    textAlign: 'center',
    color: 'white'
  },

  title: {
    fontWeight: 'bold'
  }
});
