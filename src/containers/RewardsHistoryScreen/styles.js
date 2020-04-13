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
  backIcon:{
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
    marginTop: -15,
    backgroundColor: colors.circleColor,
  },
  rowContainer:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  descTxt:{
    fontSize: resonsiveText(9),
    color: colors.grayColor83,
    fontWeight: '600',
  },
  secondColoumn:{
    marginLeft: 50
  },
  alineCenter:{
    alignSelf: 'center',
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
  headTxt:{
    fontSize: resonsiveText(10),
    color: colors.primary,
    fontWeight: '600',
  },
  opTxt:{
    fontSize: resonsiveText(7),
    fontWeight: '600',
    color: colors.primary
  },
  opt2View:{
    marginLeft: 2
  },
  opTxt2:{
    fontSize: resonsiveText(7),
    fontWeight: '600',
    color: colors.submitColor
  },
  customWidth:{
    width: ScreenWidth/3-10,
    // backgroundColor: 'red'
  },
  customWidth2:{
    marginLeft: 30,
    width: ScreenWidth/3-20,
    // backgroundColor: 'green'
  },
  customWidth3:{
    width: 50,
  },
})