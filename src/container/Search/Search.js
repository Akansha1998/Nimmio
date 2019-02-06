import React,{Component} from 'react'
import {Text,View} from 'react-native'

export default class Search extends Component {
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.inputContainer}>
            <Text> Heyo!</Text>
              <TextInput
              
              placeholder="Enter something"
              value={this.state.placeName}
              onChangeText={this.placeNameChangedHandler}
              style={styles.placeInput}
              />
              <Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler.bind(this)}/>
            </View>
            <View style= {styles.listContainer}>
              {placesOutput} 
      
            </View>
            </View>
        )
    }
}