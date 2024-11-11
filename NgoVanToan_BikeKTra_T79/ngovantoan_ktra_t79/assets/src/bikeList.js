import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes } from '../redux/bikeredux';

export default function BikeList({ navigation }) {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.bikes);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.category === selectedCategory));
    }
  }, [selectedCategory, data]);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
          The World's Best Bike
        </Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('Home')}>
          <IconAntDesign name="arrowleft" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <FlatList
          data={[{ category: 'All' }, ...Array.from(new Set(data.map((item) => item.category))).map((category) => ({ category }))]}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: selectedCategory === item.category ? 'red' : 'purple',
                borderRadius: 10,
                width: 90,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}
              onPress={() => setSelectedCategory(item.category)}
            >
              <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>{item.category}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={{ paddingBottom: 130 }}>
        {status === 'loading' ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: '#fff7f0',
                  borderRadius: 10,
                  width: 150,
                  height: 200,
                  alignItems: 'center',
                  margin: 10,
                }}
              >
                <View style={{ marginTop: 5, padding: 10, flexDirection: 'row' }}>
                  <IconAntDesign name="hearto" size={20} color="black" />
                  <Image source={{ uri: item.imageBike }} style={{ width: 100, height: 100 }} />
                </View>
                <Text style={{ marginTop: 5, color: 'black', fontSize: 15, fontWeight: 'bold' }}>{item.nameBike}</Text>
                <Text style={{ marginTop: 5, color: 'black', fontSize: 15, fontWeight: 'bold' }}><Text style={{color:"orange"}}>$</Text>{item.priceBike}</Text>
              </TouchableOpacity>
            )}
            numColumns={2}
          />
        )}
      </View>

      
    </SafeAreaView>
  );
}
