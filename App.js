import React, { useState } from 'react';
import AppLoading from 'expo-app-loading'; // actually depreacted
import * as SplashScreen from 'expo-splash-screen'; // should change to this later
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';
import { Text, Image } from 'react-native';

const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font));
const loadImages = (images) => images.map(image => {
  if (typeof image === "string") {
    return Image.prefetch(image);
  } else {
    return Asset.loadAsync(image);
  }
})

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true); // called when AppLoading is finished
  const startLoading = async() => {
    const fonts = loadFonts([Ionicons.font]);
    const images = loadImages([require('./image.png'), 'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg'])
    await Promise.all([...fonts, ...images]);
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }

  return (
    <Text>Done Loading!</Text>
  );
}