import React from 'react';
import {Text,TouchableOpacity,View} from 'react-native';
import { Card } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DeliveryScreen from './DeliveryScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'My Orders',
  };

  render() {
    return (
     <View>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('delivery')}>
    <Card>
      <View style={{flexDirection:'column'}}>
      <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',alignSelf:'center'}}>
      <Text style={{fontWeight:'bold'}}>
        8754743609
      </Text>
      <Text style={{fontWeight:'bold'}}>
        -
      </Text>
      <Text style={{fontWeight:'bold'}}> {'\u20B9'} 1600 </Text>
      </View>
      <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',alignSelf:'center'}}>
      <Text style={{fontWeight:'bold'}}>
        Date
      </Text>
      <Text style={{fontWeight:'bold'}}>
        /
      </Text>
      <Text style={{fontWeight:'bold'}}>
        Mode Of Payment
      </Text>
      </View>
      </View>
    </Card>
    </TouchableOpacity>
     </View>
    );
  }
}

const stemstack = createStackNavigator({
  home:HomeScreen,
  delivery:DeliveryScreen,
},
{
  initialRouteName: 'home',
}

);


const AppContainer = createAppContainer(stemstack);

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <AppContainer />;
  }
}