import { Camera, CameraType, FlashMode } from 'expo-camera';
import React, { useRef, useState } from 'react';
import { Button, Text } from 'react-native';
import { Image, Pressable, TouchableOpacity, View, screenWidth } from '../styled';
import PressableWithRipple from '../PressableWithRipple';
// import { Camera } from '../styled';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function ExpoCamera() {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [cameraType, setCameraType] = useState(CameraType.back)
    const [flashMode, setFlashMode] = useState(FlashMode.off)

    const [photo, setPhoto] = useState<string | undefined>(undefined)


    const cameraRef = useRef<Camera | null>(null)

    const handleCameraAction = async () => {
        const photo = await cameraRef.current?.takePictureAsync()
        setPhoto(photo?.uri);
    };


    const handleCameraPosition = () => {
        setCameraType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }




    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }


    return (
        <View className='relative w-full h-full flex-row flex-1 '>
            <Camera
                ref={cameraRef}
                type={cameraType}
                flashMode={flashMode}
                style={{ width: '100%', height: '100%' }}
            />

            {/* Top Components */}
            <View className='absolute top-5 left-0 right-0'>
                <View className='flex-row items-start justify-between w-full h-fit p-4'>
                    <PressableWithRipple>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </PressableWithRipple>
                    <View className='items-end justify-start space-y-4'>
                        <PressableWithRipple handleOnPress={handleCameraPosition} >
                            <MaterialIcons name="flip-camera-android" size={24} color="white" />
                        </PressableWithRipple>
                        <PressableWithRipple >
                            <Ionicons name="ios-camera-reverse-outline" size={24} color="white" />
                        </PressableWithRipple>
                        <PressableWithRipple >
                            <Ionicons name="ios-camera-reverse-outline" size={24} color="white" />
                        </PressableWithRipple>
                    </View>
                </View>
            </View>
            {/* Bottom Components */}
            <View className='absolute  bottom-5 left-2 h-[90px] justify-center '>
                <TouchableOpacity className='w-14 h-14 rounded-md overflow-hidden' >
                    {photo && <Image source={{ uri: photo }} className='w-full h-full rounded-md ' resizeMode='contain' />}
                </TouchableOpacity>
            </View>

            <View className='absolute  bottom-5 w-full'>
                <Pressable onPress={handleCameraAction} className='mx-auto rounded-full'>
                    <MaterialIcons name="camera" size={90} color="white" />
                </Pressable>

            </View>
        </View >

    );
}

