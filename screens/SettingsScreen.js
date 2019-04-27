import React from 'react';
import {View,ScrollView,TouchableOpacity, TextInput, Picker, StyleSheet, AsyncStorage,ImageBackground,Text} from "react-native";
import { Avatar,Input,Icon} from 'react-native-elements';  
import {Content,Left,Card,Container, Header, Body, Right,Title, Spinner,Button,Tab,Tabs,ScrollableTab} from 'native-base';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ToggleSwitch from 'toggle-switch-react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DeliveryScreen from './DeliveryScreen';
class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
      <Container>
       <Tabs>
       <Tab heading="My Profile" tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: 'grey'}} activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
      
      
        <ImageBackground source={require('../assets/images/gro.jpg')} 
           style={{width: '100%', height: '100%'}}>
       <ScrollView>
      
 <View style={{flex:1, marginBottom:10}}>

  <View style={{display:'flex',
                flexDirection:'column',
                paddingTop:heightPercentageToDP('5%'),
                justifyContent:"space-evenly"}}>
  <View style={{display:'flex',
                justifyContent:'center',
                alignItems:'center',
                alignContent:'center'}}>             
       <Avatar
       rounded={true}
       size={100}
       source={{uri:'https://parivahan.gov.in/analytics/resources/images/avatar1_small.png'}}
       showEditButton size={100}/>
       </View>

   <Text style={{fontWeight:'bold',
                 fontSize:25,
                 color:'white',
                 textAlign:'center',
                 alignItems:'center',
                 alignContent:'center'}}>
   Manoj Kumar
   </Text>
  </View>
 

<Card style={{opacity:0.8,backgroundColor:'white'}}>
<View style={{flexDirection:'row',justifyContent:'space-between',padding:'3%'}}>
<Button rounded bordered block success 
   style={{width:widthPercentageToDP('30%'),
           height:heightPercentageToDP('4%')}}>
           <Text style={{color:'green',fontWeight:'700'}}>
               Profile
           </Text>
           </Button>
           <Button rounded block success 
   style={{width:widthPercentageToDP('30%'),
           height:heightPercentageToDP('4%')}}>
           <Text style={{color:'white',fontWeight:'700'}}>
               Logout
           </Text>
           </Button>
