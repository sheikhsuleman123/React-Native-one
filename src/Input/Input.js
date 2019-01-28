import React, {Component} from 'react';
import {StyleSheet,Text, View,TextInput,Button} from 'react-native';


 class Input extends Component {

    state = {
        Invalue: "",
        users:['Suleman','Sheikh'],
    }
    onChange = (value) => {
        this.setState({
            Invalue:value,
        })
    }
    onAddUser = () => {
        this.setState(preState =>{
            return {
                Invalue:'',
                users:[...preState.users,preState.Invalue]
            }
        })
    }

  render() {
    return (

      <View style={styles.wraper}>
            <TextInput 
            style={styles.input}
            value={this.state.Invalue}
            onChangeText={this.onChange}
            autoCapitalize={'sentences'}
            />
            <Button  
            title="Add User"
            onPress={this.onAddUser}
            /> 
            {
                this.state.users.map(item =>(
                    <Text style={styles.items}>{item}</Text>
                ))
            }
      </View>
    
    )
  }
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'#f2f2f2',
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#cecece',
        marginBottom: 20,
        fontSize: 15,
        padding: 5,
        
    },
    wraper:{
        width:'100%',
    },
    items:{
    fontSize:20,
    borderWidth: 1,
    borderColor: '#cecece',
    padding:10,
    margin: 5,
    backgroundColor:'#cecece',    
    }
})


export default Input;