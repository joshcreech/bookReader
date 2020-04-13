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
    backgroundColor: colors.circleColor,
  },
  headerContainer2:{
    width: '100%',
    height: Platform.OS==='ios'? 140: 100,
  },
  headerContainer:{
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  menuIcon:{
    height: 20,
    width: 20,
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
    marginRight: 20,
  },
  mainContainer:{
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    backgroundColor: colors.circleColor,
  },
  rowContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  rowContainer2:{
    flexDirection: 'row',
    alignItems: 'center',
    width :'60%',
  },
  bookImage:{
    height: ScreenWidth/4,
    width: ScreenWidth/6,
  },
  secondColumn:{
    marginLeft: 10,
    width :'80%',
  },
  bookView:{
    width :'100%',
  },
  bookText:{
    fontSize: resonsiveText(12),
    color: colors.bookTitle,
    fontWeight: 'bold',
  },
  gradientStyle:{
    width: ScreenWidth/4,
    height: ScreenWidth/5,
    padding: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  otherText:{
    fontSize: resonsiveText(9),
    color: colors.grayColor,
    fontWeight: 'normal',
  },
  borderView:{
    marginLeft: 5,
    borderBottomColor: colors.greenColor15,
    borderBottomWidth: 1,
    paddingBottom: 1,
  },
  greenTxt:{
    fontSize: resonsiveText(9),
    color: colors.greenColor15,
    fontWeight: 'normal',
  },
  thirdCloumn:{
    width: '100%',
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.circleColor
  },
  ratingText:{
    fontSize: resonsiveText(15),
    color: colors.primary,
    fontWeight: 'bold',
  },
  ratingContainer:{
    marginTop: 5,
    width: 80,
  },
  starStyles:{
    padding: 0,
    backgroundColor: 'transparent',
    marginRight: 1
  },
  reviewView:{
    marginTop: 10
  },
  reviewText:{
    fontSize: resonsiveText(8),
    color: colors.primary,
    fontWeight: 'normal',
  },
  mainList:{
    flex: 1,
    marginTop: 20,
    paddingTop: 20,
  },
  listRowView:{
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 20
  },
  reviewerImage:{
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: colors.primary
  },
  remaingView:{
    marginLeft: 10,
  },
  nameText:{
    fontSize: resonsiveText(12),
    color: colors.primary,
    fontWeight: 'bold',
  },
  ratingView:{
    width: 70,
    marginTop: 5
  },
  descView:{
    width: '100%',
    marginTop: 15,
  },
  descText:{
    fontSize: resonsiveText(11),
    color: colors.bookTitle,
    fontWeight: '600',
    //lineHeight: 20,
    textAlign: 'left'
  },
  readMoreButton:{
    borderBottomWidth: 1,
    width :85,
    borderBottomColor: colors.greenColor28,
    paddingBottom: 1,
    marginTop: 3,
  },
  readMoreTxt:{
    fontSize: resonsiveText(9),
    color: colors.greenColor28,
    fontWeight: '600',
  },
  loadButton:{
    width: 120,
    height: 45,
    paddingVertical: 2,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: colors.submitColor
  },
  loadText:{
    fontSize: resonsiveText(12),
    color: colors.primary,
    fontWeight: 'bold',
  },
})