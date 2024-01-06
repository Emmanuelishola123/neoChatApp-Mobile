
import React, { FC } from 'react'
import { Text, View } from '../../styled'
import { profileData } from '../type'

const LithiumProfileLayout: FC<{ data: profileData }> = ({ data }) => {
  return (
    <View className=''>
      <Text>
        LITHIUM - My Profile ? {data?.isMine}
      </Text>
    </View>
  )
}

export default LithiumProfileLayout