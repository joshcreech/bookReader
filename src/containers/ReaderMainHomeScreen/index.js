import React, { Component } from 'react';
import { 
  View,
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';

//=== style ==
import styles from './styles';
//=== side bar ===
import ScalingDrawer from 'react-native-scaling-drawer';
import SideBar from '../../components/SideBar';
//=== tab bar ===
import { TabView} from 'react-native-tab-view';
import HomeScreen from '../HomeScreen';
import SearchScreen from '../SearchScreen';
import MyBookScreen from '../MyBookScreen';
import MyProfileScreen from '../MyProfileScreen';

//=== screen ===
class ReaderMainHomeScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      index: props.route.params? props.route.params.index : 0,
      routes: [
        { key: 'home', title: 'Home' },
        { key: 'search', title: 'Search' },
        { key: 'book', title: 'Book' },
        { key: 'user', title: 'User' },
      ]
    }
  }


  //=== tab Bar ===
  renderTabBarComponent=(props)=>{
    let activeIndex = props.navigationState.index;
    return(
      <View style={styles.tabBarContainer}>
        {/* //=== home === */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={()=>{this.setState({
            index: 0,
          })
        }}
          style={styles.iconsStyle}>
          <Image
            style={styles.imageStyle}
            source={activeIndex===0? 
              require('../../assets/icons/atabHome.svg')
              : require('../../assets/icons/tabHome.svg')
            }
          />
        </TouchableOpacity>
        {/* //=== Search === */}
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={()=>{this.setState({
            index: 1,
          })
          //this._drawer.close()
        }}
          style={styles.iconsStyle}>
          <Image
            style={styles.imageStyle}
            source={activeIndex===1? 
              require('../../assets/icons/atabSearch.svg')
              : require('../../assets/icons/tabSearch.svg')
            }
          />
        </TouchableOpacity>
        {/* //=== book === */}
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={()=>{this.setState({
            index: 2,
          })
          //this._drawer.close()
        }}
          style={styles.iconsStyle}>
          <Image
            style={styles.imageStyle}
            source={activeIndex===2? 
              require('../../assets/icons/atabBook.svg')
              : require('../../assets/icons/tabBook.svg')
            }
          />
        </TouchableOpacity>
        {/* //=== User === */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={()=>{this.setState({
            index: 3,
          })
          //this._drawer.close()
        }}
          style={styles.iconsStyle}>
          <Image
            style={styles.imageStyle}
            source={activeIndex===3? 
              require('../../assets/icons/atabUser.svg')
              : require('../../assets/icons/tabUser.svg')
            }
          />
        </TouchableOpacity>
        {/* <SafeAreaView/> */}
      </View>
    )
  }

  render() {
    let {
      index,
      routes
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
        {/* === tab bar === */}
        <TabView
          tabBarPosition='bottom'
          swipeEnabled={false}
          navigationState={{ index, routes }}
          renderTabBar={this.renderTabBarComponent}
          renderScene={({ route }) => {
            switch (route.key) {
              case 'home':
                return <HomeScreen 
                        drawer={this._drawer}
                        navigation={this.props.navigation} />;
              case 'search':
                return <SearchScreen 
                          drawer={this._drawer}
                          navigation={this.props.navigation} />;
                case 'book':
                return <MyBookScreen 
                          drawer={this._drawer}
                          navigation={this.props.navigation} />;
                case 'user':
                return <MyProfileScreen 
                        drawer={this._drawer}
                        navigation={this.props.navigation} />;
              default:
                return <HomeScreen 
                          drawer={this._drawer} 
                          navigation={this.props.navigation} />;
            }}}
        />
      </ScalingDrawer>
    );
  }
}

//===  make components available outside ===
export default ReaderMainHomeScreen;