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
import Modal from 'react-native-modal';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

class PaymentScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      name: 'Big Magic',
      rating: 3,
      isChecked: true,
      authorName: "Mr. Vikas anand Sath",
      review: 100,
      point: 60,
      language: 'English',
      format: 'e-book',
      imageUrl: require('../../assets/placeHolder/bookmagic.svg'),
      isModalOpen: false,
    }
  }

  render() {
    let {
      name,
      rating,
      authorName,
      review,
      language,
      format,
      imageUrl,
      point,
      isChecked,
      isModalOpen
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
        <ScrollView style={styles.screenContainer} bounces={false} >
          <View style={styles.screenContainer}>
            <StatusBar 
              backgroundColor={colors.circleColor} 
              barStyle="light-content"
              translucent={false}
            />
              {/* === header === */}
            <ImageBackground 
              style={styles.headerContainer2} 
              source={require('../../assets/images/payment-bg.svg')}>
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
                    Payment
                  </Text>
                </View>
                <View/>
              </View>
            </ImageBackground>
              {/* === main content === */}
            <View style={styles.mainContainer}>
              <View style={styles.rowContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={()=>this.props.navigation.navigate('BookDetails')} 
                  style={styles.bookImageStyle1}>
                  <Image
                    source={imageUrl}
                    style={styles.imageStyle2}
                  />
                </TouchableOpacity>
                <View style={styles.cloumnStyle}>
                  {/* === book text === */}
                  <View style={styles.bookView}>
                    <Text style={styles.bookName}>
                      {name}
                    </Text>
                  </View>
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
                        {authorName}
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
                        {format}
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
                        {language}
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
                            defaultRating={rating}
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
                            {rating}/5
                          </Text>
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
                            {review}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              {/* //=== check box === */}
              <View style={styles.rowContainer21}>
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
              <View style={[styles.rowContainer31,styles.marginIncrease]}>
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
              <View style={[styles.rowContainer31,{marginTop: 5}]}>
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
              <View style={[styles.rowContainer31,styles.totalView]}>
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
              {/* //=== payment === */}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>this.setState({
                  isModalOpen: true
                })} 
                style={styles.payButton}>
                <Text style={styles.payText}>
                  PROCEED TO PAY
                </Text>
              </TouchableOpacity>
            </View>
            {/* === payment successfully === */}
            <Modal
              isVisible={isModalOpen} 
              backdropOpacity={0.7}
              backdropColor={colors.circleColor}
              onBackdropPress={()=>{this.setState({
                isModalOpen: false
              })}}
            >
              <View style={styles.modalView}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../assets/images/payment-confirm.svg')}
                  />
                </View>
                  <View style={styles.txtView}>
                    <Text style={styles.modalText}>
                      ORDER PLACED SUCCESSFULLY
                    </Text>
                  </View>
                {/* //=== payment === */}
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>this.setState({
                      isModalOpen: true
                    })} 
                    style={styles.readButton}>
                    <Text style={styles.readText}>
                      READ NOW
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.backButtonStyle}
                    onPress={()=>this.setState({
                      isModalOpen: false,
                    })}
                  >
                    <Text style={styles.backText}>
                      Back
                    </Text>
                  </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </ScalingDrawer>
    );
  }
}

//===  make components available outside ===
export default PaymentScreen;