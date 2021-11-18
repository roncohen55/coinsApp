import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';


export default function App() {

  const [shkel,setshkal]=useState(0);
  const[result,setresult]=useState(0);
  const dollar = () => {
    let dollar1=shkel*3.09;
    dollar1= dollar1.toFixed();
    setresult(dollar1);

  }

  const euro = () => {
    let euro1=shkel*3.4;
    euro1= euro1.toFixed();
    setresult(euro1);

  }
  const torkidollar = () => {
    let torki1=shkel*10.09;
    torki1= torki1.toFixed();
    setresult(torki1);

  }
  

  return (
    <View style={styles.container}>
      <Text>Shkal convert to:</Text>
      <TextInput
         style={styles.txtinput}
        value={shkel}
        onChangeText={text => setshkal(text)}
      />
      <Text>{result}</Text>
      <TouchableOpacity onPress={dollar}>
        <Text>USA-$</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={euro} ><Text>
        Eroupe-Euro</Text></TouchableOpacity>
      <TouchableOpacity onPress={torkidollar}>
        <Text>torkish- dollar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  txtinput:{width:'20%',backgroundColor:'#fff'},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'skyblue'
  },
});
