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
class LoginScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      email: '',
      password: '',
      isChecked: false,
    }
  }

  //=== focus Next ====
  _focusNextField(nextField){
    this.refs[nextField].focus();
  }

  handleSubmit=()=>{
    this.props.navigation.navigate('ReaderMain');
  }

  render() {
    let {
      email,
      password,
      isChecked
    } = this.state;
    return (
      <KeyboardAwareScrollView
        scrollEnabled
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
            <View>
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
                    WELCOME TO BOOKRAMP
                  </Text>
                </View>
                <View style={styles.descView}>
                  <Text style={styles.descText}>
                  Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
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
                        returnKeyType={Platform.OS==='ios'? 'done': 'next'}
                        value={email}
                        onSubmitEditing={()=>{this._focusNextField('password')}}
                        onChangeText={(val)=>{this.setState({email: val})}}
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
                {/* === password === */}
                <LinearGradient
                  start={{x: 0.0, y: 0.8}} end={{x: 1.0, y: 1.0}}
                  style={styles.gradientStyle}
                  colors={[colors.borderColor,colors.borderColor,colors.inputGradient]}>
                  <View style={styles.rowContainer}>
                    <View style={styles.inputField}>
                      <TextInput
                        underlineColorAndroid={'transparent'}
                        placeholder={'Password'}
                        placeholderTextColor={colors.grayColor}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        secureTextEntry={true}
                        blurOnSubmit={true}
                        returnKeyType={'done'}
                        ref='password'
                        value={password}
                        onSubmitEditing={()=>{Keyboard.dismiss()}}
                        onChangeText={(val)=>{this.setState({email: val})}}
                        style={styles.inputStyle}/> 
                    </View>
                    <View style={styles.mailIcon}>
                      <Image
                        style={styles.imageStyle}
                        source={require('../../../assets/icons/password.svg')}
                      />
                    </View>
                  </View>
                </LinearGradient>
                {/* === forgetpassword === */}
                <View style={styles.rowContainer2}>
                  <View>
                    <CheckBox
                      center
                      size={20}
                      containerStyle={styles.checkBoxContainer}
                      title='Remember Me'
                      textStyle={{...styles.forgetText,marginLeft: 2}}
                      checked={isChecked}
                    />
                  </View>
                  <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={()=>{this.props.navigation.navigate('ForgetPassword')}}
                    style={styles.forgetButton}>
                      <View style={styles.bottonLine}>
                        <Text style={styles.forgetText}>
                          Forget Password?
                        </Text>
                      </View>
                  </TouchableOpacity>
                </View>
                {/* === submit === */}
                <TouchableOpacity
                  style={styles.submitButton}
                  activeOpacity={0.8}
                  onPress={()=>this.handleSubmit()}
                  >
                    <Text style={styles.submitText}>
                      SUBMIT
                    </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.rowContainer3}>
              <View>
                <Text style={styles.userText}>
                  New User?
                </Text>
              </View>
              <TouchableOpacity
                onPress={()=>{
                  this.props.navigation.navigate('Signup')
                }}
                activeOpacity={0.8}
              >
                <View style={styles.bottonLine2}>
                  <Text style={styles.signupText}>
                    Click here to Sign up
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

//===  make components available outside ===
export default LoginScreen;