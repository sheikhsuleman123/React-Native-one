import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';


const listItem = (props)=> {
  return (

    props.items.map((item,i)=>(
  <TouchableOpacity
  onPress={()=> props.delete(i)}
  key={i}
  style={styles.listItem}
  >
    <View>
        <Text>{item}  </Text>
    </View>
  </TouchableOpacity>
    )) 
  )
}

const styles = StyleSheet.create({
listItem:{
    backgroundColor:'#cecece',
    padding: 10,
    margin: 5,
    alignItems: 'center',
    width: '100%',
    color: 'black',
}
})

export default  listItem;