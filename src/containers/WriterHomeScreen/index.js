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
  TouchableHighlight,
} from 'react-native';
import {firstData} from './data';
//=== library ====
import Modal from 'react-native-modal';
import {AirbnbRating} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class WriterHomeScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      firstdata: firstData,
      publishCount: 53,
      bookRating: 15,
      download: 35,
      sold: 12,
      rating: 3,
      isModalOpen: false,
    }
  }

  render() {
    let {
      firstdata,
      publishCount,
      bookRating,
      download,
      sold,
      rating,
      isModalOpen
    } = this.state
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
                Welocome User
              </Text>
            </View>
            
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.plusIcon}
              onPress={()=>{this.setState({isModalOpen: true})}}
            >
            <Image
              style={styles.imageStyle}
              source={require('../../assets/icons/plusCircle.svg')}
            />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* === main content === */}
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={styles.scrollViewStyle}>
            <View style={styles.onlyAndroid}/>
          <View style={styles.mainContainer}>
            <View style={{paddingRight: 20}}>
              <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                locations={[0.4,0.6]}
                style={styles.gradientStyle}
                colors={[colors.borderColor,colors.inputGradient2]}>
                <View style={styles.supportView}>
                  <View style={styles.threeCol}>
                    {/* ===Published === */}
                    <TouchableOpacity
                      // onPress={()=>}
                      style={styles.buttonView}
                      activeOpacity={0.8}>
                      <View style={styles.countView}>
                        <Text style={styles.titleText}>
                          {publishCount}
                        </Text>
                      </View>
                      <View style={styles.subView}>
                        <Text style={styles.subTitleText}>
                          Published
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.buttonView}
                      // onPress={()=>} 
                      activeOpacity={0.8}>
                      <View style={styles.countView}>
                        <Text style={styles.titleText}>
                          {download}
                        </Text>
                      </View>
                      <View style={styles.subView}>
                        <Text style={styles.subTitleText}>
                          Downloaded
                        </Text>
                      </View>
                    </TouchableOpacity>
                    {/* ===Downloaded === */}
                    <TouchableOpacity
                      style={styles.buttonView}
                      // onPress={()=>} 
                      activeOpacity={0.8}>
                      <View style={styles.countView}>
                        <Text style={styles.titleText}>
                          {bookRating}
                        </Text>
                      </View>
                      <View style={styles.subView}>
                        <Text style={styles.subTitleText}>
                          Book rating and Review
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.threeCol}>
                    {/* ===Published === */}
                    <TouchableOpacity
                      // onPress={()=>}
                      style={styles.buttonView}
                      activeOpacity={0.8}>
                      <View style={styles.countView}>
                        <Text style={styles.titleText}>
                          {sold}
                        </Text>
                      </View>
                      <View style={styles.subView}>
                        <Text style={styles.subTitleText}>
                          Sold
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{...styles.buttonView,marginRight: 60}}
                      // onPress={()=>} 
                      activeOpacity={0.8}>
                      {/* === Rating  === */}
                      <View style={styles.ratingContainer}>
                        <AirbnbRating
                          defaultRating={rating}
                          selectedColor={colors.yellowColorfb}
                          size={12}
                          fractions={true}
                          isDisabled={true}
                          showRating={false}
                          starStyle={styles.starStyles}
                        />
                      </View>
                      <View style={styles.subView}>
                        <Text style={styles.subTitleText}>
                          Overall Rating
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <View/>
                  </View>
                </View>
              </LinearGradient>
            </View>
            {/* === Continue Reading === */}
            <View style={styles.headingView}>
              <View>
                <Text style={styles.headingText}>
                  Continue Reading
                </Text>
              </View>
              {/* <TouchableHighlight 
                activeOpacity={0.8}
                //onPress={()=>{this.props,naigation.navigate('')}}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.headingText2}>
                    See All
                  </Text>
                </View>
              </TouchableHighlight> */}
            </View>
            <View style={styles.listContainer}>
              <FlatList
                data={firstdata}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                extraData={this.state}
                renderItem={({item,index}) =>{
                  const _that = this;
                return(
                  <View style={styles.boxContainer}>
                    <View style={styles.boxStyle}>
                      <Image
                        style={styles.imageStyle2}
                        source={item.imageUrl}
                      />
                    </View>
                    <View style={styles.bookTxtView}>
                      <Text numberOfLines={2} style={styles.readingBook}>
                        {item.subTitle}
                      </Text>
                    </View>
                  </View>
                )}}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            {/* === Most Read === */}
            <View style={styles.headingView}>
              <View>
                <Text style={styles.headingText}>
                  Most Read
                </Text>
              </View>
              {/* <TouchableHighlight 
                activeOpacity={0.8}
                //onPress={()=>{this.props,naigation.navigate('')}}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.headingText2}>
                    See All
                  </Text>
                </View>
              </TouchableHighlight> */}
            </View>
            <View style={styles.listContainer}>
              <FlatList
                data={firstdata}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                extraData={this.state}
                renderItem={({item,index}) =>{
                  const _that = this;
                return(
                  <View style={styles.boxContainer}>
                    <View style={styles.boxStyle}>
                      <Image
                        style={styles.imageStyle2}
                        source={item.imageUrl}
                      />
                    </View>
                    <View style={styles.bookTxtView}>
                      <Text numberOfLines={2} style={styles.readingBook}>
                        {item.subTitle}
                      </Text>
                    </View>
                  </View>
                )}}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </ScrollView>
        {/* //=== Modal selection screens  === */}
        <Modal 
          isVisible={isModalOpen}
          onBackdropPress={()=>this.setState({
            isModalOpen: false,
          })}
          backdropColor={colors.circleColor}
          backdropOpacity={0.7}
        >
          {/* ===  Write a new book === */}
          <View style={styles.viewContainer}>
            <TouchableOpacity
              onPress={()=>{
                this.setState({
                  isModalOpen: false,
                })
                this.props.navigation.navigate('WriteNewStory')
              }}
              activeOpacity={0.8} 
              style={styles.modalButton}>
              <Text style={styles.modalText}>
                Write a new book
              </Text>
            </TouchableOpacity>
            {/* //==== Upload a book === */}
            <TouchableOpacity
              onPress={()=>{
                this.setState({
                  isModalOpen: false,
                })
                this.props.navigation.navigate('NewStory')
              }}
              activeOpacity={0.8} 
              style={{...styles.modalButton,borderBottomWidth: 0,}}>
              <Text style={styles.modalText}>
                Upload a book
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

//===  make components available outside ===
export default WriterHomeScreen;