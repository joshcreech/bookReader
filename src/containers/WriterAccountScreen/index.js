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
import WriterSideBar from '../../components/WriterSideBar';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class WriterAccountScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      name: 'Abhi Raj',
      point: 50,
      isActive: false,
    }
  }

  handlePress=(screenName,value,indexVal)=>{
    this.setState({
      isActive: value,
    })
    if(indexVal){
      this.props.navigation.replace(screenName,{index: indexVal})
    }else{
      this.props.navigation.navigate(screenName,{index: indexVal})
    }
  }

  render() {
    let {
      name,
      point,
      isActive
    } = this.state
    return (
      // === side bar ===
      <ScalingDrawer 
        tapToClose={true}
        minimizeFactor={0.5}
        swipeOffset={10}
        scalingFactor={0.8}
        ref={ref => this._drawer = ref}
        content={<WriterSideBar navigation={this.props.navigation}/>}
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
                onPress={()=>{this._drawer.open()}}
              >
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icons/toggle.svg')}
                />
              </TouchableOpacity>
              <View>
                <Text style={styles.headerText}>
                  My Account
                </Text>
              </View>
             <View/>
            </View>
          </ImageBackground>
            {/* === main content === */}
            <View style={styles.mainContainer}>
              <View style={styles.imageCon}>
                <View style={styles.centerAlgin}>
                    {/* === book image  === */}
                    <View style={styles.userImageStyle}>
                      <Image
                        style={styles.imageStyle}
                        source={require('../../assets/placeHolder/user.svg')}
                      />
                    </View>
                    {/* //===name === */}
                    <View style={styles.nameTextView}>
                      <Text 
                        numberOfLines={1} 
                        style={styles.nameTxt}>
                        {name}
                      </Text>
                    </View>
                    {/* //=== reward === */}
                    <View style={{marginTop:3}}>
                      <Text 
                        numberOfLines={1} 
                        style={styles.pointTxt}>
                        Reward point :{point}
                      </Text>
                    </View>
                  </View>
              </View>
              <ScrollView 
                style={styles.scrollView}
                bounces={false}>
                {/* //===list === */}
                <View style={styles.listView}>
                  {/* //=== account === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('ReaderMain',1,3)}}
                    activeOpacity={0.8}
                    style={{
                      ...styles.rowContainer,
                      backgroundColor: isActive===1? colors.submitColor: colors.listColor
                    }}>
                      <View style={styles.rowContainer2}>
                        {/* //=== icons === */}
                        <View style={styles.iconsStyle}>
                          <Image
                            style={styles.imageStyle}
                            source={isActive===1 ?
                                require('../../assets/icons/userOn.svg')
                              :
                                require('../../assets/icons/tabUser.svg')
                            }
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.optionTxt}>
                            My Profile
                          </Text>
                        </View>
                      </View>
                      {/* //=== right icon === */}
                      <View style={{
                        ...styles.rightIcon,
                        backgroundColor: isActive===1? colors.submitColor33: colors.listColor
                        }}>
                        <Image
                          source={require('../../assets/icons/rightArrow.svg')}
                          style={styles.imageStyle}
                        />
                      </View>
                  </TouchableOpacity>
                  {/* === bookMark === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('MyBookmarks',2)}}
                    activeOpacity={0.8}
                    style={{
                      ...styles.rowContainer,
                      backgroundColor: isActive===2 ? colors.submitColor: colors.listColor
                    }}>
                      <View style={styles.rowContainer2}>
                        {/* //=== icons === */}
                        <View style={styles.iconsStyle}>
                          <Image
                            style={styles.imageStyle}
                            source={isActive===2 ?
                              require('../../assets/icons/bookmarkOn.svg')
                            :
                              require('../../assets/icons/bookmark.svg')
                            }
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.optionTxt}>
                            My Bookmarks
                          </Text>
                        </View>
                      </View>
                      {/* //=== right icon === */}
                      <View style={{
                        ...styles.rightIcon,
                        backgroundColor: isActive===2? colors.submitColor33: colors.listColor
                        }}>
                        <Image
                          source={require('../../assets/icons/rightArrow.svg')}
                          style={styles.imageStyle}
                        />
                      </View>
                  </TouchableOpacity>
                  {/* === my book === */}
                  <TouchableOpacity
                     onPress={()=>{this.handlePress('ReaderMain',3,2)}}
                    activeOpacity={0.8}
                    style={{
                      ...styles.rowContainer,
                      backgroundColor: isActive===3 ? colors.submitColor: colors.listColor
                    }}>
                      <View style={styles.rowContainer2}>
                        {/* //=== icons === */}
                        <View style={styles.iconsStyle}>
                          <Image
                            style={styles.imageStyle}
                            source={isActive===3 ?
                                require('../../assets/icons/my-bookOn.svg')
                              :
                                require('../../assets/icons/my-book.svg')
                            }
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.optionTxt}>
                            My Books
                          </Text>
                        </View>
                      </View>
                      {/* //=== right icon === */}
                      <View style={{
                        ...styles.rightIcon,
                        backgroundColor: isActive===3? colors.submitColor33: colors.listColor
                        }}>
                        <Image
                          source={require('../../assets/icons/rightArrow.svg')}
                          style={styles.imageStyle}
                        />
                      </View>
                  </TouchableOpacity>
                  {/* === Sold Book === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('MyRewards',4)}}
                    activeOpacity={0.8}
                    style={{
                      ...styles.rowContainer,
                      backgroundColor: isActive===4 ? colors.submitColor: colors.listColor
                    }}>
                      <View style={styles.rowContainer2}>
                        {/* //=== icons === */}
                        <View style={styles.iconsStyle}>
                          <Image
                            style={styles.imageStyle}
                            source={isActive===4 ?
                                require('../../assets/icons/solid-active.svg')
                              :
                                require('../../assets/icons/solid.svg')
                            }
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.optionTxt}>
                            Sold Book
                          </Text>
                        </View>
                      </View>
                      {/* //=== right icon === */}
                      <View style={{
                        ...styles.rightIcon,
                        backgroundColor: isActive===4? colors.submitColor33: colors.listColor
                        }}>
                        <Image
                          source={require('../../assets/icons/rightArrow.svg')}
                          style={styles.imageStyle}
                        />
                      </View>
                  </TouchableOpacity>
                  {/* === Money Earned === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('MyRewards',5)}}
                    activeOpacity={0.8}
                    style={{
                      ...styles.rowContainer,
                      backgroundColor: isActive===5 ? colors.submitColor: colors.listColor
                    }}>
                      <View style={styles.rowContainer2}>
                        {/* //=== icons === */}
                        <View style={styles.iconsStyle}>
                          <Image
                            style={styles.imageStyle}
                            source={isActive===5 ?
                                require('../../assets/icons/rewardOn.svg')
                              :
                                require('../../assets/icons/reward.svg')
                            }
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.optionTxt}>
                            Money Earned
                          </Text>
                        </View>
                      </View>
                      {/* //=== right icon === */}
                      <View style={{
                        ...styles.rightIcon,
                        backgroundColor: isActive===5? colors.submitColor33: colors.listColor
                        }}>
                        <Image
                          source={require('../../assets/icons/rightArrow.svg')}
                          style={styles.imageStyle}
                        />
                      </View>
                  </TouchableOpacity>
                  {/* === my reward === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('MyRewards',6)}}
                    activeOpacity={0.8}
                    style={{
                      ...styles.rowContainer,
                      backgroundColor: isActive===6 ? colors.submitColor: colors.listColor
                    }}>
                      <View style={styles.rowContainer2}>
                        {/* //=== icons === */}
                        <View style={styles.iconsStyle}>
                          <Image
                            style={styles.imageStyle}
                            source={isActive===6 ?
                                require('../../assets/icons/rewardOn.svg')
                              :
                                require('../../assets/icons/reward.svg')
                            }
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.optionTxt}>
                            My Rewards
                          </Text>
                        </View>
                      </View>
                      {/* //=== right icon === */}
                      <View style={{
                        ...styles.rightIcon,
                        backgroundColor: isActive===6? colors.submitColor33: colors.listColor
                        }}>
                        <Image
                          source={require('../../assets/icons/rightArrow.svg')}
                          style={styles.imageStyle}
                        />
                      </View>
                  </TouchableOpacity>
                  {/* === My Purchase === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('RewardsHistory',7)}}
                    activeOpacity={0.8}
                    style={{
                      ...styles.rowContainer,
                      backgroundColor: isActive===7 ? colors.submitColor: colors.listColor
                    }}>
                      <View style={styles.rowContainer2}>
                        {/* //=== icons === */}
                        <View style={styles.iconsStyle}>
                          <Image
                            style={styles.imageStyle}
                            source={isActive===7 ?
                                require('../../assets/icons/purchaseOn.svg')
                              :
                                require('../../assets/icons/purchase.svg')
                            }
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.optionTxt}>
                            My Purchase
                          </Text>
                        </View>
                      </View>
                      {/* //=== right icon === */}
                      <View style={{
                        ...styles.rightIcon,
                        backgroundColor: isActive===7? colors.submitColor33: colors.listColor
                        }}>
                        <Image
                          source={require('../../assets/icons/rightArrow.svg')}
                          style={styles.imageStyle}
                        />
                      </View>
                  </TouchableOpacity>
                  {/* === preffered book === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('PreferredBooks',8)}}
                    activeOpacity={0.8}
                    style={{
                      ...styles.rowContainer,
                      backgroundColor: isActive===8 ? colors.submitColor: colors.listColor
                    }}>
                      <View style={styles.rowContainer2}>
                        {/* //=== icons === */}
                        <View style={styles.iconsStyle}>
                          <Image
                            style={styles.imageStyle}
                            source={isActive===8 ?
                                require('../../assets/icons/preferred-bookOn.svg')
                              :
                                require('../../assets/icons/preferred-book.svg')
                            }
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.optionTxt}>
                            Preferred Books
                          </Text>
                        </View>
                      </View>
                      {/* //=== right icon === */}
                      <View style={{
                        ...styles.rightIcon,
                        backgroundColor: isActive===8? colors.submitColor33: colors.listColor
                        }}>
                        <Image
                          source={require('../../assets/icons/rightArrow.svg')}
                          style={styles.imageStyle}
                        />
                      </View>
                  </TouchableOpacity>
                  {/* === Logout === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('Login',9)}}
                    activeOpacity={0.8}
                    style={{
                      ...styles.rowContainer,
                      backgroundColor: isActive===9 ? colors.submitColor: colors.listColor
                    }}>
                      <View style={styles.rowContainer2}>
                        {/* //=== icons === */}
                        <View style={styles.iconsStyle}>
                          <Image
                            style={styles.imageStyle}
                            source={isActive===9 ?
                                require('../../assets/icons/logoutOn.svg')
                              :
                                require('../../assets/icons/logout.svg')
                            }
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.optionTxt}>
                            Logout
                          </Text>
                        </View>
                      </View>
                      {/* //=== right icon === */}
                      <View style={{
                        ...styles.rightIcon,
                        backgroundColor: isActive===9? colors.submitColor33: colors.listColor
                        }}>
                        <Image
                          source={require('../../assets/icons/rightArrow.svg')}
                          style={styles.imageStyle}
                        />
                      </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
          </View>
        </View>
      </ScalingDrawer>
    );
  }
}

//===  make components available outside ===
export default WriterAccountScreen;