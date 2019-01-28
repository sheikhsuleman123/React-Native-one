import React, { Component } from 'react'
import { Text,View,Modal,StyleSheet,Button} from 'react-native';

class ModelComponent extends Component {

    state = {
            modal:false
    }

     handleModal = () => {
        this.setState({
         modal: !this.state.modal ? true : false
        })
        }



  render() {
    return (
      <View style={{width:'100%'}}>
        <Button 
        title="OPen Model"
        onPress={this.handleModal}
        />

        <Modal 
        visible={this.state.modal}
        animationType="slide"
        onShow={()=> {
          alert('Hey I am Model')
        }}
        >
        <View style={{
            marginTop: 5,
            backgroundColor:'orange'
        }}>
            <Text>My Model Component</Text>
          
        </View>
        <Button 
        title="Close Model"
        onPress={this.handleModal}
        />
       

        </Modal>

      </View>
    )
  }
}


export default  ModelComponent;