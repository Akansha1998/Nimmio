import React,{Component} from 'react'
import {Text,View,TouchableWithoutFeedback,Switch} from 'react-native'
import {Input,Item,Card} from 'native-base'
import '../../Helpers/global'

export default class AddaPost extends Component {
    
    Select  = () => {
        alert('Take a photo')
    }
    render(){
        return(
            <View style={{
            flex:1,
            width:global.deviceWidth,
            alignItems:'center',
            backgroundColor:'#eee'
            }}>
            <Text style={{color:global.primaryColor,fontSize:20,marginTop:20}}>Add Post</Text>
                <View style={styles.container_inputs}>
                    <Item style={styles.input_container}>
                        <Input placeholder="Write a caption" />
                    </Item>
                    <Item style={styles.input_container}>
                        <Input placeholder="Select a Category" />
                    </Item>
                    <Item style={styles.input_container}>
                        <Input placeholder="Location" />
                    </Item>
                    <View style={{width:global.deviceWidth/2-15,alignSelf:'flex-start'}}>
                    <TouchableWithoutFeedback onPress={()=> this.Select (' ab bn')}>
                        <Card style={{alignItems:'center',padding:30,borderRadius:20}}>
                            <Text style={{color:global.primaryColor}}>+</Text>
                            <Text>Upload media</Text>
                        </Card>
                    </TouchableWithoutFeedback>
                </View>
                
                <Item style={styles.input_container}>
                        <Input placeholder="Add a tag" />
                </Item>

                <Card style={{borderRadius: 20}}>
                    <View style={{flexDirection:'row',alignItems:'center', height:80 , }}>
                        <Switch
                        style={{ justifyContent:'center' }}
                        value = {true}/>
                        <Text> Post Anonymously</Text>
                    </View>
                </Card>
                </View>
            </View>
        )
    }
}

const styles = {
    container_inputs:{
        width:global.deviceWidth,
        padding:10,
        
    },

    input_container:{
        height: 80,
        backgroundColor:'#fff',
        borderRadius: 20,
        marginTop : 8
    },
    media_container:{
        height:80,
        marginTop : 8,
        borderRadius: 20,
        padding: 10,
        backgroundColor:'#fff'

    }
}