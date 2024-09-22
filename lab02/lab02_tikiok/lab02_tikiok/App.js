import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  del,
  a,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

export default function week4_lab02_TiKiOK() {
  const [count, setCount] = useState(0);
  const pricePerItem = 141800;

  function tang() {
    setCount(count + 1);
  }
  function giam() {
    setCount(count > 0 ? count - 1 : 0); // Đảm bảo giá trị không âm
  }
  const totalPrice = count * pricePerItem;
  return (
    <View style={styles.container}>
      <View style={styles.fragabove}>
        <View style={styles.img}>
          <Image
            source={require('./img/book.png')}
            style={{ width: 104, height: 130 }}
          />
          <View style={styles.text}>
            <Text style={styles.text1}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.text2}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.text3}>141.800 đ</Text>
            <Text style={styles.text4}>
              <del>141.800 đ</del>
            </Text>
            <View style={styles.tangGiam}>
              <button
                className="button"
                onClick={giam}
                style={{ backgroundColor: '#c4c4c4' }}>
                -
              </button>
              <span className="count">{count}</span>
              <button
                className="button"
                onClick={tang}
                style={{ backgroundColor: '#c4c4c4' }}>
                +
              </button>
              <View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#134FEC',
                      fontWeight: 'bold',
                    }}>
                    Mua hàng
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 30, paddingLeft: 13 }}>
          <Text
            style={{
              fontSize: 12,
              color: '#011627',
              fontWeight: 700,
              marginRight: 14,
            }}>
            Mã giảm giá đã lưu{' '}
          </Text>
          <View>
            {' '}
            <TouchableOpacity style={styles.xem}>Xem tại đây</TouchableOpacity>
          </View>
        </View>
        <View style={styles.GG}>
          <View style={styles.khungGG}>
            <button
              style={{
                width: 32,
                height: 16,
                background: '#F2DD1B',
                border: 'none',
                marginRight: 14,
              }}></button>
            <a
              href="#"
              style={{
                color: 'black',
                textDecoration: 'none',
                fontSize: 15,
                fontWeight: 700,
              }}>
              {' '}
              Mã giảm giá
            </a>
          </View>
          <View>
            <TouchableOpacity style={styles.btnAD}>Áp dụng</TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.nhaptaiday}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: '#011627',
            marginRight: 10,
          }}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <View>
          {' '}
          <TouchableOpacity style={styles.xem}>Nhập tại đây?</TouchableOpacity>
        </View>
      </View>
      <View style={styles.tamtinh}>
        <Text style={{ fontSize: 18, fontWeight: 700 }}>Tạm tính</Text>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 18,
            alignItems: 'center',
            color: '#EE0D0D',
          }}>
          {totalPrice.toLocaleString('vi-VN')}đ
        </Text>
      </View>
      <View style={styles.tinhthanhtien}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{ fontSize: 18, fontWeight: 700, color: '#808080' }}>
            Thành tiền
          </Text>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 18,
              alignItems: 'center',
              color: '#EE0D0D',
            }}>
          {totalPrice.toLocaleString('vi-VN')}đ
          </Text>
        </View>
        <View style={{ padding: 14 }}>
          <TouchableOpacity style={styles.thanhTien}>
            Tiến hành đặt hàng
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C4C4C4',
    width: 360,
    height: 640,
  },
  fragabove: {
    width: 360,
    height: 283,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: '#ffffff',
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 13,
    top: 14,
  },
  text: {
    left: -40,
  },
  text1: {
    fontSize: 12,
    fontWeight: 700,
    height: 14,
    lineHeight: 14.06,
    alignItems: 'center',
  },
  text2: {
    fontSize: 12,
    fontWeight: 700,
    height: 14,
    lineHeight: 14.06,
    alignItems: 'center',
    top: 12,
  },
  text3: {
    fontSize: 18,
    fontWeight: 700,
    height: 21,
    lineHeight: 21.06,
    alignItems: 'center',
    color: '#EE0D0D',
    top: 20,
  },
  text4: {
    fontSize: 13,
    fontWeight: 700,
    height: 16,
    lineHeight: 16.06,
    alignItems: 'center',
    color: '#808080',
    top: 25,
  },
  tangGiam: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    top: 40,
    left: -10,
    alignItems: 'center',
  },
  xem: { color: 'blue', fontSize: 15, fontWeight: 700 },
  GG: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 10,
    marginLeft: 15,
  },
  khungGG: {
    flexDirection: 'row',
    width: 208,
    height: 45,
    border: 'solid #E53935',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 27,
  },
  btnAD: {
    width: 99,
    height: 45,
    background: '#0a5eb7',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    border: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  nhaptaiday: {
    flexDirection: 'row',
    width: 360,
    height: 51,
    lineHeight: 51,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    top: 18,
  },
  tamtinh: {
    flexDirection: 'row',
    width: 360,
    height: 51,
    lineHeight: 51,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    top: 30,
    padding: 10,
  },
  tinhthanhtien: {
    width: 360,
    height: 120,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    top: 140,
  },
  thanhTien: {
    width: 331,
    height: 45,
    backgroundColor: 'red',
    color: 'white',
    fontSize: 20,
    border: 'none',
    alignItems: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
