import { View, Text,StyleSheet,Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';
import { Modal } from 'react-native';

const lab5 = () => {
    let [isLoading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 6000); // Đặt thời gian 6 giây trước khi ẩn Activity Indicator
    }, []);
    //   let checkIfLoading = () => {
    //     //console.log(isLoading)
    //     if (isLoading)
    //     <ActivityIndicator size="large" color="#0000ff" />
    // }


    const renderContent = () => {
        if (isLoading) {
            return (
                <View  >
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <WebView source={{ uri: 'https://www.google.com/' }} />
                    <Modal animationType='fade'
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }} >

                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Lê Ngọc Khải</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Hide Modal</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>

                </View>
            );
        }
    };

    return renderContent();
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
  },
  button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
  },
  buttonOpen: {
      backgroundColor: '#F194FF',
  },
  buttonClose: {
      backgroundColor: '#2196F3',
  },
  textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
  },
  modalText: {
      marginBottom: 15,
      textAlign: 'center',
  },
  });
  

export default lab5