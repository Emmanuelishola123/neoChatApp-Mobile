
import React, { useState } from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from '../../components/styled'
import { BGImage, Logo } from '../../../assets'
import InputField from '../../components/Form/InputField'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    return (
        <View className='flex-1 items-center justify-start'>
            <Image source={BGImage} resizeMode='cover' className='h-96 w-full ' />
            <View className='w-full h-full -mt-44 p-6 bg-white rounded-tl-[75px] space-y-6 items-center justify-start'>
                <Image source={Logo} className='w-16 h-16' resizeMode='contain' />
                <Text className='text-primaryText text-xl font-bold'>
                    Welcome Back
                </Text>

                <View>
                    <InputField iconName='person' placeholder='Enter Email' setValue={setEmail} value={email} />
                    <InputField iconName='lock' placeholder='Enter Password' setValue={setPassword} value={password} isPassword={true} />
                    <TouchableOpacity className='m-0 p-0'>
                        <View className='w-full flex-row items-center justify-center rounded-lg py-2 mt-2 bg-primary '>
                            <Text className='font-semibold text-xl text-white'>
                                Sign In
                            </Text>
                        </View>
                    </TouchableOpacity>
                <View className='w-full flex-row items-center justify-end space-x-2 mt-1'>
                    <Text className='text-sm font-semibold text-primaryText'>
                        Forget Password
                    </Text>
                    <Pressable onPress={() => navigation.navigate('ForgetPassword')}>
                        <Text className='text-primary text-sm font-semibold '>
                            Reset Here
                        </Text>
                    </Pressable>
                </View>
                </View>

                <View className='flex-row items-center justify-center space-x-2'>
                    <Text className='text-sm font-semibold text-primaryText'>
                        Doesn't have an account?
                    </Text>
                    <Pressable onPress={() => navigation.navigate('Register')}>
                        <Text className='text-primary text-sm font-semibold '>
                            Create here
                        </Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default LoginScreen