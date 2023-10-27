
import React from 'react'
import { Image, Pressable, Text, View } from '../styled'
import { avatar } from '../../../assets'
import { useNavigation } from '@react-navigation/native'


interface ChatPreviewProps {
    avatar: string | null,
    name: string,
    lastMessage: string,
    lastSeen: string,
    newNessageCounter?: number | null
    hasStatus?: boolean,
    isGroup?: boolean
}

const ChatPreview = (prop: ChatPreviewProps) => {
    const navigation = useNavigation()

    const handlePageRoute = (isGroup: boolean | undefined) => {
        if (isGroup) {
            navigation.navigate('GroupChat')
        }
        else {
            navigation.navigate('OneToOneChat')
        }
    }

    return (
        <Pressable onPress={() => handlePageRoute(prop.isGroup)}>
            <View className='w-full h-fit py-2 px-4 flex-row justify-between items-center'>
                <View className='space-x-4 flex-row items-center '>
                    {/*  */}
                    <Pressable className={`${prop.hasStatus && 'border-2 border-primary'} w-12 h-12 rounded-full`}>
                        <Image className='w-full h-full rounded-full' resizeMode='contain' source={{ uri: prop.avatar || avatar }} />
                    </Pressable>
                    <View className='space-y-2'>
                        <Text className='text-lg font-bold capitalize text-[#090909]'>{prop.name}</Text>
                        <Text className='text-xs font-normal text-primaryText '>{prop.lastMessage.length > 45 ? prop.lastMessage.slice(0, 45) + '...' : prop.lastMessage}</Text>
                    </View>
                </View>
                {/*  */}
                <View className='items-end space-y-2' >
                    <View className='items-center justify-center bg-primary rounded-full w-5 h-5'>
                        <Text className='text-white font-semibold text-sm'>
                            {prop.newNessageCounter}+
                        </Text>
                    </View>
                    <Text>
                        {prop.lastSeen}
                    </Text>

                </View>
            </View>
        </Pressable>
    )
}

export default ChatPreview