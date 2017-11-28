import LocalizedStrings from 'react-native-localization';
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
  import RNRestart from 'react-native-restart';
  import { default as Sound } from 'react-native-sound';
  
  const strings = new LocalizedStrings({
    "en-US":{
      how:"How do you want your egg today?",
      boiledEgg:"Boiled egg",
      softBoiledEgg:"Soft-boiled egg",
      choice:"How to choose the egg"
    },
    en:{
      how:"How do you want your egg today?",
      boiledEgg:"Boiled egg",
      softBoiledEgg:"Soft-boiled egg",
      choice:"How to choose the egg"
    },
    it: {
      how:"Come vuoi il tuo uovo oggi?",
      boiledEgg:"Uovo sodo",
      softBoiledEgg:"Uovo alla coque",
      choice:"Come scegliere l'uovo"
    }
   });

  export default class LocalizationTest extends Component {
  
    constructor(props) {
        super(props);
        strings.setLanguage('it');      
        Sound.setCategory('Playback', true)  

        this.playSoundLooped = () => {
          if (this.state.loopingSound) {
              return;
          }
          const s = new Sound(require('../../../assets/sound/ring_new.mp3'), (e) => {
              if (e) {
                  console.log('error', e);
              }
              s.setNumberOfLoops(-1);
              s.play(() => s.release());
          });
          this.setState({loopingSound: s});
      };

      this.stopSoundLooped = () => {
          if (!this.state.loopingSound) {
              return;
          }

          this.state.loopingSound
          .stop()
          .release();
          this.setState({loopingSound: null});
      };

      this.state = {
        loopingSound: undefined,
        secondsRemaining: 5
    };

    }
    
    Restart(){
      this.playSoundLooped()
      //RNRestart.Restart();
    }
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>            
                <Button block info onPress={this.Restart.bind(this)}>
                    <Text>{strings.how}</Text>
                </Button>
            </View>
        );
    }
}