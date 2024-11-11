import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ marginTop: 30, textAlign: 'center', width: '80%' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          width: '80%',
          backgroundColor: '#f7e5e4',
          alignContent: 'center',
          padding: 20,
          borderRadius: 30,
          alignItems: 'center'
        }}
      >
        <Image
          style={{ width: 200, height: 200 }}
          source={require('../img/bifour_-removebg-preview.png')}
        />
      </View>
      <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>POWER BIKE</Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>SHOP</Text>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 15,
          backgroundColor: 'purple',
          borderRadius: 10,
          width: '80%'
        }}
        onPress={() => navigation.navigate('BikeList')}
      >
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
