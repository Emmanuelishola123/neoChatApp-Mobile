import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { RootNavigator } from './src/navigations';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }} >
            <Provider store={store}>
                <SafeAreaProvider style={{ flex: 1 }}>
                    <BottomSheetModalProvider>
                        <NavigationContainer>
                            <RootNavigator />
                        </NavigationContainer>
                    </BottomSheetModalProvider>
                </SafeAreaProvider>
            </Provider>
        </GestureHandlerRootView>
    );
}



{/* <SafeAreaProvider style={{ flex: 1 }}>
<BottomSheetModalProvider>
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
</BottomSheetModalProvider>
</SafeAreaProvider> */}