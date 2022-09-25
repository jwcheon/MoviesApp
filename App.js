import React, { useState } from 'react';
import AppLoading from 'expo-app-loading'; // actually depreacted
import * as SplashScreen from 'expo-splash-screen'; // should change to this later
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';
import { Text, Image } from 'react-native';

export default function App() {
  const [assets] = useAssets([require('./image.png')]);
  const [loaded] = useFonts(Ionicons.font); // this cannot do prefetch (fetching img from servers)

  if (!assets || !loaded) {
    return <AppLoading />;
  }

  return (
    <Text>Done Loading!</Text>
  );
}