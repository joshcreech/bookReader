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
  Dimensions
} from 'react-native';

//=== style ==
import styles from './styles';
import colors from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
//=== side bar ===
import ScalingDrawer from 'react-native-scaling-drawer';
import SideBar from '../../components/SideBar';

//=== screen ===
class LanguageScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      language: '',
    }
  }

  render() {
    let {
      language,
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
                  <Text style={styles.headingText}>
                    Select Language
                  </Text>
                </View>
                
                <LinearGradient 
                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                style={styles.gradientStyle}
                colors={[colors.borderColor,colors.borderColor,colors.inputGradient]}>
                  <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.searchIcon}
                  //onPress={()=>{}}
                  >
                  <Image
                    style={styles.imageStyle}
                    source={require('../../assets/icons/search.svg')}
                  />
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              </ImageBackground>
              {/* === main content === */}
            <View style={styles.mainContainer}>
              {/* === Arabic === */}
              <TouchableOpacity
                onPress={()=>{
                  this.props.navigation.navigate('Login')
                  this.setState({
                  language: 'ar',
                })}}
                style={styles.rowContainer}
                >
                <View style={styles.rowContainer2}>
                  <View style={styles.circleView}>
                    <Text style={styles.optionText}>
                      Ar
                    </Text>
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.optionText}>
                      Arabic
                    </Text>
                  </View>
                </View>
                {language==='ar' &&
                  <View style={styles.checkBoxStyle}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../assets/icons/checkBox.svg')}
                  />
                </View>
                }
              </TouchableOpacity>
              {/* === english === */}
              <TouchableOpacity
                onPress={()=>{
                  this.props.navigation.navigate('Login')
                  this.setState({
                  language: 'en',
                })}}
                style={styles.rowContainer}
                >
                <View style={styles.rowContainer2}>
                  <View style={styles.circleView}>
                    <Text style={styles.optionText}>
                      En
                    </Text>
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.optionText}>
                      English
                    </Text>
                  </View>
                </View>
                {language==='en' &&
                  <View style={styles.checkBoxStyle}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../assets/icons/checkBox.svg')}
                  />
                </View>
                }
              </TouchableOpacity>

            </View>
        </View>
      </ScalingDrawer>
    );
  }
}

//===  make components available outside ===
export default LanguageScreen;