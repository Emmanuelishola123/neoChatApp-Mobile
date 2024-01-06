
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { profileData, profileLayoutType } from '../../components/User/type'
import { UserProfile } from '../../components'
import { useRoute } from '@react-navigation/native'
import { ChatStackScreenProps } from '../../navigations/types'

const ProfileScreen = () => {
  const [profileLayout, setProfileLayout] = useState<profileLayoutType>('hydrogen')
  const [userData, setUserData] = useState<profileData>({})

  const route = useRoute()
  const id = route.params


  useEffect(() => {
    const fetchUser = () => {
      setUserData({data: {}, isMine: id === 1})
    }
  
    return 
  }, [id])
  

  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1 }}>
      <StatusBar style='dark' />

      <UserProfile profileLayout={profileLayout} userData={userData} />

    </SafeAreaView>
  )
}

export default ProfileScreen