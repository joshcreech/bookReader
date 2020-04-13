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
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';
import {rewardHistory} from './data';

class RewardsHistoryScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
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
                  Rewards History
                </Text>
              </View>

              <View/>
            </View>
          </ImageBackground>
            {/* === main content === */}
          <View style={styles.mainContainer}>
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

            {/* //==== details about reading === */}
            <View style={{...styles.rowContainer,marginTop: 20}}>
              <View style={styles.customWidth}>
                <Text style={styles.headTxt}>
                  Earned
                </Text>
              </View>
              <View style={styles.customWidth2}>
                <Text style={styles.headTxt}>
                  No. of Pages
                </Text>
              </View>
              <View style={styles.customWidth3}>
                <Text style={styles.headTxt}>
                  Points
                </Text>
              </View>
            </View>
            {/* // ====Read book ===  */}
            <View style={{flex: 1,marginTop:10}}>
              <FlatList
                data={rewardHistory}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                extraData={this.state}
                renderItem={({ item, index }) => {
                  const _that = this;
                  return ( 
                    <View style={{...styles.rowContainer,marginTop: 10}}>
                      <View style={[styles.rowContainer2,styles.customWidth]}>
                        <View>
                          <Text numberOfLines={1} style={styles.opTxt}>
                            Read {item.read} :   
                          </Text>
                        </View>
                        <View style={styles.opt2View}>
                          <Text numberOfLines={1} style={styles.opTxt2}>
                            "Read {item.read} name"
                          </Text>
                        </View>
                      </View>
                      <View style={styles.customWidth2}>
                        <Text style={styles.opTxt}>
                          {item.numPage}
                        </Text>
                      </View>
                      <View style={styles.customWidth3}>
                        <Text style={styles.opTxt}>
                          {item.point}
                        </Text>
                      </View>
                    </View>
                  )
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

//===  make components available outside ===
export default RewardsHistoryScreen;