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
    //height: 150,
    width: '100%',
  },
  headerContainer:{
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 10,
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
  profileRow:{
    flexDirection: 'row',
    alignItems: 'center',
    //marginTop: 20,
    padding: 20,
    paddingBottom: 0,
    justifyContent: 'space-between',
    width: '100%',
  },
  rowContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  mainContainer:{
    flex: 1,
    padding: 20,
    paddingBottom: 100,
    backgroundColor: colors.circleColor
  },
  iconStyle:{
    width: 25,
    height: 25,
  },
  gradientImage:{
    width: 80,
    height: 80,
    borderRadius: 40,
    padding: 2,
    overflow: 'hidden',
  },
  profileImage:{
    width: '100%',
    height: '100%',
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: colors.primary
  },
  nameView:{
    marginLeft: 10
  },
  labelText:{
    color: colors.grayColor,
    fontSize: resonsiveText(8),
    fontWeight: '600',
  },
  nameText:{
    marginTop: 3,
    color: colors.primary,
    fontSize: resonsiveText(12),
    fontWeight: 'bold',
  },
  inputField:{
    width: '100%',
    height: 60,
    padding: 0,
    margin: 0,
    fontSize: resonsiveText(12),
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: colors.circleColor
  },
  inputContainer:{
    backgroundColor: colors.circleColor,
    height: 60,
    width: '100%',
    //marginBottom: 10
  },
  cloumn1:{
    width: '27%',
    marginRight: '3%',
  },
  cloumn2:{
    width: '70%',
  },
  inputField2:{
    width: '100%',
    padding: 0,
    margin: 0,
    fontSize: resonsiveText(12),
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: colors.circleColor
  },
  inputContainer2:{
    backgroundColor: colors.circleColor,
    width: '100%',
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
    height: 50,
    color: colors.primary,
    fontSize: resonsiveText(12),
    fontWeight: 'normal',
    marginTop: 5
  },
  pickerStyles:{
    backgroundColor: colors.secondry,
  },
  viewText:{
    height: 60,
    paddingLeft: 10,
    paddingTop: 10,
    width: '100%'
  },
  labelText2:{
    color: colors.grayColor,
    fontSize: resonsiveText(9),
    fontWeight: 'normal',
  },
  datePicker:{
    width: ScreenWidth,
    height: 100,
    position: 'absolute',
    bottom: 50,
    backgroundColor: colors.primary
  },
  doneButton:{
    position: 'absolute',
    bottom: 200,
    right: 0,
    padding: 10,
  },
  doneText:{
    fontSize: resonsiveText(14),
    color: colors.primary,
    fontWeight: '600'
  },
  rowContainer4:{
    flexDirection: 'row',
    alignItems: 'center',
  },
})