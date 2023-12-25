
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from '../../components/styled'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { avatar } from '../../../assets'
import { ChatPreview } from '../../components'
import { avatars } from '../../utils/avatar'
import { ChatStackScreenProps } from '../../navigations/types'
import SwipeableChatPreview from '../../components/Chat/SwipeableChatPreview'


const PersonalChatScreen = ({ navigation }: ChatStackScreenProps<'Chats'>) => {

  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9' }}>
      <StatusBar style='dark' />

      {/* Header  */}
      <View className='flex-row items-center justify-between w-full h-fit py-2 px-4 bg-[#f9f9f9]' >
        <Text className='font-bold text-2xl' >neoChatApp</Text>
        <TouchableOpacity className=' rounded-full border-2 border-primary' onPress={() => navigation.navigate('Profile', { isMine: true, userId: '123' })}>
          <Image source={{ uri: avatar }} resizeMode='contain' className='w-9 h-9 rounded-full' />
        </TouchableOpacity>
      </View>
      {/* Chats List */}
      <ScrollView className='py-2 bg-[#f1f1f1] w-full h-full divide-y-2 divide-double divide-black'>
        <ChatPreview
          avatar={avatars[7].url}
          lastMessage='Thank you...'
          lastSeen='2 hours'
          name='Dev Ishola'
          hasStatus={false}
          isGroup={false}
          newNessageCounter={9}
        />
        <ChatPreview
          avatar={avatars[9].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[2].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[3].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[13].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={9}
        />
        <ChatPreview
          avatar={avatars[7].url}
          lastMessage='Thank you'
          lastSeen='2 hours'
          name='Dev Ishola'
          hasStatus={false}
          isGroup={false}
          newNessageCounter={9}
        />
        <ChatPreview
          avatar={avatars[9].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[2].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[3].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[13].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={9}
        />
        <ChatPreview
          avatar={avatars[7].url}
          lastMessage='Thank you'
          lastSeen='2 hours'
          name='Dev Ishola'
          hasStatus={false}
          isGroup={false}
          newNessageCounter={9}
        />
        <ChatPreview
          avatar={avatars[9].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[2].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[3].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
      </ScrollView>

    </SafeAreaView>

  )
}

export default PersonalChatScreen