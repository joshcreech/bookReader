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
  FlatList,
  Dimensions
} from 'react-native';

import {noficationData} from './data';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';
//=== side bar ===
import ScalingDrawer from 'react-native-scaling-drawer';
import SideBar from '../../components/SideBar';

//=== screen ===
class NotificationScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      noficationData: noficationData,
    }
  }

  render() {
    let {
      noficationData,
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
            resizeMode='stretch'
            style={styles.headerContainer2} 
            source={require('../../assets/images/notification-bg.svg')}>
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
                  Notification
                </Text>
              </View>
              
              <View/>
            </View>
            </ImageBackground>
            {/* === main content === */}
          <View style={styles.mainContainer}>
            <FlatList
              data={noficationData}
              bounces={false}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={()=>{return(<View style={styles.separatorStyle}/>)}}
              extraData={this.state}
              renderItem={({item,index}) =>{
                const _that = this;
              return(
              item.type==='book'?
                <TouchableOpacity
                  // onPress={()=>{
                  //   this.setState({
                  //   language: 'ar',
                  // })}}
                  activeOpacity={0.9}
                  style={styles.rowContainer}
                  >
                  <View style={styles.rowContainer2}>
                    <View style={styles.bookView}>
                      <Image
                        source={item.imageUrl}
                        style={styles.imageStyle}
                      />
                    </View>

                    <View style={styles.textViewRow1}>
                      <View style={styles.rowContainer2}>
                        <View>
                          <Text style={styles.optionText}>
                            New
                          </Text>
                        </View>
                        <View style={styles.textViewRow2}>
                          <Text style={styles.optionText2}>
                            Arrival of the day
                          </Text>
                        </View>
                      </View>
                      <View style={styles.text2View}>
                        <Text style={styles.timeText}>
                          {item.time}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              : 
                <TouchableOpacity
                  activeOpacity={0.9}
                  // onPress={()=>{
                  //   this.setState({
                  //   language: 'ar',
                  // })}}
                  style={styles.rowContainer}
                  >
                  <View style={styles.rowContainer2}>
                    <View style={styles.circleView}>
                      <Image
                        source={item.imageUrl}
                        style={styles.imageStyle}
                      />
                    </View>
                    <View style={styles.textViewRow1}>
                      <View style={styles.rowContainer2}>
                        <View>
                          <Text style={styles.optionText}>
                            {item.name}
                          </Text>
                        </View>
                        <View style={styles.textViewRow2}>
                          <Text style={styles.optionText2}>
                            Accept your friend request
                          </Text>
                        </View>
                      </View>
                      <View style={styles.text2View}>
                        <Text style={styles.timeText}>
                          {item.time}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </ScalingDrawer>
    );
  }
}

//===  make components available outside ===
export default NotificationScreen;