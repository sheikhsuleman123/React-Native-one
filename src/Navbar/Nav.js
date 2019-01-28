import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

 const Nav = (props) => (
    
    <View style={styles.head}>
  
        <Text style={styles.color}>{props.AppName}</Text>
  
      </View>
    );
  

const styles = StyleSheet.create({
  head:{
    width: '100%',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor:'#FFD700',
    borderWidth: 1,
  },
  color:{
      color: 'black'
  }
});

export default Nav;