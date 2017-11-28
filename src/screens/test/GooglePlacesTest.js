import React, {
    Component
  } from 'react';
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
  import RNGooglePlaces from 'react-native-google-places';
  import { appSingleNavigation } from '../../styles/navigatorStyle';

  export default class GooglePlacesTest extends Component {
    static navigatorStyle = appSingleNavigation;
  
    constructor(props) {
      super(props);
    }

    openSearchModal() {
        RNGooglePlaces.openAutocompleteModal()
        .then((place) => {
            alert(JSON.stringify( place ));
            // place represents user's selection from the
            // suggestions and it is a simplified Google Place object.
        })
        .catch(error => alert(error.message));  // error is a Javascript Error object
    }

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
            <TouchableOpacity
            onPress={() => this.openSearchModal()}
            >
            <Text>Pick a Place</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
  