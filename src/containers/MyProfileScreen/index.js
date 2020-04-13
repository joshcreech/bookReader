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
  Dimensions,
  ScrollView,
  Platform,
  TouchableHighlight
} from 'react-native';

//=== star ====
import {AirbnbRating} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment-timezone';
//=== keyboardAware ===
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class MyProfileScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      name: 'Abhi Raj',
      gender: 'Male',
      country: 'USA',
      city: 'USA',
      dob: new Date(),
      areaCode: '+91',
      mobileNum: '9997770001',
      email: 'abhi007@gmail.com',
      boiText: 'Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with  content. This is required when, for example, the final text is not yet available. Dummy text is also known as',
      isEdit: false,
      isDatePickerOpen: false,
    }
  }

  //=== arrow ===
  renderArrow=()=>{
    return(
      <View style={styles.mailIcon}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/icons/downArrow.svg')}
        />
      </View> 
    )
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

  render() {
    let {
      name,
      gender,
      country,
      city,
      dob,
      areaCode,
      mobileNum,
      email,
      boiText,
      isDatePickerOpen,
      isEdit
    } = this.state
    let genderData = [{
      value: "Male",
    }, {
      value: 'Female',
    },];
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
          {/* === header === */}
          <ImageBackground 
            style={styles.headerContainer2} 
            source={require('../../assets/icons/main-bg.svg')}>
            <SafeAreaView />
            <View
              style={styles.headerContainer} >
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.menuIcon}
                onPress={()=>{this.props.drawer.open()}}
              >
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icons/toggle.svg')}
                />
              </TouchableOpacity>
              <View>
                <Text style={styles.headerText}>
                  My Profile
                </Text>
              </View>
              
              <View/>
            </View>
            {/* //=== profile === */}
            <View style={styles.profileRow}>
              <View style={styles.rowContainer}>
                <LinearGradient 
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    style={styles.gradientImage}
                    colors={[colors.borderColor,colors.borderColor,colors.inputGradient]}>
                  <View style={styles.profileImage}>
                    <Image
                      source={require('../../assets/placeHolder/user.svg')}
                      style={styles.imageStyle}
                    />
                  </View>
                </LinearGradient>
                <View style={styles.nameView}>
                  <View>
                    <Text style={styles.labelText}>
                      Hello
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.nameText}>
                      {name}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>{this.setState({
                  isEdit: !isEdit
                })}}
                style={styles.iconStyle}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icons/pencil.svg')}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
            {/* === main content === */}
          <View style={styles.mainContainer}>
            {/* //=== name === */}
            <View style={styles.inputContainer}>
              <TextInput
                type="outlined"
                underlineColorAndroid={false}
                underlineColor="transparent" 
                style={styles.inputField}
                editable={isEdit}
                onChangeText={(val)=>{this.setState({
                  name: val
                })}}
                label={'FullName'}
                placeholder={'FullName'}
                value={name}
                theme={{ colors: { 
                  text: colors.primary,
                  primary: colors.grayColor,
                  placeholder: colors.grayColor,
                  underlineColor: 'transparent',
                }}}
              />
            </View>
            {/* //=== gender === */}
            <View style={styles.inputContainer}>
              {isEdit?
                <View style={styles.viewText}>
                  <View>
                    <Text style={styles.labelText2}>
                      Gender
                    </Text>
                  </View>
                  <Dropdown
                    labelHeight={0}
                    data={genderData}
                    placeholder={'Gender'}
                    underlineColor="transparent" 
                    placeholderTextColor={colors.primary}
                    value={gender}
                    renderAccessory={this.renderArrow}
                    containerStyle={styles.dropDownContainer}
                    pickerStyle={styles.pickerStyles}
                    inputContainerStyle={styles.inputContainerStyles}
                    textColor={colors.primary}
                    itemColor={colors.primary}
                    fontSize={resonsiveText(12)}
                    onChangeText={(val)=>{this.setState({
                      gender: val
                    })}}
                    dropdownOffset={{top: 0, left: 0}}
                    rippleOpacity={0}
                  />
                </View>
              :
                <TextInput
                  type="outlined"
                  underlineColorAndroid={false}
                  underlineColor="transparent" 
                  style={styles.inputField}
                  editable={isEdit}
                  label={'Gender'}
                  placeholder={'Gender'}
                  value={gender}
                  theme={{ colors: { 
                    text: colors.primary,
                    primary: colors.grayColor,
                    placeholder: colors.grayColor,
                    underlineColor: 'transparent',
                  }}}
                />
              }
            </View>
            {/* //=== Dob === */}
            <View style={styles.inputContainer}>
              {isEdit?
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={()=>this.setState({isDatePickerOpen: true})}
                  style={styles.viewText}>
                  <View>
                    <Text style={styles.labelText2}>
                      Date of Birth
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.nameText}>
                      {moment(dob).format('YYYY-MM-DD')}
                    </Text>
                  </View>
                </TouchableOpacity>
              :
                <TextInput
                  type="outlined"
                  underlineColorAndroid={false}
                  underlineColor="transparent" 
                  style={styles.inputField}
                  editable={isEdit}
                  label={'Date of Birth'}
                  placeholder={'Date of Birth'}
                  value={dob? moment(dob).format('YYYY-MM-DD'): ''}
                  theme={{ colors: { 
                    text: colors.primary,
                    primary: colors.grayColor,
                    placeholder: colors.grayColor,
                    underlineColor: 'transparent',
                  }}}
                />
              }
            </View>
            {/* //=== Country === */}
            <View style={styles.inputContainer}>
              <TextInput
                type="outlined"
                underlineColorAndroid={false}
                underlineColor="transparent" 
                style={styles.inputField}
                editable={isEdit}
                label={'Country'}
                placeholder={'Country'}
                value={country}
                theme={{ colors: { 
                  text: colors.primary,
                  primary: colors.grayColor,
                  placeholder: colors.grayColor,
                  underlineColor: 'transparent',
                }}}
              />
            </View>
            {/* //=== City === */}
            <View style={styles.inputContainer}>
              <TextInput
                type="outlined"
                underlineColorAndroid={false}
                underlineColor="transparent" 
                style={styles.inputField}
                editable={isEdit}
                label={'City'}
                placeholder={'City'}
                value={city}
                theme={{ colors: { 
                  text: colors.primary,
                  primary: colors.grayColor,
                  placeholder: colors.grayColor,
                  underlineColor: 'transparent',
                }}}
              />
            </View>
            {/* === number === */}
            <View style={styles.rowContainer}>
              {/* === area code === */}
              <View style={styles.cloumn1}>
                <View style={{...styles.inputContainer,marginBottom: 0}}>
                  <TextInput
                    type="outlined"
                    underlineColorAndroid={false}
                    underlineColor="transparent" 
                    style={styles.inputField}
                    editable={isEdit}
                    label={'Area Code'}
                    placeholder={'Area Code'}
                    value={areaCode}
                    theme={{ colors: { 
                      text: colors.primary,
                      primary: colors.grayColor,
                      placeholder: colors.grayColor,
                      underlineColor: 'transparent',
                    },
                  }}
                  />
                </View>
              </View>
              {/* === Mobile Number === */}
              <View style={styles.cloumn2}>
                <View style={{...styles.inputContainer,marginBottom: 0}}>
                  <TextInput
                    type="outlined"
                    underlineColorAndroid={'transparent'}
                    underlineColor="transparent" 
                    style={styles.inputField}
                    editable={isEdit}
                    label={'Mobile Number'}
                    placeholder={'Mobile Number'}
                    keyboardType='numeric'
                    returnKeyType='done'
                    value={mobileNum}
                    onChangeText={(mobileNum)=>{this.setState({
                      mobileNum
                    })}}
                    theme={{ colors: { 
                      text: colors.primary,
                      primary: colors.grayColor,
                      placeholder: colors.grayColor,
                      underlineColor: 'transparent',
                    }}}
                  />
                </View>
              </View>
          </View>
            {/* //=== EmailId === */}
            <View style={styles.inputContainer}>
              <TextInput
                type="outlined"
                underlineColorAndroid={false}
                underlineColor="transparent" 
                style={styles.inputField}
                editable={isEdit}
                label={'EmailId'}
                placeholder={'EmailId'}
                value={email}
                onChangeText={(email)=>{this.setState({
                  email
                })}}
                theme={{ colors: { 
                  text: colors.primary,
                  primary: colors.grayColor,
                  placeholder: colors.grayColor,
                  underlineColor: 'transparent',
                }}}
              />
            </View>
            {/* //=== short bio === */}
            <View style={styles.inputContainer2}>
              <TextInput
                type="outlined"
                underlineColorAndroid={false}
                underlineColor="transparent" 
                style={styles.inputField2}
                editable={isEdit}
                label={'Short Bio'}
                placeholder={'Short Bio'}
                blurOnSubmit={true}
                onChangeText={(boiText)=>{this.setState({
                  boiText
                })}}
                value={boiText}
                multiline={true}
                bounces={false}
                theme={{ colors: { 
                  text: colors.primary,
                  primary: colors.grayColor,
                  placeholder: colors.grayColor,
                  underlineColor: 'transparent',
                }}}
              />
            </View>
          </View>
        </View>
        {Platform.OS==='ios' && isDatePickerOpen &&
            <TouchableOpacity 
              style={styles.doneButton}
              activeOpacity={0.8}
              onPress={()=>{this.setState({isDatePickerOpen: false})}}>
              <Text style={styles.doneText}>
                Done
              </Text>
            </TouchableOpacity>
          }
          {isDatePickerOpen &&
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
      </KeyboardAwareScrollView>
    );
  }
}

//===  make components available outside ===
export default MyProfileScreen;