import { Colors } from '@/constants/Colors';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={Style.container}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        Little Lemon
      </Text>
    </View>
  );
}


const Style = StyleSheet.create({
  container:{
    backgroundColor: Colors.app.secondary,
  }
})