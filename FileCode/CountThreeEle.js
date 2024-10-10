import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Counter() {

  const [count, setCountAfterClick] = useState([1,2,3]);

  function clickCount() {
    const newCount = count.map(item=>(item+1)) // tăng cả 3 phần tử của mảng mỗi một phần tử lên 1 đơn vị
    setCountAfterClick(newCount); // set lại giá trị mới cho mảng 'count' và in ra 
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={clickCount} style={styles.buttonClick}>
        <Text style={styles.buttonText}>Count Number</Text>
      </TouchableOpacity>

      <View>
           {count.map((item, index) => (
          <Text key={index} style={styles.countText}>
            {item} 
          </Text>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 360,
    height: 640,
  },
  buttonClick: {
    width: '100%',
    height: 40,
    backgroundColor: '#007be5',
    color: '#fff',
    fontSize: 20,
    fontWeight: 700,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
   countText: {
    fontSize: 18,
    marginVertical: 5,
  },
});
