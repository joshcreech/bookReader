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
//=== star ====
import {AirbnbRating} from 'react-native-elements';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class HomeScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      firstdata: firstData,
    }
  }

  render() {
    let {
      firstdata,
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
                Home
              </Text>
            </View>
            
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.plusIcon}
              onPress={()=>{this.props.navigation.navigate('WriteNewStory')}}
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
          <View style={styles.mainContainer}>
            {/* === first list === */}
            <View style={styles.rowContainer}>
              <FlatList
                data={firstdata}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                extraData={this.state}
                renderItem={({item,index}) =>{
                  const _that = this;
                return(
                  <View style={{paddingTop: 12}}>
                    <View 
                      style={{
                      ...styles.rectangleContainer,
                      backgroundColor: colors.borderColor
                    }}>
                      <View>
                        {/* === book name === */}
                        <View>
                          <Text style={styles.titleText}>
                            {item.name}
                          </Text>
                        </View>
                        {/* === subtitle  === */}
                        <View>
                          <Text style={styles.subTitleText}>
                            {item.subTitle}
                          </Text>
                        </View>
                        {/* === author name === */}
                        <View>
                          <Text style={styles.authorText}>
                            {item.authorName}
                          </Text>
                        </View>

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

                        {/* === redMore Button === */}
                        <TouchableOpacity 
                          style={styles.readmoreButton}
                          activeOpacity={0.8}
                          onPress={()=>{this.props.navigation.navigate('Bookmark')}}
                          >
                          <Text style={styles.readMoreText}>
                            READ
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.bookImageStyle1}>
                      <Image
                        source={item.imageUrl}
                        style={styles.imageStyle}
                      />
                    </View>
                  </View>
                )}}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            {/* === continue reading === */}
            <View style={styles.headingView}>
              <View>
                <Text style={styles.headingText}>
                  Continue Reading
                </Text>
              </View>
              <TouchableHighlight 
                activeOpacity={0.8}
                //onPress={()=>{this.props,naigation.navigate('')}}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.headingText2}>
                    See All
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.rowContainer}>
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
                    <View>
                      <Text numberOfLines={2} style={styles.readingBook}>
                        {item.subTitle}
                      </Text>
                    </View>
                  </View>
                )}}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            {/* === Recently Added === */}
            <View style={styles.headingView}>
              <View>
                <Text style={styles.headingText}>
                  Recently Added
                </Text>
              </View>
              <TouchableHighlight 
                activeOpacity={0.8}
                //onPress={()=>{this.props,naigation.navigate('')}}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.headingText2}>
                    See All
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.rowContainer}>
              <FlatList
                data={firstdata}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                extraData={this.state}
                renderItem={({item,index}) =>{
                  const _that = this;
                return(
                  <View style={styles.boxContainer2}>
                    <View style={styles.boxStyle2}>
                      <Image
                        style={styles.imageStyle2}
                        source={item.imageUrl}
                      />
                    </View>
                    <View>
                      <Text numberOfLines={2} style={styles.readingBook}>
                        {item.subTitle}
                      </Text>
                    </View>
                  </View>
                )}}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            {/* === continue reading === */}
            <View style={styles.headingView}>
              <View>
                <Text style={styles.headingText}>
                  Continue Reading
                </Text>
              </View>
              <TouchableHighlight 
                activeOpacity={0.8}
                //onPress={()=>{this.props,naigation.navigate('')}}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.headingText2}>
                    See All
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.rowContainer}>
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
                    <View>
                      <Text numberOfLines={2} style={styles.readingBook}>
                        {item.subTitle}
                      </Text>
                    </View>
                  </View>
                )}}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            {/* === Most Popular === */}
            <View style={styles.headingView}>
              <View>
                <Text style={styles.headingText}>
                  Most Popular
                </Text>
              </View>
              <TouchableHighlight 
                activeOpacity={0.8}
                //onPress={()=>{this.props,naigation.navigate('')}}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.headingText2}>
                    See All
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.rowContainer}>
              <FlatList
                data={firstdata}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                extraData={this.state}
                renderItem={({item,index}) =>{
                  const _that = this;
                return(
                  <View style={styles.boxContainer2}>
                    <View style={styles.boxStyle2}>
                      <Image
                        style={styles.imageStyle2}
                        source={item.imageUrl}
                      />
                    </View>
                    <View>
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
          
      </View>
    );
  }
}

//===  make components available outside ===
export default HomeScreen;