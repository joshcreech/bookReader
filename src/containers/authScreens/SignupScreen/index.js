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
import { Dropdown } from 'react-native-material-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment-timezone';
//=== keyboardAware ===
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//=== colors ===
import colors from '../../../utils/colors';
import resonsiveText from '../../../utils/fontResponsive';
//=== screen ===
class SignupScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      name: '',
      ageGroup: '',
      dob: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: '',
      city: '',
      areaCode: '',
      mobileNumber: '',
      asWrite: 'No',
      isChecked: false,
      datePickerOpen: false,
    }
  }

  //=== set date of birth ===
  setDate = (event, date) => {
    if (date !== undefined) {
      if(Platform.OS==='ios'){
        this.setState({
          dob: date,
        })
      }
      else{
        this.setState({
          dob: date,
          datePickerOpen: false
        })
      }
    }
  }

  //=== arrow ===
  renderArrow=()=>{
    return(
      <View style={styles.mailIcon}>
        <Image
          style={styles.imageStyle}
          source={require('../../../assets/icons/downArrow.svg')}
        />
      </View> 
    )
  }

  render() {
    let {
      name,
      ageGroup,
      dob,
      email,
      password,
      confirmPassword,
      country,
      city,
      areaCode,
      mobileNumber,
      asWrite,
      isChecked,
      datePickerOpen
    } = this.state;
    let ageData = [{
      value: '18-25',
    }, {
      value: '26-36',
    }, {
      value: '40-50',
    }];
    let asWriteData = [{
      value: 'Yes',
    }, {
      value: 'No',
    }];
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
            <ImageBackground
              source={require('../../../assets/images/signupBg.svg')}
              style={styles.imageStyle2}>
              <View style={styles.headerText}>
                <Text style={styles.submitText}>
                  SIGN UP
                </Text>
              </View>
            </ImageBackground>
          </View>
          
          <View style={styles.mainContainer}>
              {/* === Form === */}
            <View style={styles.form}>
              {/* === NAME === */}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                locations={[0.5,0.9]}
                style={styles.gradientStyle}
                colors={[colors.borderColor,colors.inputGradient]}>
                <View style={styles.rowContainer}>
                  <View style={styles.inputField}>
                    <TextInput
                      underlineColorAndroid={'transparent'}
                      placeholder={'Name'}
                      placeholderTextColor={colors.grayColor}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      blurOnSubmit={false}
                      returnKeyType={'done'}
                      value={name}
                      onSubmitEditing={()=>{Keyboard.dismiss()}}
                      onChangeText={(val)=>{this.setState({name: val})}}
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
              {/* === Age Group === */}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                locations={[0.5,0.9]}
                style={styles.gradientStyle}
                colors={[colors.borderColor,colors.inputGradient]}>
                <View style={styles.rowContainer}>
                  <Dropdown
                    labelHeight={0}
                    data={ageData}
                    placeholder={'Age Group'}
                    placeholderTextColor={colors.grayColor}
                    value={ageGroup}
                    renderAccessory={this.renderArrow}
                    containerStyle={styles.dropDownContainer}
                    pickerStyle={styles.pickerStyles}
                    inputContainerStyle={styles.inputContainerStyles}
                    textColor={colors.primary}
                    itemColor={colors.primary}
                    fontSize={resonsiveText(9)}
                    onChangeText={(val)=>{this.setState({
                      ageGroup: val
                    })}}
                    dropdownOffset={{top: 0, left: 0}}
                    rippleOpacity={0}
                  />
                </View>
              </LinearGradient>
              {/* === date of birth === */}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={styles.gradientStyle}
                locations={[0.5,0.9]}
                colors={[colors.borderColor,colors.inputGradient]}>
                <View style={styles.rowContainer}>
                  <View style={styles.inputField}>
                    <TextInput
                      underlineColorAndroid={'transparent'}
                      placeholder={'Date of Birth'}
                      placeholderTextColor={colors.grayColor}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      blurOnSubmit={false}
                      value={dob? moment(dob).format('YYYY-MM-DD'): ''}
                      style={styles.inputStyle}/> 
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>{this.setState({datePickerOpen: true})}} 
                    style={styles.mailIcon}>
                    <Image
                      style={styles.imageStyle}
                      source={require('../../../assets/icons/calendar-icon.svg')}
                    />
                  </TouchableOpacity>
                </View>
              </LinearGradient>
              {/* === email address === */}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={styles.gradientStyle}
                locations={[0.5,0.9]}
                colors={[colors.borderColor,colors.inputGradient]}>
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
                      onSubmitEditing={()=>{Keyboard.dismiss()}}
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
                locations={[0.5,0.9]}
                colors={[colors.borderColor,colors.inputGradient]}>
                <View style={styles.rowContainer}>
                  <View style={styles.inputField}>
                    <TextInput
                      underlineColorAndroid={'transparent'}
                      placeholder={'Password'}
                      placeholderTextColor={colors.grayColor}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      blurOnSubmit={true}
                      returnKeyType={'done'}
                      secureTextEntry={true}
                      value={password}
                      onSubmitEditing={()=>{Keyboard.dismiss()}}
                      onChangeText={(val)=>{this.setState({password: val})}}
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

              {/* === Conform password === */}
              <LinearGradient 
                start={{x: 0.0, y: 0.8}} end={{x: 1.0, y: 1.0}}
                style={styles.gradientStyle}
                locations={[0.5,0.9]}
                colors={[colors.borderColor,colors.inputGradient]}>
                <View style={styles.rowContainer}>
                  <View style={styles.inputField}>
                    <TextInput
                      underlineColorAndroid={'transparent'}
                      placeholder={'Confirm Password'}
                      placeholderTextColor={colors.grayColor}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      blurOnSubmit={true}
                      returnKeyType={'done'}
                      secureTextEntry={true}
                      value={confirmPassword}
                      onSubmitEditing={()=>{Keyboard.dismiss()}}
                      onChangeText={(val)=>{this.setState({confirmPassword: val})}}
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
              {/* === country ==== */}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={styles.gradientStyle}
                locations={[0.5,0.9]}
                colors={[colors.borderColor,colors.inputGradient]}>
                <View style={styles.rowContainer}>
                  <View style={styles.inputField}>
                    <TextInput
                      underlineColorAndroid={'transparent'}
                      placeholder={'Country'}
                      placeholderTextColor={colors.grayColor}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      value={country}
                      onChangeText={(val)=>{this.setState({
                        country: val
                      })}}
                      style={styles.inputStyle}/> 
                  </View>
                  <View style={styles.mailIcon}>
                    <Image
                      style={styles.imageStyle}
                      source={require('../../../assets/icons/globe-icon.svg')}
                    />
                  </View>
                </View>
              </LinearGradient>
              {/* ==== city === */}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={styles.gradientStyle}
                locations={[0.5,0.9]}
                colors={[colors.borderColor,colors.inputGradient]}>
                <View style={styles.rowContainer}>
                  <View style={styles.inputField}>
                    <TextInput
                      underlineColorAndroid={'transparent'}
                      placeholder={'City'}
                      placeholderTextColor={colors.grayColor}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      blurOnSubmit={false}
                      value={city}
                      onChangeText={(val)=>{this.setState({
                        city: val
                      })}}
                      onSubmitEditing={()=>{Keyboard.dismiss()}}
                      style={styles.inputStyle}/> 
                  </View>
                  <View style={styles.mailIcon}>
                    <Image
                      style={styles.imageStyle}
                      source={require('../../../assets/icons/globe-icon.svg')}
                    />
                  </View>
                </View>
              </LinearGradient>

              <View style={styles.rowContainer4}>
                {/* === Area Code === */}
                <View style={styles.cloumn1}>
                  <LinearGradient 
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    style={styles.gradientStyle}
                    locations={[0.5,0.9]}
                    colors={[colors.borderColor,colors.inputGradient]}>
                    <View style={styles.rowContainer}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        //onPress={()=>{}} 
                        style={styles.areaCodeStyle}>
                        <Text style={styles.placeText}> 
                          Area Code
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </LinearGradient>
                </View>
                <View style={styles.cloumn2}>
                  {/*=== mobile number === */}
                  <LinearGradient 
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    style={styles.gradientStyle}
                    locations={[0.5,0.9]}
                    colors={[colors.borderColor,colors.inputGradient]}>
                    <View style={styles.rowContainer}>
                      <View style={styles.inputField}>
                        <TextInput
                          underlineColorAndroid={'transparent'}
                          placeholder={'Mobile Number'}
                          placeholderTextColor={colors.grayColor}
                          autoCorrect={false}
                          autoCapitalize={'none'}
                          blurOnSubmit={false}
                          keyboardType={'numeric'}
                          returnKeyType={'done'}
                          value={mobileNumber}
                          onSubmitEditing={()=>{Keyboard.dismiss()}}
                          onChangeText={(val)=>{this.setState({mobileNumber: val})}}
                          style={styles.inputStyle}/> 
                      </View>
                      <View style={styles.mailIcon}>
                        <Image
                          style={styles.imageStyle}
                          source={require('../../../assets/icons/phone.svg')}
                        />
                      </View>
                    </View>
                  </LinearGradient>
                </View>
              </View>
              {/* === as writer === */}
              <LinearGradient 
                start={{x: 0.0, y: 0.8}} end={{x: 1.0, y: 1.0}}
                style={styles.gradientStyle}
                locations={[0.5,0.9]}
                colors={[colors.borderColor,colors.inputGradient]}>
                <View style={styles.rowContainer}>
                  <Dropdown
                    labelHeight={0}
                    data={asWriteData}
                    placeholder={'Do you want to contribute as writer?'}
                    placeholderTextColor={colors.grayColor}
                    value={asWrite}
                    renderAccessory={this.renderArrow}
                    containerStyle={styles.dropDownContainer}
                    pickerStyle={styles.pickerStyles}
                    inputContainerStyle={styles.inputContainerStyles}
                    textColor={colors.primary}
                    itemColor={colors.primary}
                    fontSize={resonsiveText(9)}
                    dropdownOffset={{top: 0, left: 0}}
                    onChangeText={(val)=>{
                      this.setState({
                        asWrite: val
                      })
                    }}
                    rippleOpacity={0}
                  />
                </View>
              </LinearGradient>
              {/* === terms === */}
              <View style={styles.rowContainer2}>
                <View>
                  <CheckBox
                    center
                    size={20}
                    containerStyle={styles.checkBoxContainer}
                    title='I accept terms & condition'
                    textStyle={{...styles.forgetText,marginLeft: 2}}
                    checked={isChecked}
                  />
                </View>
              </View>
              {/* === submit === */}
              <TouchableOpacity
                style={styles.submitButton}
                activeOpacity={0.8}
                onPress={()=>this.props.navigation.navigate('WriterMain')}
                >
                  <Text style={styles.submitText}>
                    SUBMIT
                  </Text>
              </TouchableOpacity>
            </View>
            {/* //=== footer View === */}
            <View style={styles.rowContainer3}>
              <View>
                <Text style={styles.userText}>
                  Alread Account?
                </Text>
              </View>
              <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate('Login')}}
                activeOpacity={0.8}>
                <View style={styles.bottonLine2}>
                  <Text style={styles.signupText}>
                    Sign in
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {Platform.OS==='ios' && datePickerOpen &&
            <TouchableOpacity 
              style={styles.doneButton}
              activeOpacity={0.8}
              onPress={()=>{this.setState({datePickerOpen: false})}}>
              <Text style={styles.doneText}>
                Done
              </Text>
            </TouchableOpacity>
          }
          {datePickerOpen &&
            <View style={styles.datePicker}>
              <DateTimePicker 
                value={dob? dob : new Date()}
                mode={'date'}
                display='calendar'
                is24Hour={true}
                style={styles.datePicker}
                onChange={this.setDate} 
              />
            </View>
          }
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

//===  make components available outside ===
export default SignupScreen;