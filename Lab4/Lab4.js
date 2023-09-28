import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

const Lab4 = () => {
    const [isLoading,setLoading]=useState(true);
    const [data,setData]=useState([]);
    const getData=async()=>{
        try {
            const response=await fetch('https://jsonplaceholder.typicode.com/posts');
            const json=await response.json();
            setData(json);
        }catch(error){
            console.error(error);
        }finally{
            setLoading(false);
        }
    };
    useEffect(()=>{
        getData();
    },[]);
  return (
    <View style={{ flex: 1, padding: 10 }}>
    {isLoading ? (
        <ActivityIndicator/>
    ) : (
        <FlatList
            data={data}

            renderItem={({ item }) => (
                <View style={{
                    flexDirection: 'row', alignItems: 'center', backgroundColor: 'white',
                    borderRadius: 12, 
                    marginVertical: 5,
                    padding:8
                }}>
                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                        <Text >
                            id:{item.id}
                        </Text>
                        <Text  >
                            title:{item.title}
                        </Text>
                    </View>
                </View>
            )}
         
        />
    )}
</View>
  )
}

export default Lab4;