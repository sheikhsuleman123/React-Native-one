import React from 'react';
import {StyleSheet ,Text, View,TouchableWithoutFeedback} from 'react-native';

 const generoter = (props) => (
   
   <TouchableWithoutFeedback
   onPress={ ()=>{
     props.add()
   }}
   >
      <View style={styles.generate}>
        <Text style={styles.color}>Add Number </Text>
      </View>
   </TouchableWithoutFeedback>
     
    );
  
const styles = StyleSheet.create({
  generate:{
    padding: 10,
    alignItems:'center',
    backgroundColor:'#1E90FF',
    width:'100%',
    marginTop: 20,
    },
    color:{
      color: 'black'
  }
})


    export default generoter;