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

class WriterMyBookScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      isActive: false,
    }
  }

  handlePress=(screenName,value,indexVal)=>{
    this.setState({
      isActive: value,
    })
    // if(indexVal){
    //   this.props.navigation.replace(screenName,{index: indexVal})
    // }else{
    //   this.props.navigation.navigate(screenName,{index: indexVal})
    // }
  }

  render() {
    let {
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
                  My Book
                </Text>
              </View>
             <View/>
            </View>
          </ImageBackground>
            {/* === main content === */}
            <View style={styles.mainContainer}>
              <ScrollView 
                style={styles.scrollView}
                bounces={false}>
                {/* //===list === */}
                <View style={styles.listView}>
                  {/* //=== Published Book === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('WriterMain',1)}}
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
                            Published Book
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
                  {/* === Book in draft === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('WriterMain',2)}}
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
                              require('../../assets/icons/book-in-draft-active.svg')
                            :
                              require('../../assets/icons/book-in-draft-active.svg')
                            }
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.optionTxt}>
                            Book in draft
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
                  {/* === Books in review === */}
                  <TouchableOpacity
                     onPress={()=>{this.handlePress('WriterMain',3)}}
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
                            Books in review
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
                  {/* ===  Books rating and review === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('WriterMain',4)}}
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
                            Books rating and review
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
                  {/* === Write a new book === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('WriterMain',5)}}
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
                                require('../../assets/icons/write-book-active.svg')
                              :
                                require('../../assets/icons/write-book.svg')
                            }
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.optionTxt}>
                            Write a new book
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
                  {/* === Upload a book === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('WriterMain',6)}}
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
                                require('../../assets/icons/upload-book-active.svg')
                              :
                                require('../../assets/icons/upload-book.svg')
                            }
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.optionTxt}>
                            Upload a book
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
                  {/* === Fan club === */}
                  <TouchableOpacity
                    onPress={()=>{this.handlePress('WriterMain',7)}}
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
                                require('../../assets/icons/fan-club-active.svg')
                              :
                                require('../../assets/icons/fan-club.svg')
                            }
                          />
                        </View>
                        <View style={{marginLeft: 20}}>
                          <Text style={styles.optionTxt}>
                            Fan club
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
                </View>
              </ScrollView>
          </View>
        </View>
      </ScalingDrawer>
    );
  }
}

//===  make components available outside ===
export default WriterMyBookScreen;