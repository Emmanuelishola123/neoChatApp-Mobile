import React from "react";
// import { NavigatorScreenParams } from "@react-navigation/native";
import {
    // NativeStackScreenProps,
    createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { AppNavigator, ChatTabNavigator } from ".";
// import { TabsStackParamList } from "./ChatTabNavigator";


const RootStack = createNativeStackNavigator();

// export type RootStackParamList = {
//     TabsStack: NavigatorScreenParams<TabsStackParamList>;
//     Details: {
//         id: string;
//         imageUrl?: string;
//     };
//     LogIn: {}
// };

// const RootStack = createNativeStackNavigator<RootStackParamList>();

// export type RootStackScreenProps<T extends keyof RootStackParamList> =
//     NativeStackScreenProps<RootStackParamList, T>;



const RootNavigator = () => {
    return (
        <RootStack.Navigator initialRouteName="App"
            screenOptions={{ headerShown: false }}>
            <RootStack.Screen
                name="ChatTabs"
                component={ChatTabNavigator}
            />
            <RootStack.Screen
                name="App"
                component={AppNavigator}
            />
        </RootStack.Navigator>
    );
};

export default RootNavigator;