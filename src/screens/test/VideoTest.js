import React, {
    Component
  } from 'react';
  import FitImage from 'react-native-fit-image';
  import ResponsiveImage from 'react-native-responsive-image';
  import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    Platform,
  } from 'react-native';
  import {Navigation} from 'react-native-navigation';
  
  import { appSingleNavigation } from '../../styles/navigatorStyle';
  
  import Video from 'react-native-video';

  export default class StartUpScreen extends Component {
    static navigatorStyle = appSingleNavigation;
  
    constructor(props) {
      super(props);
    }
  
    video: Video;

    render() {
    //   setTimeout(
    //     () => {
    //       Navigation.startSingleScreenApp({
    //         screen: {
    //           screen: 'Healer.StartHeightScreen'
    //         }
    //       });
    //     }, 5000
    //   );
  
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>


        <Video source={require('../../../assets/video/splash.mp4')}   // Can be a URL or a local file.
           ref={(ref: Video) => { this.video = ref }}             // Store reference
           rate={1.0}                                             // 0 is paused, 1 is normal.
           volume={1.0}                                           // 0 is muted, 1 is normal.
           muted={false}                                          // Mutes the audio entirely.
           paused={false}                                         // Pauses playback entirely.
           resizeMode="cover"                                     // Fill the whole screen at aspect ratio.*
           repeat={true}                                          // Repeat forever.
           playInBackground={false}                               // Audio continues to play when app entering background.
           playWhenInactive={false}                               // [iOS] Video continues to play when control or notification center are shown.
           ignoreSilentSwitch={"ignore"}                          // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
           progressUpdateInterval={250.0}                         // [iOS] Interval to fire onProgress (default to ~250ms)
           //onEnd={() => this.loadImageSplash()}
           repeat={false}
           style={{position: 'absolute',top: 110,left: 110,bottom: 110,right: 110}} >
        </Video>

        </View>
      );
    }
  }
  