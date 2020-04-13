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
  Platform,
  Keyboard,
  Dimensions,
  FlatList,
  TouchableHighlight
} from 'react-native';

import {reviewData} from './data';
import LinearGradient from 'react-native-linear-gradient';
//=== star ====
import {
  AirbnbRating,
} from 'react-native-elements';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

const ScreenWidth = Math.round(Dimensions.get('window').width);

class ReviewScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      name: 'Big Magic This is Mystry',
      authorName: "Mr. Vikas",
      review: 100,
      language: 'English',
      format: 'e-book',
      authRating: 4,
      isReadMore: false,
      reviewData: reviewData
    }
  }

  render() {
    let {
      name,
      authorName,
      language,
      format,
      review,
      authRating,
      reviewData,
      isReadMore,
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
              onPress={()=>{this.props.navigation.pop()}}
            >
              <Image
                style={styles.imageStyle}
                source={require('../../assets/icons/backArrow.svg')}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.headerText}>
                Reader Review
              </Text>
            </View>
            
            <View/>
          </View>
        </ImageBackground>
          {/* === main content === */}
          <View style={styles.mainContainer}>
            <View style={styles.rowContainer}>
              <View style={styles.rowContainer2}>
                <View style={styles.bookImage}>
                  <Image 
                    style={styles.imageStyle2}
                    source={require('../../assets/placeHolder/book1.svg')}
                  />
                </View>
                <View style={styles.secondColumn}>
                  {/* === book name === */}
                  <View style={styles.bookView}>
                    <Text numberOfLines={1} style={styles.bookText}>
                      {name}
                    </Text>
                  </View>
                  {/* === author name === */}
                  <View style={{...styles.rowContainer2,marginTop: 5}}>
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
                  {/* === formate === */}
                  <View style={{...styles.rowContainer2,marginTop: 5}}>
                    <Text 
                      numberOfLines={1} 
                      style={styles.otherText}>
                      Format:  {format}
                    </Text>
                  </View>
                  {/* === formate === */}
                  <View style={{...styles.rowContainer2,marginTop: 5}}>
                    <Text 
                      numberOfLines={1} 
                      style={styles.otherText}>
                      Language:  {language}
                    </Text>
                  </View>
                </View>
              </View>
              <LinearGradient 
                start={{x: 0.0, y: 0.7}} end={{x: 1.0, y: 0.1}}
                style={styles.gradientStyle}
                colors={[
                  colors.borderColor,
                  colors.borderColor,
                  colors.borderColor,
                  colors.inputGradient
                ]}>
                <View style={styles.thirdCloumn}>
                  <View>
                    <Text style={styles.ratingText}>
                      4.7
                    </Text>
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
                  <View style={styles.reviewView}>
                    <Text style={styles.reviewText}>
                      {review} Reviews
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
            {/* === list of reviews === */}
            <View style={styles.mainList}>
              <FlatList
                data={reviewData}
                showsHorizontalScrollIndicator={false}
                extraData={this.state}
                renderItem={({item,index}) =>{
                  const _that = this;
                return(
                  <View style={styles.listRowView}>
                     {/* === Image  === */}
                    <View style={styles.reviewerImage}>
                      <Image
                        style={styles.imageStyle}
                        source={item.imageUrl}
                      />
                    </View>
                    <View style={styles.remaingView}>
                       {/* === Name  === */}
                      <View>
                       <Text style={styles.nameText}>
                        {item.name}
                       </Text>
                      </View>
                      {/* === Rating  === */}
                      <View style={styles.ratingView}>
                        <AirbnbRating
                          defaultRating={item.rating}
                          selectedColor={colors.yellowColor}
                          size={12}
                          fractions={true}
                          isDisabled={true}
                          showRating={false}
                          starStyle={styles.starStyles}
                        />
                      </View>
                      {/* //=== book desc === */}
                      <View style={styles.descView}>
                        {isReadMore===index?
                          <Text style={styles.descText}>
                            {item.review}
                          </Text>
                        :
                          <Text style={styles.descText} numberOfLines={4}>
                            {item.review}
                          </Text>
                        }
                      </View>
                      {/* //=== Read More === */}
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=>{this.setState({
                          isReadMore: isReadMore===index ? false: index
                        })}}
                        style={styles.readMoreButton}>
                        <Text style={styles.readMoreTxt}>
                          Read More...
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            {/* //=== load more === */}
            <TouchableOpacity
              activeOpacity={0.8}
              //onPress={()=>this.props.navigation.navigate('ReaderMain')} 
              style={styles.loadButton}>
              <Text style={styles.loadText}>
                LOAD MORE
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

//===  make components available outside ===
export default ReviewScreen;