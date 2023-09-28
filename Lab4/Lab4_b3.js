import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

class lab4_b3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: false,
    };
  }

  handleAnimate = () => {
    this.setState({ animated: !this.state.animated });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.handleAnimate}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Tap to Animate</Text>
        </TouchableOpacity>
        <Animatable.View
          animation={this.state.animated ? 'bounceIn' : null}
          duration={3000}
          style={{
            width: 200,
            height: 200,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 24 }}>Animated View</Text>
        </Animatable.View>
        {/* <Animatable.View
          animation={this.state.isMoving ? 'slideInRight' : null}
          duration={500}
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white' }}>Chuyển động ngang</Text>
        </Animatable.View> */}
      </View>
    );
  }
}

export default lab4_b3;
