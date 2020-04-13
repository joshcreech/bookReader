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

import {firstData} from './data';
//=== star ====
import {AirbnbRating} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import LinearGradient from 'react-native-linear-gradient';
//=== keyboardAware ===
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class MyBookScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      firstdata: firstData,
      searchKey: '',
      authorName: '',
      language: '',
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

  render() {
    let {
      firstdata,
      searchKey,
      authorName,
      language,
    } = this.state
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
                My Books
              </Text>
            </View>
            
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.plusIcon}
            //onPress={()=>{}}
            >
            <Image
              style={styles.imageStyle}
              source={require('../../assets/icons/plusCircle.svg')}
            />
            </TouchableOpacity>
          </View>
          {/* //==== content ===  */}
          <View style={styles.contentView}>
            {/* === Search === */}
            <LinearGradient 
              start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
              style={styles.gradientStyle}
              colors={[colors.borderColor,colors.inputGradient]}>
              <View style={styles.rowContainer}>
                <View style={styles.inputField}>
                  <TextInput
                    underlineColorAndroid={'transparent'}
                    placeholder={'Search Here'}
                    placeholderTextColor={colors.grayColor}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    blurOnSubmit={false}
                    returnKeyType={'done'}
                    value={searchKey}
                    onSubmitEditing={()=>{Keyboard.dismiss()}}
                    onChangeText={(val)=>{this.setState({searchKey: val})}}
                    style={styles.inputStyle}/> 
                </View>
                <View style={styles.mailIcon}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../assets/icons/search.svg')}
                  />
                </View>
              </View>
            </LinearGradient>
          </View>
        </ImageBackground>
          {/* === main content === */}
          <View style={styles.mainContainer}>
            {/* === first list === */}
          <View style={styles.rowContainer2}>
            <FlatList
              data={firstdata}
              showsHorizontalScrollIndicator={false}
              extraData={this.state}
              renderItem={({item,index}) =>{
                const _that = this;
              return(
                <View 
                  style={{
                  ...styles.rectangleContainer,
                }}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>this.props.navigation.navigate('BookDetails')} 
                    style={styles.bookImageStyle1}>
                    <Image
                      source={item.imageUrl}
                      style={styles.imageStyle}
                    />
                  </TouchableOpacity>
                  <View>
                    {/* === book name === */}
                    <View>
                      <Text style={styles.titleText}>
                        {item.name}
                      </Text>
                    </View>
                    {/* === author  === */}
                    <View style={styles.rowContainer3}>
                      <View>
                        <Text style={styles.subheadingText}>
                          Author:
                        </Text>
                      </View>
                      <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={()=>{this.props.navigation.navigate('AuthorInfo')}}
                        style={styles.greenView}>
                        <Text style={styles.greenText}>
                          {item.authorName}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {/* === Language  === */}
                    <View style={styles.rowContainer3}>
                      <View>
                        <Text style={styles.subheadingText}>
                          Format:
                        </Text>
                      </View>
                      <View style={styles.normalView}>
                        <Text style={styles.subheadingText}>
                          {item.format}
                        </Text>
                      </View>
                    </View>
                    {/* === Language  === */}
                    <View style={styles.rowContainer3}>
                      <View>
                        <Text style={styles.subheadingText}>
                          Language:
                        </Text>
                      </View>
                      <View style={styles.normalView}>
                        <Text style={styles.subheadingText}>
                          {item.language}
                        </Text>
                      </View>
                    </View>
                    {/* === Category  === */}
                    <View style={styles.rowContainer3}>
                      <View>
                        <Text style={styles.subheadingText}>
                          Category:
                        </Text>
                      </View>
                      <View style={styles.normalView}>
                        <Text style={styles.subheadingText}>
                          {item.category}
                        </Text>
                      </View>
                    </View>
                    
                    <View style={styles.rowContainer5}>
                      <View>
                        {/* === Category  === */}
                        <View style={styles.rowContainer3}>
                          {/* === Rating === */}
                          <View style={styles.ratingView}>
                            <AirbnbRating
                              defaultRating={item.rating}
                              selectedColor={colors.yellowColor}
                              size={10}
                              fractions={true}
                              isDisabled={true}
                              showRating={false}
                              starStyle={{padding: 0,backgroundColor: 'transparent',margin: 0,}}
                            />
                          </View>
                          <View style={styles.overallRating}>
                            <Text style={styles.subheadingText}>
                              {item.rating}/5
                            </Text>
                          </View>
                        </View>

                        {/* === Review  === */}
                        <View style={styles.rowContainer3}>
                          <View>
                            <Text style={styles.subheadingText}>
                              Review:
                            </Text>
                          </View>
                          <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={()=>this.props.navigation.navigate('Review')} 
                            style={{...styles.greenView,borderBottomWidth: 0}}>
                            <Text style={styles.greenText}>
                              {item.review}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>

                      {/* === redMore Button === */}
                      <TouchableOpacity 
                        style={styles.readmoreButton}
                        activeOpacity={0.8}
                        //onPress={()=>{}}
                        >
                        <Text style={styles.readMoreText}>
                          READ
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          </View>
      </View>
    );
  }
}

//===  make components available outside ===
export default MyBookScreen;