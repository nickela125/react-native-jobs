import React, { useState, useEffect, useCallback} from 'react';
import { Stack } from "expo-router";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        Font.loadAsync({
            DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
            DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
            DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
        })
        .then(() => setFontsLoaded(true))
        .then(async() => await SplashScreen.hideAsync())
        .catch(console.error);
      }, []);

    if(fontsLoaded){
        return <Stack />;
        // return <Stack onLayout={onLayoutRootView} />;
    }
    return null;
}

export default Layout;