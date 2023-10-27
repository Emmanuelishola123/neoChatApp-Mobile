import React, { useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from '../../components/styled'
import { avatar } from '../../../assets'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';


const OneToOneChat = () => {

  const [message, setMessage] = useState('')


  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1 }}>
      <StatusBar style='dark' />

      {/* Header  */}
      <View className='flex-row items-center justify-between w-full h-14 p-2 bg-[#f9f9f9]' >
        {/* Avatar */}
        <View className='flex-row space-x-2 items-center'>
          <Ionicons name="ios-arrow-back-outline" size={24} color="#090909" />
          <TouchableOpacity className=' rounded-full border-2 border-primary' onPress={() => navigation.navigate('Profile')}>
            <Image source={{ uri: avatar }} resizeMode='contain' className='w-9 h-9 rounded-full' />
          </TouchableOpacity>
          <View className='space-y-2'>
            <Text className='text-lg font-bold capitalize text-[#090909]'>Emmanuel Ishola</Text>
            <Text className='text-xs font-normal text-primaryText '>Online</Text>
          </View>
        </View>
        {/* Menu and Calls Icons */}
        <View className='flex-row items-center space-x-1'>
          <Pressable onPress={() => navigation.navigate('AudioCall')} className='w-9 h-9 items-center justify-center p-1 rounded-full' android_ripple={{ color: '#d1d5db', borderless: true, foreground: true, radius: 22 }} >
            <Ionicons name="md-call" size={24} color="#374151" />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('VideoCall')} className='w-9 h-9 items-center justify-center p-1 rounded-full' android_ripple={{ color: '#d1d5db', borderless: true, foreground: true, radius: 22 }} >
            <Ionicons name="ios-videocam" size={24} color="#374151" />
          </Pressable>
          <Pressable className='w-9 h-9 items-center justify-center p-1 rounded-full' android_ripple={{ color: '#d1d5db', borderless: true, foreground: true, radius: 22 }} >
            <Entypo name='dots-three-vertical' color={'#374151'} size={24} />
          </Pressable>
        </View>


      </View>

      {/* Chat Field */}
      <View className='flex-1 w-full bg-gray-100'>
        <ScrollView>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
          <Text>Chats </Text>
        </ScrollView>
      </View>


      {/* Footer */}
      <View className='w-full h-fit space-x-1 p-2 flex-row justify-between items-center bg-[#f9f9f9]'>
        <View className='flex-1 flex-row items-center justify-between px-1 rounded-md h-full bg-gray-100 '>
          <Pressable
            className='w-8 h-8 overflow-hidden  rounded-md items-center justify-center bg-transparent'
            android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
          >
            <Entypo name="emoji-flirt" size={18} color="#4b5563" />
          </Pressable>

          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder={'Message'}
            className='flex-1 py-2  text-primaryText '
          />
          <View className='items-center flex-row space-x-1'>
            <Pressable
              className='w-8 h-8 overflow-hidden  rounded-md items-center justify-center bg-transparent'
              android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
            >
              <Entypo name="attachment" size={18} color="#4b5563" />
            </Pressable>
            <Pressable
              className='w-8 h-8 overflow-hidden  rounded-md items-center justify-center bg-transparent'
              android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
            >
              <Entypo name="camera" size={18} color="#4b5563" />
            </Pressable>
          </View>
        </View>
        <Pressable
          className='w-10 h-10 overflow-hidden rounded-md items-center justify-center bg-primary'
          android_ripple={{ color: '#056526', borderless: false, foreground: true }}
        >
          <MaterialIcons name="keyboard-voice" size={24} color="#f9f9f9" />
        </Pressable>
      </View>

    </SafeAreaView >
  )
}

export default OneToOneChat