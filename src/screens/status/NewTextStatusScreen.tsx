
import { StatusBar } from 'expo-status-bar'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { textStatusScreenColor } from '../../utils/data'
import { Pressable, Text, View } from '../../components/styled'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { ColorPicker } from 'react-native-color-picker'




const NewTextStatusScreen = () => {
  const [bgColor, setbgColor] = useState(textStatusScreenColor[1])
  const [duration, setDuration] = useState(24)
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)


  const colorPickerRef = useRef(null)

  const handleColorSelected = () => {
    console.log()
  }

  const navigation = useNavigation()

  console.log({ bgColor })
  return (
    <SafeAreaView style={{ backgroundColor: bgColor, opacity: 0.7, flex: 1, position: 'relative' }}>
      <StatusBar style='dark' />
      <View style={{ backgroundColor: bgColor }} className='w-full flex-1 z-10'>
        <View className='flex-row items-center justify-between px-4 py-2 w-full'>
          <Pressable
            onPress={() => navigation.goBack()}
            android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
            className='w-8 h-8 items-center justify-center overflow-hidden rounded-full'>
            <FontAwesome5 name="times" size={24} color="#f9f9f9" />
          </Pressable>
          <View className='items-center flex-row space-x-2'>
            <Pressable
              onPress={() => setIsColorPickerOpen(!isColorPickerOpen)}
              android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
              className='w-8 h-8 items-center justify-center overflow-hidden rounded-full'>
              <Ionicons name="color-palette-sharp" size={24} color="#f9f9f9" />
            </Pressable>
          </View>

        </View>

        <ColorPicker
          ref={colorPickerRef}
          onColorSelected={handleColorSelected}
        />

        <Text >
          Text Screen
        </Text>
      </View>
      {/* FOOTER */}
      <View className='flex-row items-center justify-between px-4 py-2 w-full'>
        <Pressable
          android_ripple={{ color: '#056526', borderless: false, foreground: true }}
          className='w-6 h-6 items-center justify-center p-1 rounded-full border border-primary'>
          <Text className='font-semibold text-sm text-white'>
            {duration}
          </Text>
        </Pressable>
        <Pressable
          className='overflow-hidden w-12 h-12 rounded-full items-center justify-center bg-primary'
          android_ripple={{ color: '#056526', borderless: false, foreground: true }}
        >
          <FontAwesome name="send" size={24} color="#f9f9f9" />
        </Pressable>


      </View>

    </SafeAreaView>
  )
}

export default NewTextStatusScreen