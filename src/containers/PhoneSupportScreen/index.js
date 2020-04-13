import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler,
  SafeAreaView,
  StatusBar,
  TextInput,
  Platform,
  Keyboard,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableHighlight,
  Linking,
} from 'react-native';

import {descData } from './data';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class PhoneSupportScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '+918976543210'
    }
  }

  //===call  press===
  dialCall=()=>{
    const {phone}=this.state;
    if(phone){
      const number = phone;
      let  phoneNumber='';
      if (Platform.OS === 'android') {
        phoneNumber = 'tel:${'+number+'}';
      }
      else {
        phoneNumber = 'telprompt:${'+number+'}';
      }
      Linking.openURL(phoneNumber);
    }
  }

  render() {
    let {phone} = this.state;
    return (
      <View style={styles.screenContainer}>
        <StatusBar
          backgroundColor={colors.circleColor}
          barStyle="light-content"
          translucent={false}
        />
        {/* === header === */}
        <SafeAreaView style={{backgroundColor: colors.supportHeaderColor}}/>
        <View style={styles.headerContainer} >
          <View style={styles.headView}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.backIcon}
              onPress={()=>{this.props.navigation.pop()}}>
              <Image
                style={styles.imageStyle}
                source={require('../../assets/icons/backArrow.svg')}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.headerText}>
                Phone Customer Support 
              </Text>
            </View>
            <View/>
          </View>
        </View>
        {/* === main content === */}
        <View style={styles.mainContainer}>
          {/* === IMAGE === */}
          <View style={styles.supportImage}>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/images/phone-support-bg.svg')}
            />
          </View>
          {/* === text === */}
          <View>
            <Text style={styles.helpText}>
              Need some help?
            </Text>
          </View>
          {/* === text === */}
          <View style={styles.decView}>
            <Text style={styles.descText}>
              {descData}
            </Text>
          </View>
           {/* === Button === */}
            <TouchableOpacity
              style={styles.callButton}
              activeOpacity={0.8}
              onPress={()=>this.dialCall()}
              >
                <Text style={styles.callText}>
                  Call:  {phone}
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

//===  make components available outside ===
export default PhoneSupportScreen;