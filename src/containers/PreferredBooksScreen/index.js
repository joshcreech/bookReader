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
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class PreferredBooksScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      firstDataArr: [],
      initialData:  firstData,
      backArray: firstData,
      helpArr: [],
      searchKey: '',
      isSearchActive: false,
    }
  }

  //=== add ===
  handleAdd=(item)=>{
    if(this.state.helpArr.length>0){
      let arrList= this.state.firstDataArr;
      arrList.push(item);
      this.setState({
        firstDataArr: arrList,
        helpArr: [],
      })
    }
  }

  // === delete ===
  handleDelete=(item,index)=>{
    let arr = this.state.firstDataArr;
    arr.splice(index,1)
    this.setState({
      firstDataArr: arr
    })
  }

  //==== clieck ====
  handleClick=(item)=>{
    let arrList= this.state.helpArr;
    arrList.push(item);
    this.setState({
      helpArr: arrList,
      searchKey: item.name,
      isSearchActive: false
    })
  }

  //=== search ===
  searchText=(text)=>{
   let  backArr = this.state.backArray;
   let data =this.state.initialData;
   let searchText = text;
    this.setState({
      searchKey: text
    })
    if(searchText.length>3){
      searchText = searchText.trim().toLowerCase();
      data = data.filter(l => {
        return l.name.toLowerCase().match( searchText );
      });
      this.setState({
        initialData: data,
        isSearchActive: true,
      })
    }else{
      this.setState({
        initialData: backArr,
      })
    }
  }


  render() {
    let {
      firstDataArr,
      isSearchActive,
      initialData,
      searchKey,
      helpArr
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
                  Preferred Books
                </Text>
              </View>
              <View/>
            </View>
          </ImageBackground>
            {/* === main content === */}
          <View style={styles.mainContainer}>
            <LinearGradient 
              start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
              style={styles.gradientStyle2}
              colors={[colors.borderColor,colors.inputGradient]}>
              <View style={styles.rowContainer}>
                <View style={styles.inputField}>
                  <TextInput
                    underlineColorAndroid={'transparent'}
                    placeholder={'Add here'}
                    placeholderTextColor={colors.grayColor}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    blurOnSubmit={false}
                    returnKeyType={'done'}
                    value={searchKey}
                    onSubmitEditing={()=>{
                        Keyboard.dismiss();
                        this.setState({
                        isSearchActive: false
                      })
                    }}
                    onChangeText={(val)=>{this.searchText(val)}}
                    style={styles.inputStyle}/> 
                </View>
                <TouchableOpacity 
                  onPress={()=>{this.handleAdd(helpArr[0])}}
                  style={styles.plusStyle}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../assets/icons/plusIcon.svg')}
                  />
                </TouchableOpacity>
              </View>
            </LinearGradient>
            {isSearchActive&&
              <View style={styles.dropDownContainer}>
                <FlatList
                  data={initialData}
                  bounces={false}
                  showsHorizontalScrollIndicator={false}
                  extraData={this.state.initialData}
                  renderItem={({ item, index }) => {
                    const _that = this;
                    return ( 
                      <TouchableOpacity
                        onPress={()=>{this.handleClick(item)}} 
                        style={styles.dropDown}>
                        <Text style={styles.dropText}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    )
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            }
            {/* === heading Text === */}
            <View style={styles.headingView}>
              <Text style={styles.headingText}>
                What Kind of books do you like to read? 
              </Text>
            </View>
            {/* //=== List === */}
            <View style={styles.listContainer}>
              {firstDataArr && firstDataArr.length>0 && firstDataArr.map((item,index)=>
                {return(
                  <View style={styles.rowContainer2}>
                    <View>
                      <Text style={styles.optionText}>
                        {item.name}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={()=>{}} 
                      activeOpacity={0.8}
                      style={styles.iconsStyles}>
                      <Image
                        source={require('../../assets/icons/editIcon.svg')}
                        style={styles.imageStyle}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={()=>{this.handleDelete(item,index)}} 
                      activeOpacity={0.8}
                      style={styles.iconsStyles2}>
                      <Image
                        source={require('../../assets/icons/closeIcon.svg')}
                        style={styles.imageStyle}
                      />
                    </TouchableOpacity>
                  </View>
                )})
              }
            </View>
            {/* //=== submit === */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={()=>this.handleSubmit()} 
              style={styles.submitButton}>
              <Text style={styles.submitText}>
                LET'S GET STARTED
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScalingDrawer>
    );
  }
}

//===  make components available outside ===
export default PreferredBooksScreen;