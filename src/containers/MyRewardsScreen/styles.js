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
    height: 340,
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
    backgroundColor: colors.circleColor,
  },
  rowContainer:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  rowContainer2:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointTxt:{
    fontSize: resonsiveText(14),
    color: colors.rewardColor,
    fontWeight: 'bold',
  },
  slashTxt:{
    fontSize: resonsiveText(14),
    color: colors.primary,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  alineCenter:{
    alignSelf: 'center',
  },
  subTxt:{
    fontSize: resonsiveText(8),
    color: colors.grayColor,
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  howTxt:{
    fontSize: resonsiveText(12),
    color: colors.primary,
    fontWeight: '600',
  },
  descTxtView:{
    width: ScreenWidth/1.3,
    alignSelf: 'center',
    marginTop: 10,
  },
  descTxt:{
    fontSize: resonsiveText(9),
    color: colors.grayColor83,
    fontWeight: '600',
    lineHeight: 15,
    textAlign: 'center',
  },
  boxStyle:{
    width: '100%',
    padding: 20,
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 20,
    shadowOffset:{
      height: 0,
      width: 0
    },
    shadowColor: colors.showColor1f,
    backgroundColor: colors.circleColor,
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  secondColoumn:{
    marginLeft: 50
  },
  tabContainer:{
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabStyle:{
    padding: 5,
    paddingRight: 15,
    marginRight: 10,
    borderBottomColor: colors.submitColor,
  },
  tabTxt:{
    fontSize: resonsiveText(10),
    fontWeight: '600',
  },
  opTxt:{
    fontSize: resonsiveText(9),
    fontWeight: '600',
    color: colors.grayColor83
  },
  opt2View:{
    marginLeft: 2
  },
  opTxt2:{
    fontSize: resonsiveText(9),
    fontWeight: '600',
    color: colors.submitColor
  },
  historyStyle:{
    marginTop: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.submitColor,
    borderBottomWidth: 2,
    paddingBottom: 2,
  },
  historyTxt:{
    fontSize: resonsiveText(8),
    fontWeight: '600',
    color: colors.submitColor,
  },
  iconStyle:{
    width: 10,
    height: 10
  },
})