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
    backgroundColor: colors.darkBackground
  },
  headerContainer2:{
    width: '100%',
    height: 200,
    marginTop: -10
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
  },
  contentView:{
    width :'100%',
    paddingHorizontal: 20,
  },
  mainContainer:{
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -10,
    backgroundColor: colors.darkBackground,
  },
  rowContainer2:{
    width: '100%',
    paddingTop: 20
  },
  rectangleContainer:{
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
    // backgroundColor: 'red'
  },
  bookImageStyle1:{
    height: 130,
    width: 100,
    borderRadius: 5,
    marginRight: 10,
    overflow: 'hidden',
  },
  titleText:{
    fontSize: resonsiveText(12),
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 2
  },
  greenView:{
    borderBottomColor: colors.greenColor,
    borderBottomWidth: 1,
    paddingBottom: 1,
    marginLeft: 2,
  },
  greenText:{
    fontSize: resonsiveText(8),
    color: colors.greenColor,
    fontWeight: '300',
    fontStyle: 'italic'
  },
  subheadingText:{
    fontSize: resonsiveText(8),
    color: colors.grayColor,
    fontStyle: 'italic'
  },
  normalView:{
    paddingBottom: 1,
    marginLeft: 2,
  },
  overallRating:{
    marginLeft: 5,
    borderRadius: 5,
    padding: 2,
    paddingHorizontal: 5,
    backgroundColor: colors.secondry
  },
  readmoreButton:{
    width: 130,
    height: 50,
    marginTop: 15,
    paddingVertical: 2,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: colors.submitColor
  },
  readMoreText:{
    fontSize: resonsiveText(12),
    color: colors.primary,
    fontWeight: 'bold',
  },
  ratingView:{
    width: 50,
    marginVertical: 5
    //marginTop: 20
  },
  rowContainer3:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  headingContainer:{
    paddingTop: 10,
    paddingBottom: 0,
  },
  headingText:{
    fontSize: resonsiveText(12),
    color: colors.primary,
    fontWeight: 'bold',
  },
  descContainer:{
    paddingTop: 10,
    paddingBottom: 40,
  },
  descText:{
    fontSize: resonsiveText(10),
    color: colors.grayColor,
    fontWeight: 'normal',
  },
  rowContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 10,
  },
  circleView:{
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary
  },
  secondCloumn:{
    marginLeft: 15,
  },
  rowContainer4:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%'
  },
  rowContainer5:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  authText:{
    fontSize: resonsiveText(10),
    color: colors.primary,
    fontWeight: 'bold',
  },
  booksCount:{
    fontSize: resonsiveText(8),
    color: colors.greenColor,
    fontWeight: 'normal',
    fontStyle: 'italic',
    marginTop: 2
  },
  borderButton:{
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: colors.greenColor,
    borderWidth: 1,
  },
  buttonText:{
    fontSize: resonsiveText(9),
    color: colors.primary,
    fontWeight: 'bold',
  },
})