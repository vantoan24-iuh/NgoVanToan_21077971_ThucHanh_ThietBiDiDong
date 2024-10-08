import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  del,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;

export default function lab03_screen01() {
  const starsCount = 5;
  const stars = [];
  for (let i = 0; i < starsCount; i++) {
    stars.push(
      <Image
        key={i}
        style={styles.imgStar}
        source={require('./img/star.png')}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Image style={styles.imgPhone} source={require('./img/vs_blue.png')} />
      <Text style={styles.namePhone}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={styles.danhGia}>
        {stars}
        <Text
          style={{
            fontSize: 15,
            fontWeight: 400,
            fontFamily: 'arial',
            paddingLeft: 13,
          }}>
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View style={styles.donGia}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'arial',
            fontWeight: 700,
          }}>
          1.790.000 đ
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontFamily: 'arial',
            fontWeight: 700,
            color: '#00000094',
          }}>
          <del>1.790.000 đ</del>
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: -70,
          padding: 10,
        }}>
        <Text
          style={{
            color: '#fa0000',
            fontWeight: 700,
            fontFamily: 'arial',
            fontSize: 12,
            paddingRight: 10,
          }}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image
          style={{ width: 20, height: 20 }}
          source={require('./img/icon.png')}
        />
      </View>
      <TouchableOpacity style={styles.chonMau}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 40 }}>
          4 MÀU-CHỌN MÀU
        </Text>
        <Image
          style={{ width: 11.5, height: 14, fontWeight: 'bold' }}
          source={require('./img/daulon.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.click}>CHỌN MUA</TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 640,
  },
  imgPhone: {
    // width: 301,
    // height: 361,
    top: -2,
    left: 29,
  },
  namePhone: {
    fontFamily: 'Arial',
    fontWeight: 400,
    fontSize: 15,
    height: 18,
    lineHeight: 17.05,
    marginLeft: 22,
  },
  danhGia: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  imgStar: {
    width: 23,
    height: 25,
    marginRight: 3,
  },
  donGia: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    padding: 10,
    marginLeft:-20
  },
  chonMau: {
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 700,
    borderRadius: 10,
    border: 'solid #c4c4c4',
    top:10
  },
  click: {
    height: 44,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: '#ca1536',
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 90,
  },
});
