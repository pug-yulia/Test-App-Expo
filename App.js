import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, FlatList, ImageBackground, Keyboard } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonPressed = () => {
    setData([...data, { key: text }]);
    setText('');
    Keyboard.dismiss(); 
  };

  const image = { uri: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA2L2pvYjE1NzJkZXNpZ24tcmVtaXgtMDFhLWQuanBn.jpg' };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.titletext}>Great App</Text>
        <Image
          style={{ width: 200, height: 150 }}
          source={{
            uri: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
          }}
        />
        <TextInput
          style={{ width: 240, borderColor: 'gray', borderWidth: 1, margin: 15, height: 40, backgroundColor: 'white' }}
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Button
          onPress={buttonPressed}
          title="Press me"
        />
        <FlatList
          data={data}
          renderItem={({ item }) => <Text style={styles.flatListText}>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titletext: {
    fontSize: 28,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 120,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  flatListText: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
});
