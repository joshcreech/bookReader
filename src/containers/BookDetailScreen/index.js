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

//=== star ====
import {
  AirbnbRating,
  CheckBox
} from 'react-native-elements';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class BookDetailScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      name: 'Big Magic This is Mystry',
      rating: 3,
      subTitle: "This is subtitle of this book",
      authorName: "Mr. Vikas anand Sath",
      review: 100,
      language: 'English',
      category: 'Mystry',
      format: 'e-book',
      bookCount: 101,
      authRating: 4,
      point: 50,
      isReadMore: false,
      isChecked: true,
      bookDescText: 'Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with  content. This is required when, for example, the final text is not yet available. Dummy text is also known as',
    }
  }

  render() {
    let {
      name,
      authorName,
      language,
      category,
      format,
      bookDescText,
      bookCount,
      authRating,
      isReadMore,
      point,
      isChecked
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
            source={require('../../assets/icons/main-bg.svg')}>
            <SafeAreaView />
            <View
              style={styles.headerContainer}>
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
                  Book Details
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
                <View style={styles.centerAlgin}>
                  {/* === book image  === */}
                  <View style={styles.bookImageStyle}>
                    <Image
                      style={styles.imageStyle}
                      source={require('../../assets/placeHolder/bookmagic.svg')}
                    />
                  </View>
                  {/* === Rating  === */}
                  <View style={styles.ratingContainer}>
                    <AirbnbRating
                      defaultRating={authRating}
                      selectedColor={colors.yellowColor}
                      size={12}
                      fractions={true}
                      isDisabled={true}
                      showRating={false}
                      starStyle={styles.starStyles}
                    />
                  </View>
                  {/* //=== book name === */}
                  <View style={styles.bookTextView}>
                    <Text 
                      numberOfLines={1} 
                      style={styles.bookNameTxt}>
                      {name}
                    </Text>
                  </View>
                  {/* ===other === */}
                  <View style={[styles.rowView,styles.increaseWidth]}>
                    <View>
                      <View style={styles.rowView}>
                        <View>
                          <Text 
                            numberOfLines={1} 
                            style={styles.otherText}>
                            Author:
                          </Text>
                        </View>
                        <View style={styles.borderView}>
                          <Text 
                            numberOfLines={1} 
                            style={styles.greenTxt}>
                            {authorName}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.secondTextView}>
                      <Text 
                        numberOfLines={1} 
                        style={styles.otherText}>
                        Language:   {language}
                      </Text>
                    </View>
                  </View>
                  {/* === format ==== */}
                  <View style={[styles.rowView,styles.increaseWidth]}>
                    <View style={styles.secondTextView}>
                      <Text 
                        numberOfLines={1} 
                        style={styles.otherText}>
                        Format:  {format}
                      </Text>
                    </View>
                  </View>
                </View>
                {/* //=== book desc === */}
                <View style={styles.descView}>
                  {isReadMore?
                    <Text style={styles.descText}>
                      {bookDescText}
                    </Text>
                  :
                    <Text style={styles.descText} numberOfLines={4}>
                      {bookDescText}
                    </Text>
                  }
                </View>
                {/* //=== Read More === */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={()=>{this.setState({
                    isReadMore: !isReadMore
                  })}}
                  style={styles.readMoreButton}>
                  <Text style={styles.readMoreTxt}>
                    Read More...
                  </Text>
                </TouchableOpacity>
                {/* //=== check box === */}
                <View style={styles.rowContainer2}>
                  <View>
                    <CheckBox
                      center
                      size={10}
                      onPress={()=>{this.setState({
                        isChecked: !isChecked
                      })}}
                      containerStyle={styles.checkBoxContainer}
                      title='Use LOL Points'
                      checkedColor={colors.primary}
                      textStyle={styles.checkBoxTxt}
                      checked={isChecked}
                    />
                  </View>
                  <View>
                    <Text style={styles.pointText}>
                      {point} points
                    </Text>
                  </View>
                </View>
                {/* //=== View Price === */}
                <View style={[styles.rowContainer3,styles.marginIncrease]}>
                  <View>
                    <Text style={styles.pointText}>
                      Total reader price
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.pointText}>
                      {point}
                    </Text>
                  </View>
                </View>
                {/* //=== reward === */}
                <View style={[styles.rowContainer3,{marginTop: 5}]}>
                  <View>
                    <Text style={styles.pointText}>
                      LOL rewards
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.pointText}>
                      10
                    </Text>
                  </View>
                </View>
                {/* ==== total  === */}
                <View style={[styles.rowContainer3,styles.totalView]}>
                  <View>
                    <Text style={styles.pointText}>
                      Total
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.pointText}>
                      60
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={()=>this.props.navigation.navigate('ReaderMain')} 
                  style={styles.cartButton}>
                  <Text style={styles.cartText}>
                    Add to cart
                  </Text>
                </TouchableOpacity>
              </ScrollView>
          </View>
        </View>
      </ScalingDrawer>
    );
  }
}

//===  make components available outside ===
export default BookDetailScreen;