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
import colors from '../../../utils/colors';
//=== resonsiveText ===
import resonsiveText from '../../../utils/fontResponsive';

//=== design ===
export default StyleSheet.create({
	screenContainer:{
		flex: 1,
		backgroundColor: colors.secondry,
  },
  topImage:{
    width: ScreenWidth,
    height: ScreenHeight/6,
  },
  imageStyle2:{
    height: '100%',
    width: '100%',
    resizeMode: 'stretch',
    marginTop: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageStyle:{
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  headerText:{
    marginBottom: 25
  },
  mainContainer:{
    flex: 1,
    padding: 20,
    paddingTop: 0,
    marginTop: -10,
  },
  gradientStyle:{
    borderRadius: 25,
    overflow: 'hidden',
    height: 50,
    marginBottom: 10,
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
  formContainers:{
    paddingHorizontal: 5
  },
  mailIcon:{
    height: 18,
    width: 18,
  },
  rowContainer2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  forgetButton:{
    padding: 10,
    borderBottomColor: colors.primary,
  },
  forgetText:{
    color: colors.primary,
    fontSize: resonsiveText(10),
    fontWeight: 'normal',
  },
  bottonLine:{
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  submitButton:{
    height: 50,
    marginTop: 10,
    width: ScreenWidth/2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: colors.submitColor
  },
  submitText:{
    color: colors.primary,
    fontSize: resonsiveText(15),
    fontWeight: 'bold',
  },
  rowContainer3:{
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems :'center',
    marginTop: 20,
  },
  userText:{
    color: colors.primary,
    fontSize: resonsiveText(12),
    fontWeight: 'normal',
  },
  signupText:{
    color: colors.submitColor,
    fontSize: resonsiveText(12),
    fontWeight: 'normal',
    marginLeft: 1
  },
  bottonLine2:{
    borderBottomWidth: 1,
    marginLeft: 2,
    borderBottomColor: colors.submitColor,
  },
  checkBoxContainer:{
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    margin: 0
  },
  rowContainer4:{
    flexDirection: 'row',
    width: '100%',
  },
  cloumn1:{
    width: '27%',
    marginRight: '3%',
  },
  cloumn2:{
    width: '70%',
    marginRight: 10,
  },
  placeText:{
    color: colors.grayColor,
    fontSize: resonsiveText(9),
    fontWeight: 'normal',
  },
  areaCodeStyle:{
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePicker:{
    width: ScreenWidth,
    height: 100,
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.primary
  },
  doneButton:{
    position: 'absolute',
    bottom: 100,
    right: 0,
    padding: 10,
  },
  doneText:{
    fontSize: resonsiveText(14),
    color: colors.primary,
    fontWeight: '600'
  },
  dropDownContainer:{
    padding: 0,
    margin: 0,
    width: '100%',
    height: 30,
  },
  inputContainerStyles:{
    borderBottomColor: 'transparent',
    width: '100%',
    height: '100%',
    color: colors.primary,
    fontSize: resonsiveText(9),
    fontWeight: 'normal',
    marginTop: 5
  },
  pickerStyles:{
    backgroundColor: colors.secondry,
  },
  itemTextStyles:{
    fontSize: resonsiveText(9),
    fontWeight: 'normal',
  }
})