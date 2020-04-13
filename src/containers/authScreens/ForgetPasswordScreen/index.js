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
  Keyboard
} from 'react-native';
//=== style ==
import styles from './styles';
import { CheckBox } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
//=== keyboardAware ===
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//=== colors ===
import colors from '../../../utils/colors';
//=== screen ===
class ForgetPasswordScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      email: '',
    }
  }

  render() {
    let {
      email,
    } = this.state;
    return (
      <KeyboardAwareScrollView
        scrollEnabled={false}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        >
        <View style={styles.screenContainer}>
          <StatusBar 
            backgroundColor={colors.circleColor} 
            barStyle="light-content"
            translucent={false}
          />
          {/* === header image === */}
          <View style={styles.topImage}>
            <Image
              source={require('../../../assets/images/headerImage.svg')}
              style={styles.imageStyle2}
            />
          </View>
          
          <View style={styles.mainContainer}>
            {/* === app logo === */}
            <View style={styles.logoStyle}>
              <Image
                style={styles.imageStyle}
                source={require('../../../assets/images/logo2.svg')}
              />
            </View>
            {/* === app name === */}
            <View style={styles.textView}>
              <View style={styles.appNameView}>
                <Text style={styles.appNameText}>
                  Forget Password?
                </Text>
              </View>
              <View style={styles.descView}>
                <Text style={styles.descText}>
                  Enter your email address. here you recieve futher instructions.
                </Text>
              </View>
            </View>
            {/* === Form === */}
            <View style={styles.form}>
              {/* === email === */}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={styles.gradientStyle}
                colors={[colors.borderColor,colors.borderColor,colors.inputGradient]}>
                <View style={styles.rowContainer}>
                  <View style={styles.inputField}>
                    <TextInput
                      underlineColorAndroid={'transparent'}
                      placeholder={'Email Address'}
                      placeholderTextColor={colors.grayColor}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      blurOnSubmit={false}
                      keyboardType={'email-address'}
                      returnKeyType={'done'}
                      value={email}
                      onChangeText={(val)=>{this.setState({email: val})}}
                      onSubmitEditing={()=>{Keyboard.dismiss()}}
                      style={styles.inputStyle}/> 
                  </View>
                  <View style={styles.mailIcon}>
                    <Image
                      style={styles.imageStyle}
                      source={require('../../../assets/icons/mail.svg')}
                    />
                  </View>
                </View>
              </LinearGradient>
              {/* === submit === */}
              <TouchableOpacity
                style={styles.submitButton}
                activeOpacity={0.8}
                onPress={()=>{this.props.navigation.navigate('Login')}}
                >
                  <Text style={styles.submitText}>
                    SEND
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

//===  make components available outside ===
export default ForgetPasswordScreen;