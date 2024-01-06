
import React, { FC } from 'react'
import { Text, View } from '../../styled'
import { profileData } from '../type'

const HeliumProfileLayout: FC<{ data: profileData }> = ({ data }) => {
  return (
    <View className=''>
      <Text>
        HELIUM - My Profile ? {data?.isMine}
      </Text>
    </View>
  )
}

export default HeliumProfileLayout