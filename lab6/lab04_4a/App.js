import React from 'react';
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

const screenWidth = Dimensions.get('window').width;
// onst screenWidth = Dimensions.get('window').height;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Cá nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
    Image: require('./img/ca_nau_lau.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    Image: require('./img/ga_bo_toi.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Xe cần cẩu đa dạng',
    shop: 'Shop Thế giới đồ chơi',
    Image: require('./img/xa_can_cau.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    Image: require('./img/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Lãnh đạo đơn giản',
    shop: 'Shop Minh Long Book',
    Image: require('./img/lanh_dao_gian_don.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Hiểu lòng trẻ con',
    shop: 'Shop Minh Long Book',
    Image: require('./img/hieu_long_con_tre.png'),
  },
];

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

const App = () => {
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
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} shop={item.shop} image={item.Image} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Image
          source={require('./img/Group11.png')} />
    </SafeAreaView>

    
  );
};

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

export default App;