</View>
  <View style={{flexDirection:'column'}}>
  <View style={{paddingLeft:widthPercentageToDP('3%'),
                paddingTop:widthPercentageToDP('5%'),
                flexDirection:'row'}}>
              
     <View style={{paddingTop:widthPercentageToDP('0.5%')}}> 
      <Icon 
            name='person-outline'
            size={18}
            color='black'/>
            </View>
      <Text style={{paddingLeft:widthPercentageToDP('0.8%'),color:'black'}}>
        Name
      </Text>
      </View>
      <TextInput 
        //  onChangeText={(name)=>this.setState({name})}
        //  style={[styles.subTextStyle,{color:Textcolor}]}  
        //  editable={!this.state.disable}
         placeholder='' 
        //  value= {this.state.name}
         />
      </View>
      <View style={{flexDirection:'column'}}>
  <View style={{paddingLeft:widthPercentageToDP('3%'),
                paddingTop:widthPercentageToDP('5%'),
                flexDirection:'row'}}>
              
     <View style={{paddingTop:widthPercentageToDP('0.5%')}}> 
      <Icon 
            name='mail-outline'
            size={18}
            color='black'/>
            </View>
      <Text style={{paddingLeft:widthPercentageToDP('0.8%'),color:'black'}}>
       E-mail
      </Text>
      </View>
      <TextInput 
        //  onChangeText={(name)=>this.setState({name})}
        //  style={[styles.subTextStyle,{color:Textcolor}]}  
        //  editable={!this.state.disable}
         placeholder='' 
        //  value= {this.state.name}
         />
      </View>
      <View style={{flexDirection:'column'}}>
  <View style={{paddingLeft:widthPercentageToDP('3%'),
                paddingTop:widthPercentageToDP('5%'),
                flexDirection:'row'}}>
              
     <View style={{paddingTop:widthPercentageToDP('0.5%')}}> 
      <Icon 
            name='location-on'
            size={18}
            color='black'/>
            </View>
      <Text style={{paddingLeft:widthPercentageToDP('0.8%'),color:'black'}}>
        Landmark
      </Text>
      </View>
      <TextInput 
        //  onChangeText={(name)=>this.setState({name})}
        //  style={[styles.subTextStyle,{color:Textcolor}]}  
        //  editable={!this.state.disable}
         placeholder='' 
        //  value= {this.state.name}
         />
      </View>
      <View style={{flexDirection:'column'}}>
         <View style={{paddingLeft:widthPercentageToDP('3%'),
                       paddingTop:widthPercentageToDP('5%'),
                       flexDirection:'row'}}>
                         
         <View style={{paddingTop:widthPercentageToDP('0.5%')}}> 
             <Icon 
                   name='map'
                   size={15}
                   color='black'/>
         </View>
         <Text style={{paddingLeft:widthPercentageToDP('0.8%'),color:'black'}}>
           Address
         </Text>
      </View>
      <TextInput 
        //  onChangeText={(name)=>this.setState({name})}
        //  style={[styles.subTextStyle,{color:Textcolor}]}  
        //  editable={!this.state.disable}
         placeholder='' 
        //  value= {this.state.name}
         />
      </View>
      <View style={{flexDirection:'column'}}>
         <View style={{paddingLeft:widthPercentageToDP('3%'),
                       paddingTop:widthPercentageToDP('5%'),
                       flexDirection:'row'}}>
                         
         <View style={{paddingTop:widthPercentageToDP('0.5%')}}> 
             <Icon 
                   name='bookmark-pin'
                   size={15}
                   color='black'/>
         </View>
         <Text style={{paddingLeft:widthPercentageToDP('0.8%'),color:'black'}}>
           Pincode
         </Text>
      </View>
      <TextInput 
        //  onChangeText={(name)=>this.setState({name})}
        //  style={[styles.subTextStyle,{color:Textcolor}]}  
        //  editable={!this.state.disable}
         placeholder='' 
        //  value= {this.state.name}
         />
      </View>
 
        <View style={{display:"flex",flexDirection:'row',paddingLeft:widthPercentageToDP('3%'),
                       paddingTop:widthPercentageToDP('5%')}}>
    
                     
         <Text style={{paddingLeft:widthPercentageToDP('1%'),color:'black'}}>SMS Notification </Text>
         <View style={{paddingLeft:'50%'}}>
         <ToggleSwitch  
               onColor='#5d79ea'
               offColor='gray'
               size='small'/>
         </View>
      </View>  
         <View style={{justifyContent:'center',alignSelf:'center',paddingTop:'5%'}}>
   <Button rounded block success 
    // onPress={this.onSubmit}
    //    disabled={this.state.disable}
           style={{width:widthPercentageToDP('80%'),
                   height:heightPercentageToDP('5%')}}>
     <Text style={{color:'white',fontWeight:'700'}}>Update</Text>
   </Button>
   </View>
   <View style={{justifyContent:'center',alignSelf:'center',paddingTop:'3%'}}>
   <Button bordered rounded block success 
    // onPress={this.onSubmit}
    //    disabled={this.state.disable}
           style={{width:widthPercentageToDP('50%'),
                   height:heightPercentageToDP('5%')}}>
     <Text style={{color:'green',fontWeight:'700'}}>Change Password</Text>
   </Button>
   </View>
   <View style={{flexDirection:'column'}}>
  <View style={{paddingLeft:widthPercentageToDP('3%'),
                paddingTop:widthPercentageToDP('5%'),
                flexDirection:'row'}}>
      <Text style={{paddingLeft:widthPercentageToDP('0.8%'),color:'black'}}>
        Current Password
      </Text>
      </View>
      <TextInput 
        //  onChangeText={(name)=>this.setState({name})}
        //  style={[styles.subTextStyle,{color:Textcolor}]}  
        //  editable={!this.state.disable}
         placeholder='' 
        //  value= {this.state.name}
         />
          <View style={{paddingLeft:widthPercentageToDP('3%'),
                paddingTop:widthPercentageToDP('5%'),
                flexDirection:'row'}}>
      <Text style={{paddingLeft:widthPercentageToDP('0.8%'),color:'black'}}>
        New Password
      </Text>
      </View>
      <TextInput 
        //  onChangeText={(name)=>this.setState({name})}
        //  style={[styles.subTextStyle,{color:Textcolor}]}  
        //  editable={!this.state.disable}
         placeholder='' 
        //  value= {this.state.name}
         />
          <View style={{paddingLeft:widthPercentageToDP('3%'),
                paddingTop:widthPercentageToDP('5%'),
                flexDirection:'row'}}>
      <Text style={{paddingLeft:widthPercentageToDP('0.8%'),color:'black'}}>
        Confirm Password
      </Text>
      </View>
      <TextInput 
        //  onChangeText={(name)=>this.setState({name})}
        //  style={[styles.subTextStyle,{color:Textcolor}]}  
        //  editable={!this.state.disable}
         placeholder='' 
        //  value= {this.state.name}
         />
      </View>
      <View style={{justifyContent:'center',alignSelf:'center',padding:'3%'}}>
   <Button rounded block success 
    // onPress={this.onSubmit}
    //    disabled={this.state.disable}
           style={{width:widthPercentageToDP('80%'),
                   height:heightPercentageToDP('5%')}}>
     <Text style={{color:'white',fontWeight:'700'}}>Submit</Text>
   </Button>
   </View>
     </Card>
 </View>

 </ScrollView>

 </ImageBackground>
  </Tab>

  <Tab heading="My Orders" tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'black'}} activeTabStyle={{backgroundColor: 'grey'}} activeTextStyle={{color: 'black', fontWeight: 'normal'}}>
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

</Tab>



  </Tabs>

      
 </Container>
    );
  }
}


const stemstack = createStackNavigator({
  setting:SettingsScreen,
  delivery:DeliveryScreen,
},
{
  initialRouteName: 'setting',
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