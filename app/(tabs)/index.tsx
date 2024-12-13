import { Colors } from '@/constants/Colors';
import React, { useEffect } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, View, Pressable, useColorScheme} from 'react-native';
import { router } from 'expo-router';


export default function LoginForm() {

  const user = {
    email:"Mohammed",
    password:"1234"
  }
  const colorScheme = useColorScheme();
  const [email, setEmail] = React.useState<string>(user.email)
  const [password, setPassword] = React.useState<string>(user.password)
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false)

  const handleLogin = () => {
    if(email === user.email && password === user.password) setIsLoggedIn(true)
  }

  useEffect(() => {
    if(isLoggedIn)router.replace('/welcomeScrollView')
  }, [isLoggedIn])

  return (
    <View style={{ ...styles.container, backgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background }}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {isLoggedIn 
      ?<Text style={styles.regularText}>You are logged in ! </Text>
      :<>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput 
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType='email-address'
        style={{...styles.input}}
      />
      <TextInput 
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        style={{...styles.input}}
        secureTextEntry
      />
      <Pressable style={{...styles.login}} onPress={handleLogin}>
        <Text style={{...styles.text}}>Login</Text>
      </Pressable>
      </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    flexDirection: 'column',
    gap:20
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input:{
    borderRadius:5,
    padding:10,
    backgroundColor:"#EDEFEE",
  },
  login:{
    backgroundColor:Colors.app.secondary,
    borderRadius:5
  },
  text:{
    padding:10,
    fontSize:20,
    color: '#EDEFEE',
    textAlign: 'center'
  }
});

