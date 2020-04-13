//=== stylesheet ===
import {
	StyleSheet,
	Dimensions,
	Platform
} from 'react-native';
// === Dimension ===
const ScreenHeight = Math.round(Dimensions.get('window').height);
const ScreenWidth = Math.round(Dimensions.get('window').width);
//=== colors ===
import colors from '../../utils/colors';
//=== resonsiveText ===
import resonsiveText from '../../utils/fontResponsive';

//=== design ===
export default StyleSheet.create({
	screenContainer:{
    flex: 1,
    // backgroundColor: '',
  },
  headerContainer2:{
    height: Platform.OS==='ios'?130: 90,
    width: '100%',
  },
  headerContainer:{
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 25,
    paddingTop: 15,
  },
  menuIcon:{
    height: 35,
    width: 35,
  },
  imageStyle:{
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  imageStyle2:{
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  headerText:{
    fontSize: resonsiveText(15),
    color: colors.primary,
    fontWeight: 'bold',
  },
  plusIcon:{
    height: 33,
    width: 33,
    borderRadius: 20,
    padding: 3,
  },
  mainContainer:{
    flex: 1,
    padding: 20,
    paddingRight: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -22,
    backgroundColor: colors.circleColor,
  },
  rowContainer:{
    flexDirection: 'row',
    width: '100%',
  },
  rectangleContainer:{
    height: 120,
    width: ScreenWidth/1.3,
    marginRight: 10,
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
  },
  bookImageStyle1:{
    height: 130,
    width: 100,
    position: 'absolute',
    right: 20,
    top: -12,
  },
  titleText:{
    fontSize: resonsiveText(12),
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 2
  },
  subTitleText:{
    fontSize: resonsiveText(8),
    color: colors.primary,
    fontWeight: '300',
    marginBottom: 3
  },
  authorText:{
    fontSize: resonsiveText(6),
    color: colors.primary,
    fontWeight: 'normal',
  },
  readmoreButton:{
    width: 60,
    marginTop: 5,
    paddingVertical: 2,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: colors.circleColor
  },
  readMoreText:{
    fontSize: resonsiveText(8),
    color: colors.primary,
    fontWeight: 'bold',
  },
  ratingView:{
    width: 50,
    marginVertical: 5
    //marginTop: 20
  },
  headingView:{
    flexDirection: 'row',
    width: '100%',
    paddingRight: 20,
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText:{
    fontSize: resonsiveText(13),
    color: colors.primary,
    fontWeight: 'bold',
  },
  headingText2:{
    fontSize: resonsiveText(10),
    color: colors.submitColor,
    fontWeight: 'normal',
  },
  textContainer:{
    borderBottomWidth: 1,
    paddingBottom: 1,
    borderBottomColor: colors.submitColor
  },
  boxStyle:{
    width: ScreenWidth/5,
    height: ScreenWidth/3.5,
    borderRadius: 5,
    marginBottom: 5,
    overflow: 'hidden',
  },
  boxContainer:{
    marginRight: 15,
    paddingTop: 10,
    width: ScreenWidth/5,
  },
  readingBook:{
    fontSize: resonsiveText(8),
    color: colors.grayColor,
    fontWeight: 'normal',
  },
  boxStyle2:{
    width: ScreenWidth/3.5,
    height: ScreenWidth/3,
    borderRadius: 5,
    marginBottom: 5,
    overflow: 'hidden',
  },
  boxContainer2:{
    marginRight: 15,
    paddingTop: 10,
    width: ScreenWidth/3.5,
  },
  scrollViewStyle:{
    flex: 1,
    marginTop:20
  },
})