import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import { useFonts } from "expo-font";

const recommend = () => {
  const [fontsLoaded] = useFonts({
    "CharmanSerif": require("@/assets/fonts/CharmanSerif-Black.otf"),
    "NotoSans": require("@/assets/fonts/NotoSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
}
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="arrow-back-circle-outline" size={40} color="#BFBFBF"/>
      <Text style={styles.text}>Recommended Portfolio</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 25,
    },
    text:{
        marginTop: 16,
        fontSize: 20,
        marginLeft: 26,
        color: 'white',
        fontFamily: "CharmanSerif-regular",
    },
    icon: {
        marginLeft: 16,
        marginTop: 16,
    }
  });
   

export default recommend

