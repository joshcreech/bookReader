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
import {firstData} from './data';
import LinearGradient from 'react-native-linear-gradient';
//=== star ====
import {
  AirbnbRating,
} from 'react-native-elements';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class MyBookmarksScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      firstData: firstData,
    }
  }

  render() {
    let {
      firstData
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
        <View style={styles.screenContainer}>
          <StatusBar 
            backgroundColor={colors.circleColor} 
            barStyle="light-content"
            translucent={false}
          />
            {/* === header === */}
          <ImageBackground 
            style={styles.headerContainer2} 
            source={require('../../assets/images/bookmark-bg.svg')}>
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
                  My BookMarks
                </Text>
              </View>
              
              <TouchableOpacity 
                activeOpacity={0.8}
                //onPress={()=>}
                >
                <LinearGradient 
                  start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                  style={styles.gradientStyle}
                  colors={[colors.borderColor,colors.inputGradient]}>
                  <View style={styles.searchIcon}>
                    <Image
                      style={styles.imageStyle}
                      source={require('../../assets/icons/search.svg')}
                    />
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ImageBackground>
            {/* === main content === */}
          <View style={styles.mainContainer}>
            <FlatList
              data={firstData}
              showsHorizontalScrollIndicator={false}
              extraData={this.state}
              renderItem={({item,index}) =>{
                const _that = this;
              return(
                <View style={styles.rowContainer}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>this.props.navigation.navigate('BookDetails')} 
                    style={styles.bookImageStyle1}>
                    <Image
                      source={item.imageUrl}
                      style={styles.imageStyle2}
                    />
                  </TouchableOpacity>
                  <View style={styles.cloumnStyle}>
                    {/* === book text === */}
                    <TouchableOpacity
                      activeOpacity={0.8} 
                      onPress={()=>this.props.navigation.navigate('Bookmark')}
                      style={styles.bookView}>
                      <Text style={styles.bookName}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                    <View style={styles.rowContainer2}>
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
                    {/* === Formate  === */}
                    <View style={{...styles.rowContainer2,marginTop: 15}}>
                      <View>
                        <Text style={styles.subheadingText}>
                          Format:
                        </Text>
                      </View>
                      <View style={styles.rowHelpView}>
                        <Text style={styles.subheadingText}>
                          {item.format}
                        </Text>
                      </View>
                    </View>
                    {/* === language  === */}
                    <View style={{...styles.rowContainer2,marginTop: 5}}>
                      <View>
                        <Text style={styles.subheadingText}>
                          Language:
                        </Text>
                      </View>
                      <View style={styles.rowHelpView}>
                        <Text style={styles.subheadingText}>
                          {item.language}
                        </Text>
                      </View>
                    </View>
                    <View style={{...styles.rowContainer2,marginTop: 15,marginBottom: 3}}>
                      <View style={styles.circleStyle}/>
                      <View style={styles.lineStyle}/>
                      <View style={styles.circleStyle}/>
                    </View>
                    {/* === second row === */}
                    <View style={styles.rowContainer3}>
                      <View>
                        {/* === Category  === */}
                        <View style={styles.rowContainer2}>
                          {/* === Rating === */}
                          <View style={styles.ratingView}>
                            <AirbnbRating
                              defaultRating={item.rating}
                              selectedColor={colors.yellowColor}
                              size={10}
                              fractions={true}
                              isDisabled={true}
                              showRating={false}
                              starStyle={{
                                padding: 0,
                                backgroundColor: 'transparent',
                                margin: 0,
                              }}
                            />
                          </View>
                          <View style={styles.overallRating}>
                            <Text style={styles.subheadingText}>
                              {item.rating}/5
                            </Text>
                          </View>
                        </View>
                      </View>
                      {/* === link list === */}
                      <View style={styles.rowContainer2}>
                        {/* === share  === */}
                        <TouchableOpacity 
                          //onPress={()=>}
                          activeOpacity={0.8}
                          style={styles.iconStyle}>
                            <Image
                              style={styles.imageStyle}
                              source={require('../../assets/icons/share-circle.svg')}
                            />
                        </TouchableOpacity>
                        {/* === bookmark  === */}
                        <TouchableOpacity 
                          //onPress={()=>}
                          activeOpacity={0.8}
                          style={styles.iconStyle}>
                            <Image
                              style={styles.imageStyle}
                              source={require('../../assets/icons/bookmark-circle.svg')}
                            />
                        </TouchableOpacity>
                        {/* === bookmark  === */}
                        <TouchableOpacity 
                          //onPress={()=>}
                          activeOpacity={0.8}
                          style={styles.iconStyle}>
                            <Image
                              style={styles.imageStyle}
                              source={require('../../assets/icons/heart-circle.svg')}
                            />
                        </TouchableOpacity>
                      </View>
                    </View>
                    {/* === Review  === */}
                    <View style={{...styles.rowContainer2}}>
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
                </View>
              )}}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </ScalingDrawer>
    );
  }
}

//===  make components available outside ===
export default MyBookmarksScreen;