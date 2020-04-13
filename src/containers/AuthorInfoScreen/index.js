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
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class AuthorInfoScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      firstdata: firstData,
      bookCount: 101,
      authRating: 4,
      authDescText: 'Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with  content. This is required when, for example, the final text is not yet available. Dummy text is also known as',
    }
  }

  render() {
    let {
      firstdata,
      authDescText,
      bookCount,
      authRating
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
          source={require('../../assets/images/author-bg.svg')}>
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
                Author Info
              </Text>
            </View>
            
            <View/>
          </View>
        </ImageBackground>
          {/* === main content === */}
          <View style={styles.mainContainer}>
            <ScrollView style={{flex: 1,}} 
              bounces={false}>
              {/* === author === */}
              <View style={styles.rowContainer}>
                <View style={styles.circleView}>
                  <Image 
                    style={styles.imageStyle}
                    source={require('../../assets/placeHolder/user.svg')}
                  />
                </View>
                <View style={styles.secondCloumn}>
                  <View style={styles.rowContainer4}>
                    <View>
                      {/* === auth name == */}
                      <View>
                        <Text style={styles.authText}>
                          Jonh Devo
                        </Text>
                      </View>
                      {/* === auth book count == */}
                      <View>
                        <Text style={styles.booksCount}>
                          Total book {bookCount}
                        </Text>
                      </View>
                    </View>
                    {/* === auth rating == */}
                    <View style={styles.ratingView}>
                      <AirbnbRating
                        defaultRating={authRating}
                        selectedColor={colors.Color}
                        size={15}
                        fractions={true}
                        isDisabled={true}
                        showRating={false}
                        starStyle={{padding: 0,backgroundColor: 'transparent',margin: 0}}
                      />
                    </View>
                  </View>
                  <View style={styles.rowContainer5}>
                    <TouchableOpacity 
                      // onPress={()=>{}}
                      activeOpacity={0.8}
                      style={styles.borderButton}>
                        <Text style={styles.buttonText}>
                          Actions
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      // onPress={()=>{}}
                      activeOpacity={0.8}
                      style={{...styles.borderButton,marginLeft: 8}}>
                        <Text style={styles.buttonText}>
                          Thriller
                        </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* === About the author === */}
              <View style={styles.headingContainer}>
                <Text style={styles.headingText}>
                  About the author
                </Text>
              </View>
              {/* === author description === */}
              <View style={styles.descContainer}>
                <Text style={styles.descText}>
                  {authDescText}
                </Text>
              </View>
              {/* === Heading Top collections === */}
              <View style={styles.headingContainer}>
                <Text style={styles.headingText}>
                  Top collections
                </Text>
              </View>
            {/* === Books List === */}
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
                    <View style={styles.bookImageStyle1}>
                      <Image
                        source={item.imageUrl}
                        style={styles.imageStyle}
                      />
                    </View>
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
                        <View style={styles.greenView}>
                          <Text style={styles.greenText}>
                            {item.authorName}
                          </Text>
                        </View>
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
                        <View style={{...styles.greenView,borderBottomWidth: 0}}>
                          <Text style={styles.greenText}>
                            {item.review}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )}}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            {/* === redMore Button === */}
            <TouchableOpacity 
              style={styles.readmoreButton}
              activeOpacity={0.8}
              //onPress={()=>{}}
              >
              <Text style={styles.readMoreText}>
                SEE ALL
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

//===  make components available outside ===
export default AuthorInfoScreen;