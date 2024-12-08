import { Colors } from '@/constants/Colors';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={Style.container}>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

const Style = StyleSheet.create({
  container:{
    backgroundColor: Colors.app.secondary,
  }
})