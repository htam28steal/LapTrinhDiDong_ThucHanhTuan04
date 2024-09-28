import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

export default function Tiki_Ok() {
  const price = 141.800;
  const [quantity, setCountAfterClick] = useState([1]);
  function addProduct() {
    const upTheAmount = quantity.map((ele) => ele + 1);
    setCountAfterClick(upTheAmount);
  }
  function deleteProduct() {
    const downTheAmount = quantity.map((ele) => ele - 1);
    setCountAfterClick(downTheAmount);
  }
  function total(){
    const priceTemp =  quantity*price;
    const formattedNumber = priceTemp.toFixed(3); 
    return formattedNumber;
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewHead}>
        <View style={styles.viewThongTin}>
          <Image
            source={require('./assets/Image/book.png')}
            style={styles.imgBook}
          />
          <View style={styles.viewChuThich}>
            <Text style={styles.viewTitle}>Hán Sở Tranh Hùng</Text>
            <Text style={styles.viewTitle}>Cung cấp bởi Tiki Trading</Text>
            <Text
              style={[
                styles.viewTitle,
                { color: '#EE0D0D' },
                { fontSize: 20 },
              ]}>
              141.800
            </Text>
            <Text>141.800</Text>
            <View style={styles.viewControl}>
              <TouchableOpacity
                style={styles.viewButton}
                onPress={deleteProduct}>
                -
              </TouchableOpacity>
              {quantity.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
              <TouchableOpacity style={styles.viewButton} onPress={addProduct}>
                +
              </TouchableOpacity>
              <TouchableOpacity style={{ color: '#134FAC', fontWeight: 700 }}>
                Mua sau
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 20,
              flexDirection: 'row',
            }}>
            <Text style={styles.viewTitle}>Mã giảm giá đã lưu</Text>
            <Text
              style={{
                marginLeft: 15,
                fontWeight: 700,
                fontSize: 15,
                color: '#134FEC',
              }}>
              Xem tại đây
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '50%',
                height: '100%',
                borderBlockColor: '#808080',
                borderWidth: 1,
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 32,
                  height: 16,
                  backgroundColor: '#F2BD1B',
                }}></View>
              <Text style={styles.viewTitle}>Mã giảm giá</Text>
            </View>
            <View
              style={{
                width: '30%',
                height: '100%',
                backgroundColor: '#0A5EB7',
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{ color: '#fff', fontSize: 15, fontWeight: 700 }}>
                Áp dụng
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewBody}>
        <View
          style={{
            width: '100%',
            height: 51,
            backgroundColor: '#fff',
            marginTop: 10,
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 12, fontWeight: 700 }}>
            Bạn có phiếu quà tặng Tiki/Got it/Urbox?
          </Text>
          <Text style={{ fontSize: 12, fontWeight: 700, color: '#134EFC' }}>
            Nhấp tại đây?
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 51,
            backgroundColor: '#fff',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            marginBottom: 50,
          }}>
          <Text style={{ fontSize: 20, fontWeight: 700 }}>Tạm tính:</Text>
          <Text style={{ fontSize: 20, fontWeight: 700, color: '#EE0D0D' }}>
            {total()}
          </Text>
        </View>
      </View>
      <View style={styles.viewFooter}>
        <View
          style={{
            width: '100%',
            height: 51,
            backgroundColor: '#fff',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 20, fontWeight: 700 }}>Thành tiền:</Text>
          <Text style={{ fontSize: 20, fontWeight: 700, color: '#EE0D0D' }}>
            {total()}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 45,
            backgroundColor: '#E53935',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontWeight: 700,
          }}>
          TIẾN HÀNH ĐẶT HÀNG
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: 360,
    height: 600,
    borderColor: 'black',
    borderWidth: 1,
  },
  viewHead: {
    flex: 3,
    width: '100%',
    flexDirection: 'row',

    padding: 10,
  },
  viewBody: {
    flex: 3,
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
  },
  viewFooter: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 2,
    width: '100%',
    flexDirection: 'row',
 
    padding: 15,
    backgroundColor: '#fff',
  },
  viewThongTin: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
  },
  imgBook: {
    width: 104,
    height: 127,
  },
  viewChuThich: {
    width: '63%',
    height: 127,
    marginLeft: 15,
    rowGap: 5,
  },
  viewControl: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewTitle: {
    fontWeight: 600,
    fontSize: 15,
  },
  viewButton: {
    width: 16,
    height: 16,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 700,
  },
});
