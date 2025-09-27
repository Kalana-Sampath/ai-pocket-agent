import Colors from '@/shared/Colors'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function CreateAgentBanner() {
  return (
    <View style={{
        backgroundColor:Colors.PRIMARY,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 12
    }}>
      <Image source={require('./../../assets/images/agents/agentGroup.png')}
      style={{
        width:200,
        height:120,
        resizeMode:'contain'
      }}
      />
      <View style={{
        padding: 10,
        width: 180

      }}>
        <Text style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: Colors.WHITE
        }}>Create Your Own Agent </Text>

        <TouchableOpacity style={{
            backgroundColor: Colors.WHITE,
            padding: 7,
            borderRadius: 5,
            marginRight: 16,
            marginTop: 10
        }}>
            <Text style={{
                color: Colors.PRIMARY,
                textAlign: 'center'
            }}>Create Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}