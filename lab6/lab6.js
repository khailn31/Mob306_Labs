
import { StatusBar, } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const lab6 = () => {
  
    const [state, setState] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Màu nền mặc định
  
    const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
  
      // Cập nhật màu nền dựa trên trạng thái của switch
      const newBackgroundColor = isEnabled ? '#ffffff' : '#00ff00'; // Màu nền mới
      setBackgroundColor(newBackgroundColor);
    }
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Picker
          selectedValue={state}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => { setState(itemValue), alert(`ban da chon: ${itemValue}`) }
  
          }>
          <Picker.Item label="Flutter" value="flut" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Java" value="jav" />
          <Picker.Item label="Python" value="pypy" />
        </Picker>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <StatusBar style="inverted" />
        <Text style={styles.text} >
          <Text style={styles.text1}>
          T
          </Text>
          <Text style={styles.text2}>
          răm năm trong cõi người ta,
          Chữ tài chữ mệnh khéo là ghét nhau.
          Trải qua một cuộc bể dâu,</Text>
         <Text style={styles.text3}>
          Những điều trông thấy mà đau đớn lòng.
          Lạ gì bỉ sắc tư phong,
          Trời xanh quen thói má hồng đánh ghen.
          Cảo thơm lần giở trước đèn,
          Phong tình cổ lục còn truyền sử xanh.
          Rằng năm <Text style={styles.text}>Gia Tĩnh triều Minh</Text> ,
          </Text>
          <Text style={styles.text4}>
          Bốn phương phẳng lặng, hai kinh vững vàng.
          Có nhà viên ngoại họ Vương,
          Gia tư nghĩ cũng thường thường bực trung.
          Một trai con thứ rốt lòng,
          Vương Quan là chữ, nối dòng nho gia.
          Đầu lòng hai ả tố nga,
          Thúy Kiều là chị, em là Thúy Vân.
          </Text>
        </Text>
      </View>
    );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:50
  },
  text:{
    color:'#41cdf4'
  },
  text1:{
    color:'red',
    fontSize:20
  },
  text2:{
    fontWeight:'bold',
    color:'black'
  },
  text3:{
    color:'#37859b',
    fontStyle:'italic'
  },
  text4:{
    textShadowColor:'red',
    textShadowOffset:{width:2,height:2},
    textShadowRadius:5
  }
});

export default lab6