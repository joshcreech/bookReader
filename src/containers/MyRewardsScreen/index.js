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
//=== side bar ===
import ScalingDrawer from 'react-native-scaling-drawer';
import SideBar from '../../components/SideBar';
import {descData} from './data';
import LinearGradient from 'react-native-linear-gradient';
//=== star ====
import {
  AirbnbRating,
} from 'react-native-elements';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class MyRewardsScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      name: 'Abhi Raj',
      point: 50,
      isActive: false,
    }
  }

  render() {
    let {
      name,
      point,
      isActive,
    } = this.state
    return (
      // === side bar ===
      <ScalingDrawer 
        tapToClose={true}
        minimizeFactor={0.5}
        swipeOffset={10}
        scalingFactor={0.8}
        ref={ref => this._drawer = ref}
        content={<SideBar navigation={this.props.navigation}/>}
      >
        <ScrollView 
          bounces={false}
          style={styles.screenContainer}
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
              source={require('../../assets/images/reward-bg.svg')}>
              <SafeAreaView />
              <View
                style={styles.headerContainer} >
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.menuIcon}
                  onPress={()=>{this._drawer.open()}}
                >
                  <Image
                    style={styles.imageStyle}
                    source={require('../../assets/icons/toggle.svg')}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.headerText}>
                    My Reward
                  </Text>
                </View>

                <View/>
              </View>
            </ImageBackground>
              {/* === main content === */}
            <View style={styles.mainContainer}>
              {/* //=== reward === */}
              <View style={[styles.rowContainer2,styles.alineCenter]}>
                <View>
                  <Text style={styles.pointTxt}>
                    {point} Points
                  </Text>
                </View>
                {/* === / === */}
                <View>
                  <Text style={styles.slashTxt}>
                    /
                  </Text>
                </View>
                {/* //=== dollar === */}
                <View>
                  <Text style={styles.pointTxt}>
                    {point}$
                  </Text>
                </View>
              </View>
              {/* //=== subtitle === */}
              <View style={{...styles.alineCenter,marginTop: 5}}>
                <Text style={styles.subTxt}>
                  Rewards points Balance
                </Text>
              </View>
              {/* === earn === */}
              <View style={{...styles.alineCenter,marginTop: 25}}>
                <Text style={styles.howTxt}>
                  How to earn rewards point?
                </Text>
              </View>
              {/* //=== description === */}
              <View style={styles.descTxtView}>
                <Text style={styles.descTxt}>
                  {descData}
                </Text>
              </View>

              {/* //===details count === */}
              <View style={[styles.rowContainer2,styles.boxStyle]}>
                <View>
                  {/* //===head count === */}
                  <View>
                    <Text style={styles.descTxt}>
                      Total earned
                    </Text>
                  </View>
                  {/* //===count === */}
                  <View style={styles.alineCenter}>
                    <Text style={styles.pointTxt}>
                      {point}
                    </Text>
                  </View>
                </View>
                {/* //=== dollar === */}
                <View style={styles.secondColoumn}>
                  {/* //===head count === */}
                  <View>
                    <Text style={styles.descTxt}>
                      Total burned
                    </Text>
                  </View>
                  {/* //===count === */}
                  <View style={styles.alineCenter}>
                    <Text style={styles.pointTxt}>
                      {point}
                    </Text>
                  </View>
                </View>
              </View>

              {/* //=== Rewards === */}
              <View style={{...styles.alineCenter,marginTop: 5}}>
                <Text style={styles.descTxt}>
                  Remaing {point} earn & burned
                </Text>
              </View>
              {/* === tab === */}
              <View style={styles.tabContainer}>
                 {/* === Earned === */}
                <TouchableOpacity 
                  activeOpacity={0.8} 
                  onPress={()=>{this.setState({
                    isActive: 1,
                  })}}
                  style={{
                    ...styles.tabStyle,
                    borderBottomWidth: isActive===1? 2: 0,
                  }}>
                    <Text style={{
                      ...styles.tabTxt,
                      color: isActive===1? colors.submitColor : colors.primary
                    }}>
                      Earned
                    </Text>
                </TouchableOpacity>
                {/* === burned === */}
                <TouchableOpacity
                  activeOpacity={0.8} 
                  onPress={()=>{this.setState({
                    isActive: 2,
                  })}}
                  style={{
                    ...styles.tabStyle,
                    borderBottomWidth: isActive===2? 2: 0,
                  }}>
                    <Text style={{
                      ...styles.tabTxt,
                      color: isActive===2? colors.submitColor : colors.primary
                    }}>
                      Burned
                    </Text>
                </TouchableOpacity>
              </View>
              {/* //==== details about reading === */}
              <View style={{...styles.rowContainer,marginTop: 10}}>
                <View/>
                <View>
                  <Text style={styles.opTxt}>
                    Points
                  </Text>
                </View>
              </View>
              {/* // ====Read book ===  */}
              <View style={{...styles.rowContainer,marginTop: 10}}>
                <View style={styles.rowContainer2}>
                  <View>
                    <Text style={styles.opTxt}>
                      Read book :   
                    </Text>
                  </View>
                  <View style={styles.opt2View}>
                    <Text style={styles.opTxt2}>
                      "Read book name"
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.opTxt}>
                    {point} Points
                  </Text>
                </View>
              </View>
              {/* // ====Read Artical ===  */}
              <View style={{...styles.rowContainer,marginTop: 10}}>
                <View style={styles.rowContainer2}>
                  <View>
                    <Text style={styles.opTxt}>
                      Read Artical :   
                    </Text>
                  </View>
                  <View style={styles.opt2View}>
                    <Text style={styles.opTxt2}>
                      "Read artical name"
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.opTxt}>
                    {point} Points
                  </Text>
                </View>
              </View>
              {/* === history === */}
              <TouchableOpacity
                  activeOpacity={0.8} 
                  onPress={()=>{this.props.navigation.navigate('RewardsHistory')}}
                  style={styles.historyStyle}>
                    <View>
                      <Text style={styles.historyTxt}>
                        View history
                      </Text>
                    </View>
                    <View style={styles.iconStyle}>
                      <Image 
                        style={styles.imageStyle}
                        source={require('../../assets/icons/down-arrow.svg')}
                      />
                    </View>
                </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ScalingDrawer>
    );
  }
}

//===  make components available outside ===
export default MyRewardsScreen;