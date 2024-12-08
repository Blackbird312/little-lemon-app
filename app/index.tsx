import FlatListMenu from "@/components/FlatListMenu";
import LoginForm from "@/app/LoginForm";
import SectionListMenu from "@/app/SectionListMenu";
import WelcomeScrollView from "@/components/WelcomeScrollView";
import { Colors } from "@/constants/Colors";
import { ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function Index() {

  const colorScheme = useColorScheme();

  return (
    <View style={{...Styles.container,backgroundColor: colorScheme === 'dark' ? Colors.dark.background : Colors.light.background}}>
      <WelcomeScrollView/>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  title : {
    fontSize: 30, 
    textAlign: 'center', 
    padding:50, 
    color:"#fff"
  },
  content:{
    textAlign: 'center', 
    padding:20, 
    color:"#fff", 
    fontSize:20
  }
});
