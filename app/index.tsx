import Colors from "@/shared/Colors";
import { Dimensions, Image, Platform, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 30:40,
        justifyContent: 'center'
      }}
    >

      <Image source={require('./../assets/images/agent_2.png')}
      style={{
        width: Dimensions.get('screen').width * 0.85,
        height: 280,
        resizeMode: 'contain',
        marginBottom: 20,
        alignSelf: 'center'
      }}
      />
      <View>
        <Text style={{
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 10,
          color: Colors.PRIMARY
        }}>Welcome to AI Pocket Agent</Text>

        <Text style={{
          fontSize: 16,
          textAlign: 'center',
          color: Colors.GRAY
        }}>Your Ultimate AI Personal Agent to make life {'\n'} easer.
          Try it Today, Completely Free !
        </Text>
      </View>

      <TouchableOpacity style={{
          width: '85%',
          alignSelf: 'center',
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 12,
          marginTop: 45,
          
        }}>
        <Text style={{
          color: Colors.WHITE,
          textAlign: 'center',
          fontSize: 16
        }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
