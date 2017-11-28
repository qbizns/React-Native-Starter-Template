import React, {
    Component
  } from 'react';
  import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    Platform,
  } from 'react-native';
  import { Button } from 'native-base';
  import {Navigation} from 'react-native-navigation';
  import _ImagePicker from 'react-native-image-picker';


  export default class ImagePickerTest extends Component {
  
    constructor(props) {
        super(props);
        this.state ={
            avatarSource: ""
        }
    }

    uploadImage() {
        _ImagePicker.showImagePicker(null, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                console.log(response);
                let source = { uri: response.uri };
                
                this.setState({
                    avatarSource: source
                });
            }
        });
    }
    
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>            
                <Image source={this.state.avatarSource} style={{width: 200, height: 200 }} />            
                <Button block info onPress={this.uploadImage.bind(this)}>
                    <Text>Upload a picture</Text>
                </Button>
            </View>
        );
    }
}
  