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
  FlatList,
  TextInput,
  Dimensions,
  ScrollView
} from 'react-native';

//=== style ==
import styles from './styles';
import colors from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
//=== side bar ===
import ScalingDrawer from 'react-native-scaling-drawer';
import SideBar from '../../components/SideBar';

//=== screen ===
class SuportCenterScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      searchKey: ''
    }
  }

  render() {
    let {
      searchKey
    } = this.state;
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
        <ScrollView 
          style={styles.screenContainer}
          bounces={false}>
          <View style={styles.screenContainer}>
            <StatusBar 
              backgroundColor={colors.circleColor} 
              barStyle="light-content"
              translucent={false}
            />
            {/* === header === */}
            <ImageBackground 
              resizeMode='stretch'
              style={styles.headerContainer2} 
              source={require('../../assets/images/support-bg.svg')}>
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
                  <Text style={styles.headingText}>
                    SuportCenter
                  </Text>
                </View>
                
                <View/>
              </View>
              </ImageBackground>
              <View style={{paddingHorizontal: 20}}>
                <LinearGradient 
                  start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                  style={styles.gradientStyle}
                  colors={[colors.borderColor,colors.inputGradient]}>
                  <View style={styles.rowSearchContainer}>
                    <View style={styles.inputField}>
                      <TextInput
                        underlineColorAndroid={'transparent'}
                        placeholder={'What do you need some help'}
                        placeholderTextColor={colors.grayColor}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        blurOnSubmit={false}
                        returnKeyType={'done'}
                        value={searchKey}
                        onSubmitEditing={()=>{Keyboard.dismiss()}}
                        onChangeText={(val)=>{this.setState({searchKey: val})}}
                        style={styles.inputStyle}/> 
                    </View>
                    <View style={styles.mailIcon}>
                      <Image
                        style={styles.imageStyle}
                        source={require('../../assets/icons/search.svg')}
                      />
                    </View>
                  </View>
                </LinearGradient>
              </View>
              {/* === main content === */}
            <View style={styles.mainContainer}>
              {/* //=== 1 === */}
              <TouchableOpacity
                // onPress={()=>{}}
                activeOpacity={0.8}
                style={styles.rowContainer}
                >
                  <View>
                    <Text style={styles.textDesign}>
                      Learn how to use the app?
                    </Text>
                  </View>
                  <View style={styles.rightIcon}>
                    <Image
                      source={require('../../assets/icons/rightArrow.svg')}
                      style={styles.imageStyle}
                    />
                  </View>
              </TouchableOpacity>
              {/* //=== 2 === */}
              <TouchableOpacity
                // onPress={()=>{}}
                activeOpacity={0.8}
                style={styles.rowContainer}
                >
                  <View>
                    <Text style={styles.textDesign}>
                      FAQ's
                    </Text>
                  </View>
                  <View style={styles.rightIcon}>
                    <Image
                      source={require('../../assets/icons/rightArrow.svg')}
                      style={styles.imageStyle}
                    />
                  </View>
              </TouchableOpacity>
              {/* //=== 3 === */}
              <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate('EmailSupport')}}
                activeOpacity={0.8}
                style={styles.rowContainer}
                >
                  <View>
                    <Text style={styles.textDesign}>
                      Email Customer Support
                    </Text>
                  </View>
                  <View style={styles.rightIcon}>
                    <Image
                      source={require('../../assets/icons/rightArrow.svg')}
                      style={styles.imageStyle}
                    />
                  </View>
              </TouchableOpacity>
              {/* //=== 4 === */}
              <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate('PhoneSupport')}}
                activeOpacity={0.8}
                style={styles.rowContainer}
                >
                  <View>
                    <Text style={styles.textDesign}>
                      Call customer care
                    </Text>
                  </View>
                  <View style={styles.rightIcon}>
                    <Image
                      source={require('../../assets/icons/rightArrow.svg')}
                      style={styles.imageStyle}
                    />
                  </View>
              </TouchableOpacity>
              {/* //=== 5 === */}
              <TouchableOpacity
                // onPress={()=>{}}
                activeOpacity={0.8}
                style={styles.rowContainer}
                >
                  <View>
                    <Text style={styles.textDesign}>
                      Term of use
                    </Text>
                  </View>
                  <View style={styles.rightIcon}>
                    <Image
                      source={require('../../assets/icons/rightArrow.svg')}
                      style={styles.imageStyle}
                    />
                  </View>
              </TouchableOpacity>
              {/* //=== 6 === */}
              <TouchableOpacity
                // onPress={()=>{}}
                activeOpacity={0.8}
                style={styles.rowContainer}
                >
                  <View>
                    <Text style={styles.textDesign}>
                      Privacy policy
                    </Text>
                  </View>
                  <View style={styles.rightIcon}>
                    <Image
                      source={require('../../assets/icons/rightArrow.svg')}
                      style={styles.imageStyle}
                    />
                  </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ScalingDrawer>
    );
  }
}

//===  make components available outside ===
export default SuportCenterScreen;