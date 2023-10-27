import React from "react";
import {
    // BottomTabScreenProps,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
// import Icons from "@expo/vector-icons/MaterialIcons";
// import { CompositeScreenProps } from "@react-navigation/native";
// import { RootStackScreenProps } from "./RootNavigator";
import { CustomBottomTabs } from "../components";
import { CallScreen, ChatScreen, GroupScreen, StatusScreen } from "../screens";

export type TabsStackParamList = {
    Chats: undefined;
    Groups: undefined;
    Calls: undefined;
    Status: undefined;
};

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

// export type TabsStackScreenProps<T extends keyof TabsStackParamList> =
//     CompositeScreenProps<
//         BottomTabScreenProps<TabsStackParamList, T>,
//         RootStackScreenProps<"TabsStack">
//     >;




const ChatTabNavigator = () => {
    return (
        <TabsStack.Navigator
            initialRouteName="Chats"
            screenOptions={{
                headerShown: false,
            }}
            tabBar={(props) => <CustomBottomTabs {...props} />}
        >
            <TabsStack.Screen
                name="Chats"
                component={ChatScreen}
            />
            <TabsStack.Screen
                name="Groups"
                component={GroupScreen}
            />
            <TabsStack.Screen
                name="Status"
                component={StatusScreen}
            />
            <TabsStack.Screen
                name="Calls"
                component={CallScreen}
            />
        </TabsStack.Navigator>
    );
};


export default ChatTabNavigator