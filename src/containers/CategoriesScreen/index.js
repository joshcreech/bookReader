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
import { firstData,descData } from './data';
import LinearGradient from 'react-native-linear-gradient';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class CategoriesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
        content={<SideBar navigation={this.props.navigation} />}
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
                onPress={() => { this._drawer.open() }}
              >
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icons/toggle.svg')}
                />
              </TouchableOpacity>
              <View>
                <Text style={styles.headerText}>
                  Category
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
              //onPress={()=>}
              >
                <LinearGradient
                  start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                  style={styles.gradientStyle}
                  colors={[colors.borderColor, colors.inputGradient]}>
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
            <View style={styles.listContainer}>
              <FlatList
                data={firstData}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                extraData={this.state}
                renderItem={({ item, index }) => {
                  const _that = this;
                  return (
                    <View style={styles.rowContainer}>
                      <View style={styles.rowContainer2}>
                        {/* //=== book image === */}
                        <View style={styles.bookImage}>
                          <Image
                            source={item.imageUrl}
                            style={styles.imageStyle2}
                          />
                        </View>
                        {/* //=== type === */}
                        <View style={styles.textBookStyle}>
                          <Text style={styles.textBook}>
                            {item.type}
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=>{this.props.navigation.replace('ReaderMain',{index: 1})}}
                        style={styles.rightArrow}
                      >
                        <Image
                          source={require('../../assets/icons/rightCircleArrow.svg')}
                          style={styles.imageStyle}
                        />
                      </TouchableOpacity>
                    </View>
                  )
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            {/* === footer Box === */}
            <LinearGradient
              start={{ x: 0, y: 0.1 }} end={{ x: 0.1, y: .8 }}
              style={styles.footerContainer}
              colors={[colors.catgoryColor2,colors.catgoryColor3, colors.catgoryColor]}>
              <View style={[styles.footerBox,styles.row]}>
                <View style={{width: '40%'}}>
                  <View>
                    <Text style={styles.bookText}>
                      Books We Love
                    </Text>
                  </View>
                  {/* //=== desc === */}
                  <View style={styles.descView}>
                    <Text
                      numberOfLines={3} 
                      style={styles.descText}>
                      {descData}
                    </Text>
                  </View>
                  {/* //=== submit === */}
                  <TouchableOpacity
                    activeOpacity={0.8}
                    //onPress={()=>this.handleSubmit()} 
                    style={styles.readButton}>
                    <Text style={styles.readText}>
                      Read
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.footerImage}>
                  <Image
                    style={styles.imageStyle2}
                    source={require('../../assets/images/footer-book.svg')}
                  />
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
      </ScalingDrawer>
    );
  }
}

//===  make components available outside ===
export default CategoriesScreen;