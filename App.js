import React, {Component} from 'react';
import {StyleSheet,  View,ScrollView,ActivityIndicator,Image} from 'react-native';

import Navbar from './src/Navbar/Nav'
import Gen from './src/Generator/generator'
import ListItem from './src/Generator/listItem'
import Input from './src/Input/Input'
import Picker from './src/Picker/Picker'
import pic1 from './src/images/pic1.jpg'
import ModelCom from './src/Model/Model'


export default class App extends Component {

  state= {
    AppName : "Awesome App",
    random:[],
    loading:false
  }

onPressButton = () => {
  const random = Math.floor(Math.random()*100) + 1;
  this.setState(preState=>{
    return{
      random:[...preState.random,random]
    }
  })
}
onItemDelete = (i) => {
  const newArray = this.state.random.filter((item,index)=>{
    return i !==index;
  });
  this.setState({
    random:newArray
  })
}

  render() {
    return (

      
      <View style={styles.container}>

        <Navbar AppName={this.state.AppName}/>
        <ScrollView style={{width:'100%'}}>
         <View style={styles.wraper}>
            <Gen add={this.onPressButton}/>
            <ListItem  items={this.state.random}  delete={this.onItemDelete}/>

            {/* Input todo  */}
                <Input />

            {/* Selection   */}
            <Picker />

          {/* Loading */}
            {/* <ActivityIndicator 
            size="large"
            color="red"
            animating={this.state.loading}
            /> */}


          {/* Image  */}
            <Image 
            source={pic1}
            style={styles.images}
            resizeMode="contain"
            />

          <ModelCom />

         </View>
      </ScrollView>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  wraper:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  images:{
    width:'100%',
    height:300,
  }
});
