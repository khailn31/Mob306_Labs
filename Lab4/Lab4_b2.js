import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import { Animatable } from 'react-native-animatable';
const Lab4_b2 = () => {
    const handlePress = () => {
      
      };

 const handlePress1 = () => {
    alert('TouchableWithoutFeedback was pressed!');
  };

  const [text, setText] = useState('Chào React Native!');
  const [animationType, setAnimationType] = useState('fadeIn'); // Hiệu ứng mặc định là fadeIn

  const changeTextAndAnimate = () => {
    setText('Xin chào bạn đã thay đổi văn bản!');
    setAnimationType('bounceIn'); // Chuyển đổi hiệu ứng khi thay đổi văn bản
  };
  return (
    <View>
     <TouchableHighlight
        onPress={handlePress}
        underlayColor="red"
     
      >
        <View >
          <Text>Press Me (TouchableHighlight)</Text>
        </View>
      </TouchableHighlight>
     

      <TouchableNativeFeedback
          onPress={handlePress}
          background={TouchableNativeFeedback.Ripple('green', true)}
        >
          <View>
            <Text >Press Me (TouchableNativeFeedback)</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={handlePress1}>
        <View >
          <Text >Press Me (TouchableWithoutFeedback)</Text>
        </View>
      </TouchableWithoutFeedback>
      {/* <TouchableOpacity onPress={this.handleAnimate}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Tap to Animate</Text>
        </TouchableOpacity> */}
        {/* <Animatable.View
          animation={this.state.animated ? 'bounceIn' : null}
          duration={1000}
          style={{
            width: 200,
            height: 200,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}
     >
          <Text style={{ color: 'white', fontSize: 24 }}>Animated View</Text>
              </Animatable.View> */}
    </View>
  );
};

export default Lab4_b2;
