import { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

export default function Screen2_c() {
  
  const [inputValue, setInputValue] = useState(['']);
  const [passwordShow, setPassword] = useState(['']);
  function click() {
    setPassword(inputValue)
  }
  return (
    <View style={styles.container}>
      <Svg style={styles.gradient}>
        <Defs>
          <RadialGradient
            id="grad1"
            cx="50%"
            cy="50%"
            r="100%"
            fx="50%"
            fy="50%">
            <Stop offset="30%" stopColor="#3B3B98" stopOpacity="1" />{' '}
            {/* Màu tại tâm */}
            <Stop offset="90%" stopColor="#fff" stopOpacity="1" /> 
          </RadialGradient>
        </Defs>
        {/* Vẽ hình chữ nhật và áp dụng gradient */}
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad1)" />
      </Svg>
      <View style={styles.content}>
        <View style={styles.frameTille}>
          <Text style={styles.txtTile}>PASSWORD GENERATOR</Text>
        </View>
        <View style={styles.frameShowPW}>
          <TextInput style={styles.ipShowPW} value={passwordShow}></TextInput>
        </View>
        <View style={styles.control}>
          <View style={styles.contentInControl}>
            <View style={[styles.frameContent, { width: 150 }]}>
              <Text style={[styles.txtTile, { fontSize: 16 }]}>
                Password length
              </Text>
            </View>
            <TextInput
              style={[
                styles.ipShowPW,
                {
                  width: 100,
                  height: 33,
                  backgroundColor: '#fff',
                  color: '#000',
                },
              ]}
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
          </View>
          <View style={styles.contentInControl}>
            <View style={styles.FrameContent}>
              <Text style={[styles.txtTile, { fontSize: 16 }]}>
                Include lower case letters
              </Text>
            </View>
            <TextInput
              style={[
                styles.ipShowPW,
                { width: 33, height: 33, backgroundColor: '#fff' },
              ]}></TextInput>
          </View>
          <View style={styles.contentInControl}>
            <View style={styles.FrameContent}>
              <Text style={[styles.txtTile, { fontSize: 16 }]}>
                Include upcase letters
              </Text>
            </View>
            <TextInput
              style={[
                styles.ipShowPW,
                { width: 33, height: 33, backgroundColor: '#fff' },
              ]}></TextInput>
          </View>
          <View style={styles.contentInControl}>
            <View style={styles.FrameContent}>
              <Text style={[styles.txtTile, { fontSize: 16 }]}>
                Include number
              </Text>
            </View>

            <TextInput
              style={[
                styles.ipShowPW,
                { width: 33, height: 33, backgroundColor: '#fff' },
              ]}></TextInput>
          </View>
          <View style={styles.contentInControl}>
            <View style={styles.FrameContent}>
              <Text style={[styles.txtTile, { fontSize: 16 }]}>
                Include special symbol
              </Text>
            </View>

            <TextInput
              style={[
                styles.ipShowPW,
                { width: 33, height: 33, backgroundColor: '#fff' },
              ]}></TextInput>
          </View>
        </View>

        <View style={styles.frameButton}>
          <TouchableOpacity style={styles.buttonGen} onPress={click}>
            GENERATOR PASSWORD
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 360,
    height: 600,
    padding: 25,
    borderColor: 'black',
    borderWidth: 1,
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#23235B',
    borderRadius: 10,
    justifyContent: 'center',
  },
  frameTille: {
    display: 'flex',
    width: 181,
    height: 64,
    alignItems: 'center',
    marginLeft: 30,
  },
  txtTile: {
    fontSize: 25,
    fontWeight: 700,
    color: '#fff',
    alignItems: 'center',
  },
  frameShowPW: {
    width: '100%',
    height: 55,
    marginTop: 40,
  },
  ipShowPW: {
    width: '100%',
    height: 55,
    backgroundColor: '#151537',
    color: '#fff',
    fontSize: 18,
    fontWeight: 700,
  },
  control: {
    width: '100%',
    height: 'auto',
    marginTop: 10,
  },
  contentInControl: {
    width: '100%',
    height: 33,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  frameContent: {
    width: 200,
  },
  frameButton: {
    display: 'flex',
    width: 270,
    height: 55,
    marginTop: 10,
  },
  buttonGen: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 700,
    color: '#fff',
    backgroundColor: '#3B3B98',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
});
