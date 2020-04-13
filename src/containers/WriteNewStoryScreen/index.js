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
  TouchableHighlight
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
//=== star ====
import { Dropdown } from 'react-native-material-dropdown';
import LinearGradient from 'react-native-linear-gradient';
//=== keyboardAware ===
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class WriteNewStoryScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      title: '',
      shortDescription: '',
      ageGroup: '',
      story: '',
      language: '',
      category: '',
      imageData: '',
    }
  }

  //=== arrow ===
  renderArrow=()=>{
    return(
      <View style={styles.arrowIcon}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/icons/downArrow.svg')}
        />
      </View> 
    )
  }

  // === Image ===
  OpenImagePicker=()=>{
    const _this = this;
    ImagePicker.openPicker({
      multiple: false,
      mediaType: 'photo',
      includeExif: true,
      waitAnimationEnd: true,
      includeBase64: true,
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
    })
    .then(image => {
      let _that = _this;
      _that.setState({
        imageData: image,
      })
    })
    .catch(function (error) {
      alert(error)
     })
  }

  render() {
    let {
      title,
      shortDescription,
      ageGroup,
      story,
      category,
      language,
      imageData
    } = this.state;

    let categoryData = [{
      value: 'Mystery',
    }, {
      value: 'comic',
    }, {
      value: 'sci fi',
    }];
    let languageData = [{
      value: 'Hindi',
    }, {
      value: 'English',
    }];
    let ageGroupData = [{
      value: '20-30',
    }, {
      value: '30-40',
    }];
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
          <ImageBackground 
            style={styles.headerContainer2} 
            source={require('../../assets/icons/main-bg.svg')}>
            <SafeAreaView />
            <View
              style={styles.headerContainer} >
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.backIcon}
                onPress={()=>{this.props.navigation.pop()}}
              >
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icons/backArrow.svg')}
                />
              </TouchableOpacity>
              <View>
                <Text style={styles.headerText}>
                  New Story
                </Text>
              </View>
              
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.plusIcon}
                onPress={()=>{this.props.navigation.navigate('NewStory')}}
              >
              <Image
                style={styles.imageStyle}
                source={require('../../assets/icons/plusCircle.svg')}
              />
              </TouchableOpacity>
            </View>
          </ImageBackground>
            {/* === main content === */}
          <View style={styles.mainContainer}>
            {/* === book Image === */}
            <View style={styles.boonImageStyle}>
              {imageData.path?
                <Image 
                  style={styles.imageStyle3}
                  source={{uri: imageData.path}}
                />
                :
                  <Image 
                    style={styles.imageStyle2}
                    source={require('../../assets/placeHolder/book1.svg')}
                  />
              }
            </View>
            {/* === change cover === */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={()=>{this.OpenImagePicker()}}
              style={styles.changeCover}
            >
              <Text 
                style={styles.chgTxt}>
                Change cover
              </Text>
            </TouchableOpacity>
            {/* ===  */}
            <View style={styles.formContainers}>
              {/* === Language  ===*/}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                locations={[0.4,0.6]}
                style={styles.gradientStyle}
                colors={[colors.borderColor,colors.inputGradient2]}>
                <View style={styles.rowContainer}>
                  <Dropdown
                    labelHeight={0}
                    data={languageData}
                    placeholder={'Language'}
                    placeholderTextColor={colors.grayColor}
                    value={language}
                    renderAccessory={this.renderArrow}
                    containerStyle={styles.dropDownContainer}
                    pickerStyle={styles.pickerStyles}
                    inputContainerStyle={styles.inputContainerStyles}
                    textColor={colors.primary}
                    itemColor={colors.primary}
                    fontSize={resonsiveText(9)}
                    onChangeText={(val)=>{this.setState({
                      language: val
                    })}}
                    dropdownOffset={{top: 0, left: 0}}
                    rippleOpacity={0}
                  />
                </View>
              </LinearGradient>
              {/* === Category  ===*/}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                locations={[0.4,0.6]}
                style={styles.gradientStyle}
                colors={[colors.borderColor,colors.inputGradient2]}>
                <View style={styles.rowContainer}>
                  <Dropdown
                    labelHeight={0}
                    data={categoryData}
                    placeholder={'Select Category'}
                    placeholderTextColor={colors.grayColor}
                    value={category}
                    renderAccessory={this.renderArrow}
                    containerStyle={styles.dropDownContainer}
                    pickerStyle={styles.pickerStyles}
                    inputContainerStyle={styles.inputContainerStyles}
                    textColor={colors.primary}
                    itemColor={colors.primary}
                    fontSize={resonsiveText(9)}
                    onChangeText={(val)=>{this.setState({
                      category: val
                    })}}
                    dropdownOffset={{top: 0, left: 0}}
                    rippleOpacity={0}
                  />
                </View>
              </LinearGradient>
              {/* === Title === */}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                locations={[0.4,0.6]}
                style={styles.gradientStyle}
                colors={[colors.borderColor,colors.inputGradient2]}>
                <View style={styles.rowContainer}>
                  <View style={styles.inputField}>
                    <TextInput
                      underlineColorAndroid={'transparent'}
                      placeholder={'Title'}
                      placeholderTextColor={colors.grayColor}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      blurOnSubmit={false}
                      returnKeyType={'done'}
                      value={title}
                      onSubmitEditing={()=>{Keyboard.dismiss()}}
                      onChangeText={(val)=>{this.setState({title: val})}}
                      style={styles.inputStyle}/> 
                  </View>
                </View>
              </LinearGradient>
              {/* === Short Description === */}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                locations={[0.4,0.6]}
                style={styles.gradientStyle}
                colors={[colors.borderColor,colors.inputGradient2]}>
                <View style={styles.rowContainer}>
                  <View style={styles.inputField}>
                    <TextInput
                      underlineColorAndroid={'transparent'}
                      placeholder={'Short Description'}
                      placeholderTextColor={colors.grayColor}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      blurOnSubmit={false}
                      returnKeyType={'done'}
                      value={shortDescription}
                      onSubmitEditing={()=>{Keyboard.dismiss()}}
                      onChangeText={(val)=>{this.setState({shortDescription: val})}}
                      style={styles.inputStyle}/> 
                  </View>
                </View>
              </LinearGradient>
              {/* === Age === */}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                locations={[0.4,0.6]}
                style={styles.gradientStyle}
                colors={[colors.borderColor,colors.inputGradient2]}>
                <View style={styles.rowContainer}>
                  <Dropdown
                    labelHeight={0}
                    data={ageGroupData}
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
              {/* === Story === */}
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                locations={[0.4,0.6]}
                style={styles.gradientTxtAreaStyle}
                colors={[colors.borderColor,colors.inputGradient2]}>
                <View style={styles.rowContainer}>
                  <View style={{...styles.inputField,marginTop: 10}}>
                    <TextInput
                      underlineColorAndroid={'transparent'}
                      placeholder={'Story'}
                      placeholderTextColor={colors.grayColor}
                      autoCorrect={false}
                      multiline={true}
                      autoCapitalize={'none'}
                      blurOnSubmit={false}
                      returnKeyType={'done'}
                      value={story}
                      onSubmitEditing={()=>{Keyboard.dismiss()}}
                      onChangeText={(val)=>{this.setState({story: val})}}
                      style={styles.inputStyle}/> 
                  </View>
                </View>
              </LinearGradient>

              {/* === START WRITING === */}
              <TouchableOpacity
                style={styles.startButton}
                activeOpacity={0.8}
                onPress={()=>this.props.navigation.navigate('ReaderMain')}
                >
                  <Text style={styles.startText}>
                    START WRITING
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
export default WriteNewStoryScreen;