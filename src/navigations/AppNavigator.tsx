import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ForgetPasswordScreen, LoginScreen, RegisterScreen, ResetPasswordScreen, MediaStatusScreen, TextStatusScreen, ProfileScreen, OneToOneChat, GroupChat, AudioCallScreen, VideoCallScreen } from '../screens'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      {/* Auth Page */}
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='ResetPassword' component={ResetPasswordScreen} />
      <Stack.Screen name='ForgetPassword' component={ForgetPasswordScreen} />
      {/* Chat Screens */}
      <Stack.Screen name='OneToOneChat' component={OneToOneChat} />
      <Stack.Screen name='GroupChat' component={GroupChat} />
      {/* Call Screens */}
      <Stack.Screen name='AudioCall' component={AudioCallScreen} options={{ presentation: 'containedTransparentModal' }} />
      <Stack.Screen name='VideoCall' component={VideoCallScreen} options={{ presentation: 'formSheet' }} />
      {/* Status Screen */}
      <Stack.Screen name='NewTextStatus' component={TextStatusScreen} />
      <Stack.Screen name='NewMediaStatus' component={MediaStatusScreen} />
      {/* User Screen */}
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator