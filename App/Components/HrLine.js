/** render a Horizental line */ 

import React from 'react'
import { View } from 'react-native'

export default function HrLine() {
  return (
    <View
      style={{
        borderBottomColor: '#e3e3e3',
        borderBottomWidth: 1,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
      }}
    />
  )
}
