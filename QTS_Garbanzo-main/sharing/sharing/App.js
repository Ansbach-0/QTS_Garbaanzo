import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  

  const [selectedImage, setSelectedImage] = React.useState(null);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  const openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={ 'https://media.tenor.com/Bm_vPPuBl24AAAAC/thanks-thumbs-up.gif' } style={styles.thumbnail} />
        <Text style={styles.instructions}>
        لِلْعَلَم Parabens sua imagem foi uploadada!!!!!
        </Text>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Compartilha essa imagem? سُعودِةِ الأبْي، وجيشِ يَعْرُبِ يَحوطُهُ النبَّيْ يُبَارِكُ الوَطَنْ
</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.postimg.cc/RCwrSKyT/ezgif-com-gif-maker.gif' }} style={styles.thumbnail} />

      <Text style={styles.instructions}>
        Use o botão abaixo para enviar uma imagem
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>EScoLha uma foto...</Text>
              <Image source={{ uri: 'https://i.postimg.cc/KzjmRjX5/ezgif-com-gif-maker-1.gif' }} style={styles.thumbnail} />
      </TouchableOpacity>

    <Text style={styles.row}>
      <Text style={styles.column}>
        <Image source={{ uri: 'https://media.tenor.com/yFi06hL-W1IAAAAM/smiley.gif' }} style={styles.logoz} />
        <Image source={{ uri: 'https://media.tenor.com/yFi06hL-W1IAAAAM/smiley.gif' }} style={styles.logoz} />
        <Image source={{ uri: 'https://media.tenor.com/yFi06hL-W1IAAAAM/smiley.gif' }} style={styles.logoz} />
        <Image source={{ uri: 'https://media.tenor.com/yFi06hL-W1IAAAAM/smiley.gif' }} style={styles.logoz} />
        <Image source={{ uri: 'https://media.tenor.com/yFi06hL-W1IAAAAM/smiley.gif' }} style={styles.logoz} />
        <Image source={{ uri: 'https://media.tenor.com/yFi06hL-W1IAAAAM/smiley.gif' }} style={styles.logoz} />
      </Text>
    </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor: 'grey',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
    logoz: {
    width: 100,
    height: 150,
  },
    


});
