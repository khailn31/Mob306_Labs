import { View, Text, Button, TextInput, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RNCamera } from 'react-native-camera';import * as ImagePicker from 'expo-image-picker';


const Lab7 = () => {
  const [name, setName] = useState('');
  const [initialLocation, setInitialLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [image, setImage] = useState('');

  const showAlert = () => {
    Alert.alert('Tiêu đề thông báo', 'Nội dung thông báo');
  };

  useEffect(() => {
    // Lấy vị trí hiện tại khi component được tải
 

    // Hủy bỏ việc theo dõi vị trí khi component bị hủy
  
  }, []);

//   useEffect(() => {
//     const watchId = Geolocation.watchPosition(
//       (position) => {
//         setCurrentLocation(position.coords);
//       },
//       (error) => {
//         console.error(error.message);
//       },
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );

//     return () => {
//       Geolocation.clearWatch(watchId);
//     };
//   }, []);
const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsyns({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [9, 6],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setImage(result.assets[0].uri);
  }
};
  return (
    <View>
      <TextInput onChangeText={text => setName(text)} />
      <Text>{name}</Text>
      <Button title="Thông báo" onPress={showAlert} />
      
        <Button title="Chọn ảnh" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: '90%', height: 200, margin: 20 }} />}

    </View>
  );
};

export default Lab7;
