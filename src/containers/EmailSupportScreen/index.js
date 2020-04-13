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
} from 'react-native';
//=== side bar ===
import LinearGradient from 'react-native-linear-gradient';
//=== keyboardAware ===
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {descData } from './data';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class EmailSupportScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      email: ''
    }
  }

  
  render() {
    let {
      query,
      email
    } = this.state;
    return (
      <KeyboardAwareScrollView
        scrollEnabled
        bounces={false}
        style={styles.screenContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      >
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
                  Email Customer Support 
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
                source={require('../../assets/images/email-support-bg.svg')}
              />
            </View>
            {/* === text === */}
            <View>
              <Text style={styles.helpText}>
                Do you have any query?
              </Text>
            </View>
            {/* === text === */}
            <View style={styles.decView}>
              <Text style={styles.descText}>
                {descData}
              </Text>
            </View>

            <View style={styles.formView}>
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                locations={[0.4,0.6]}
                style={styles.gradientStyle}
                colors={[colors.borderColor,colors.inputGradient2]}>
                <View style={styles.rowContainer}>
                  <View style={styles.inputField2}>
                    <TextInput
                      underlineColorAndroid={'transparent'}
                      placeholder={'Email Address'}
                      placeholderTextColor={colors.grayColor}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      blurOnSubmit={false}
                      keyboardType={'email-address'}
                      returnKeyType={Platform.OS==='ios'? 'done': 'next'}
                      value={email}
                      onSubmitEditing={()=>{Keyboard.dismiss()}}
                      onChangeText={(val)=>{this.setState({email: val})}}
                      style={styles.inputStyle}/> 
                  </View>
                  <View style={styles.mailIcon}>
                    <Image
                      style={styles.imageStyle}
                      source={require('../../assets/icons/mail.svg')}
                    />
                  </View>
                </View>
              </LinearGradient>
              {/* === Story === */}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                locations={[0.4,0.6]}
                style={styles.gradientTxtAreaStyle}
                colors={[colors.borderColor,colors.inputGradient2]}>
                <View style={{...styles.rowContainer,paddingTop: 10}}>
                  <View style={styles.inputField2}>
                    <TextInput
                      underlineColorAndroid={'transparent'}
                      placeholder={'Type your query here'}
                      placeholderTextColor={colors.grayColor}
                      autoCorrect={false}
                      multiline={true}
                      autoCapitalize={'none'}
                      blurOnSubmit={false}
                      returnKeyType={'done'}
                      value={query}
                      onSubmitEditing={()=>{Keyboard.dismiss()}}
                      onChangeText={(val)=>{this.setState({query: val})}}
                      style={styles.inputStyle}/> 
                  </View>
                </View>
              </LinearGradient>
            </View>
            {/* === Button === */}
              <TouchableOpacity
                style={styles.sendButton}
                activeOpacity={0.8}
                onPress={()=>this.dialCall()}
                >
                  <Text style={styles.sendText}>
                    SEND
                  </Text>
              </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

//===  make components available outside ===
export default EmailSupportScreen;