
import React, { FC } from 'react'
import { Text, View } from '../../styled'
import { profileData } from '../type'

const HydrogenProfileLayout: FC<{data: profileData}> = ({data}) => {
  return (
    <View className=''>
      <Text>
        HYDROGEN - My Profile ? {data?.isMine}
      </Text>
    </View>
  )
}

export default HydrogenProfileLayout