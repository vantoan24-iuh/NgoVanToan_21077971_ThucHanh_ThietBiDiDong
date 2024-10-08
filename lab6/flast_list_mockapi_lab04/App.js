import React,{ useState,useEffect } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  del,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';

const Item = ({ title, shop, image }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.groupTT_Shop}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.shop}>{shop}</Text>
      </View>
      <TouchableOpacity style={styles.chat}>Chat</TouchableOpacity>
    </View>
  );
};
export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://66fa557bafc569e13a9b479a.mockapi.io/api/shop/BanHang')
      .then((response) => response.json()) // Parse JSON data from the response
      .then((json) => {
        setData(json); // Set the fetched data to state
        setLoading(false); // Stop loading indicator
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require('./img/ant-design_arrow-left-outlined.png')}
          style={styles.lui}
        />
        <TouchableOpacity style={{fontWeight:'bold', fontSize:17,color:'#ffff'}}>Chat</TouchableOpacity>
        <Image
          source={require('./img/bi_cart-check.png')}
          style={styles.gioHang}
        />
      </View>
      <View style={styles.hepl}>
        <Text>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!
        </Text>
      </View>
      <FlatList
          data={data}
          renderItem={({item}) => <Item name={item.title} image={item.Image} shop={item.shop} />}
          keyExtractor={item => item.id}
        />
        <Image
          source={require('./img/Group11.png')} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'#e5e5e5'
  },
  view: {
    height: 42,
    lineHeight: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1BA9FF',
    top: 10,
  },
  lui: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
  gioHang: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  hepl: {
    alignItems: 'center',
    top: 20,
    fontSize: 18,
    marginBottom: 20,
    marginLeft:5
  },
  itemContainer: {
    backgroundColor: 'white',
    paddingTop:10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    top:20,
  },
  title: {
    fontSize: 13,
  },
  shop: {
    fontSize: 11,
    color: 'red',
    fontWeight: 500,
  },
   image: {
    width: 74,
    height: 74,
  },
  groupTT_Shop:{
    marginLeft:5
  },
  chat:{
    width:80,
    color:'#FFFF',
    backgroundColor:'#F31111',
    height:38,
    lineHeight:38,
    alignItems:'center',
    fontWeight:'bold'
  }
});
