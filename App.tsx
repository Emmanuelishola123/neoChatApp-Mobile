import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { RootNavigator } from './src/navigations';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <SafeAreaProvider style={{ flex: 1 }}>
            {/* <BottomSheetModalProvider> */}
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            {/* </BottomSheetModalProvider> */}
        </SafeAreaProvider>
    );
}



{/* <SafeAreaProvider style={{ flex: 1 }}>
<BottomSheetModalProvider>
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
</BottomSheetModalProvider>
</SafeAreaProvider> */}