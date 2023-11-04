import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { statusProps } from "../components/Status/type";

export type RootStackParamList = {
    ChatsTab: BottomTabScreenProps<ChatStackParamLists>
    Login: undefined,
    Register: undefined,
    ResetPassword: undefined,
    ForgetPassword: undefined,
    OneToOneChat: undefined,
    GroupChat: undefined,
    AudioCall: undefined,
    VideoCall: undefined,
    NewTextStatus: undefined,
    NewMediaStatus: undefined,
    StatusDisplayScreen: statusProps | statusProps[],
    Profile: { isMine?: boolean | undefined, userId?: string | undefined },
    Camera: { from: string, to?: string }
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

export type ChatStackParamLists = {
    Chats: {
        avatar: string | null,
        name: string,
        lastMessage: string,
        lastSeen: string,
        newNessageCounter?: number | null
        hasStatus?: boolean,
        isGroup?: boolean
    };
    Groups: undefined;
    Calls: undefined;
    Status: undefined;
};

export type ChatStackScreenProps<T extends keyof ChatStackParamLists> =
    CompositeScreenProps<
        BottomTabScreenProps<ChatStackParamLists, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;






// export type ChatStackScreenProps<T extends keyof ChatStackParamLists > =
//     CompositeScreenProps<
//         BottomTabScreenProps<ChatStackParamLists, T>,
//         RootStackScreenProps<''>
//     >;


