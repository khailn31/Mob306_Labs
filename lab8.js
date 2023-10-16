import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import  styles  from "./Lab5/style";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  { id: "1", name: "Item 1" },
  { id: "2", name: "Item 2" },
  { id: "3", name: "Item 3" },
];
const Lab8 = () => {

  const [searchText, setSearchText] = useState("");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <SafeAreaView style={styles.container}>
 
      <View style={styles.view}>
        <Text style={styles.text}>Đây là lab 8 dùng style ở file style.js</Text>
      </View>
      <View>
        <TextInput
          placeholder="Tìm kiếm..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />

        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
 
    </SafeAreaView>
  );
};

export default Lab8;
