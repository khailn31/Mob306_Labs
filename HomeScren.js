import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScren = ({navigation}) => {
  return (<SafeAreaView>
    <View style={{flexDirection:'row',margin:20}} >
     <Button  title='lab4' onPress={()=>{
        navigation.navigate("Lab4");
     }}/>
      <Button  title='lab4_b2' onPress={()=>{
        navigation.navigate("Lab4_b2");
     }}/>
       <Button  title='lab4_b3' onPress={()=>{
        navigation.navigate("Lab4_b3");
     }}/>
    </View>
    <Button  title='lab5' onPress={()=>{
        navigation.navigate("lab5");
     }}/>
      <Button  title='lab6' onPress={()=>{
        navigation.navigate("lab6");
     }}/>
    </SafeAreaView>
  )
}

export default HomeScren