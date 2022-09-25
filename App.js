import React, { useState } from 'react';
import AppLoading from 'expo-app-loading'; // actually depreacted
import * as SplashScreen from 'expo-splash-screen'; // should change to this later
import { Text } from 'react-native';

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true); // called when AppLoading is finished
  const startLoading = async() => {
    // fetch sth from server/db before loading
    await new Promise(resolve => setTimeout(resolve, 10000)); // just random 10 secs to make the AppLoading stay
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