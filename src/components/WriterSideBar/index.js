import React from 'react';
import { 
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
// == style ===
import styles from './styles'

export default function WriterSideBar(props) {
  return (
    <View style={styles.sideBarContainer}>
      <SafeAreaView/>
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer2}>
          {/* === user image === */}
          <TouchableHighlight
            activeOpacity={0.8}
            // onPress={()=>{}}
            style={styles.userImage}>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/placeHolder/user.svg')}
            />
          </TouchableHighlight>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>
              User Name
            </Text>
          </View>
        </View>
        {/* === main list === */}
        <View style={styles.mainList}>
          {/* === My Books === */}
          <TouchableOpacity
            onPress={()=>{props.navigation.navigate('WriterMyBook')}} 
            style={styles.rowContainer}
            activeOpacity={0.8}>
              <View style={styles.sideIcon}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icons/book.svg')}
                />
              </View>
              <View style={styles.listContainer}>
                <Text style={styles.listText}>
                  My Books
                </Text>
              </View>
          </TouchableOpacity>
          {/* === Categories === */}
          <TouchableOpacity
            onPress={()=>{props.navigation.navigate('Category')}} 
            style={styles.rowContainer}
            activeOpacity={0.8}>
              <View style={styles.sideIcon}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icons/categories.svg')}
                />
              </View>
              <View style={styles.listContainer}>
                <Text style={styles.listText}>
                  Categories
                </Text>
              </View>
          </TouchableOpacity>
          {/* === Wishes === */}
          <TouchableOpacity
            onPress={()=>{props.navigation.navigate('MyWish')}}
            style={styles.rowContainer}
            activeOpacity={0.8}>
              <View style={styles.sideIcon}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icons/wishes.svg')}
                />
              </View>
              <View style={styles.listContainer}>
                <Text style={styles.listText}>
                  My Wishes
                </Text>
              </View>
          </TouchableOpacity>
          {/* === My Bookmarks === */}
          <TouchableOpacity
            onPress={()=>{props.navigation.navigate('MyWish')}}
            style={styles.rowContainer}
            activeOpacity={0.8}>
              <View style={styles.sideIcon}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icons/wishes.svg')}
                />
              </View>
              <View style={styles.listContainer}>
                <Text style={styles.listText}>
                  My Bookmarks
                </Text>
              </View>
          </TouchableOpacity>
           {/* === My Bookmarks === */}
           <TouchableOpacity
            onPress={()=>{props.navigation.navigate('MyWish')}}
            style={styles.rowContainer}
            activeOpacity={0.8}>
              <View style={styles.sideIcon}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icons/wishes.svg')}
                />
              </View>
              <View style={styles.listContainer}>
                <Text style={styles.listText}>
                  My Friend List
                </Text>
              </View>
          </TouchableOpacity>
          {/* === My Account === */}
          <TouchableOpacity
            onPress={()=>{props.navigation.navigate('WriterAccount')}}
            style={styles.rowContainer}
            activeOpacity={0.8}>
              <View style={styles.sideIcon}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icons/tabUser.svg')}
                />
              </View>
              <View style={styles.listContainer}>
                <Text style={styles.listText}>
                  My Account
                </Text>
              </View>
          </TouchableOpacity>
          {/* === Language Preference === */}
          <TouchableOpacity
            onPress={()=>{props.navigation.navigate('Language')}}
            style={styles.rowContainer}
            activeOpacity={0.8}>
              <View style={styles.sideIcon}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icons/language.svg')}
                />
              </View>
              <View style={styles.listContainer}>
                <Text style={styles.listText}>
                  Language Preference
                </Text>
              </View>
          </TouchableOpacity>
          {/* === Notification === */}
          <View style={styles.rowContainer3}>
            <TouchableOpacity
              onPress={()=>{props.navigation.navigate('Notification')}}
              style={styles.rowContainer}
              activeOpacity={0.8}>
                <View style={styles.sideIcon}>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../assets/icons/notification.svg')}
                  />
                </View>
                <View style={styles.listContainer}>
                  <Text style={styles.listText}>
                    Notification
                  </Text>
                </View>
            </TouchableOpacity>
            <View style={styles.circleView}>
              <Text style={styles.listText2}>
                9
              </Text>
            </View>
          </View>
          
          {/* === Support === */}
          <TouchableOpacity
            onPress={()=>{props.navigation.navigate('SuportCenter')}}
            style={styles.rowContainer}
            activeOpacity={0.8}>
              <View style={styles.sideIcon}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../assets/icons/support.svg')}
                />
              </View>
              <View style={styles.listContainer}>
                <Text style={styles.listText}>
                  Support
                </Text>
              </View>
          </TouchableOpacity>
        </View>
        {/* === logout === */}
        <TouchableOpacity 
          onPress={()=>{props.navigation.navigate('Login')}}
          style={[styles.rowContainer,styles.logoutButton]}
          activeOpacity={0.8}>
          <View style={styles.sideIcon}>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/icons/logout.svg')}
            />
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.listText}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <SafeAreaView/>
    </View>
  );
}
