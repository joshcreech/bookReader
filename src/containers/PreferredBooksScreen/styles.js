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
    height: Platform.OS==='ios'?150: 120,
  },
  headerContainer:{
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 5,
    paddingHorizontal: 20,
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
    marginRight: 20,
  },
  mainContainer:{
    flex: 1,
    padding: 20,
    marginTop: -15,
    paddingTop: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.circleColor,
  },
  gradientStyle2:{
    borderRadius: 25,
    overflow: 'hidden',
    height: 50,
    marginBottom: 10,
    marginTop: -20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    backgroundColor: colors.secondry
  },
  rowContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25,
    overflow: 'hidden',
    height: '100%',
    width :'100%',
    paddingHorizontal: 20,
    backgroundColor: colors.secondry
  },
  inputStyle:{
    padding: 0,
    width: 0,
    width: '100%',
    height: '100%',
    marginLeft: 5,
    color: colors.primary,
    fontSize: resonsiveText(9),
    fontWeight: 'normal',
  },
  inputField:{
    width: '90%',
    height: '100%',
  },
  plusStyle:{
    height: 13,
    width: 13,
  },
  headingView:{
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  headingText:{
    color: colors.primary,
    fontSize: resonsiveText(11),
    fontWeight: '600',
  },
  listContainer:{
    width: '100%',
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  rowContainer2:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    padding: 5,
    marginRight: 10,
    margin: 5,
    borderRadius: 12,
    overflow: 'hidden',
    borderColor: colors.submitColor33,
    borderWidth: 1
  },
  iconsStyles:{
    width: 9,
    height: 9,
    marginRight: 10,
    marginLeft: 10
  },
  iconsStyles2:{
    width: 9,
    height: 9,
    marginRight: 5,
  },
  optionText:{
    color: colors.primary,
    fontSize: resonsiveText(9),
    fontWeight: 'normal',
  },
  submitButton:{
    width: '60%',
    height: 50,
    paddingVertical: 2,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    marginTop: 40,
    backgroundColor: colors.submitColor
  },
  submitText:{
    fontSize: resonsiveText(14),
    color: colors.primary,
    fontWeight: 'bold',
  },
  dropDown:{
    width: '100%',
    padding: 10,
    borderColor: colors.grayColor,
    borderBottomWidth: 1,
    backgroundColor: colors.secondry
  },
  dropText:{
    fontSize: resonsiveText(12),
    color: colors.primary,
    fontWeight: '600',
  },
  dropDownContainer:{
    width: '100%',
    position: 'absolute',
    left: 20,
    top: 30,
    zIndex: 999,
    height: 300,
  },
})