import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  Dimensions,
  FlatList,
} from 'react-native';
//=== styles from  parent ===
import styles from '../../containers/WriterDraftScreen/styles';

export default class Submission extends Component {
  constructor(props){
    super(props);
    this.state={
      day: 4,
      time: '04:00 PM',
      like: 1,
      share: 0,
    };
  }
	render() { 
    let {
      day,
      time,
      like,
      share
    } = this.state; 
		return (
			<View>
				{/* === submission === */}
				<FlatList
					data={this.props.firstData}
					showsHorizontalScrollIndicator={false}
					extraData={this.props}
					renderItem={({item,index}) =>{
						const _that = this;
					return(
						<View style={[styles.rowContainer,styles.paddingStyle]}>
							<View style={styles.boxStyle}>
								<Image
									style={styles.imageStyle2}
									source={item.imageUrl}
								/>
							</View>

							<View style={[styles.rowContainer,styles.rowStyle]}>
								{/* == */}
                <View>
                  {/* === bookName === */}
                  <View style={styles.bookTxtView}>
                    <Text numberOfLines={1} style={styles.bookText}>
                      {item.bookName}
                    </Text>
                  </View>
                  {/* === reason === */}
                  <View>
                    <Text numberOfLines={1} style={styles.bookText}>
                      {item.draftReason}
                    </Text>
                  </View>
                  {/* === update === */}
                  <View style={[styles.rowContainer,styles.marginStyle]}>
                    <View>
                      <Text style={styles.updateText}>
                        Last update {day} days ago at 
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.timeText}>
                        {time} 
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.rowContainer,styles.alignCenter]}>
                    {/* === like === */}
                    <View style={styles.iconStyle2}>
                      <Image
                        style={styles.imageStyle}
                        source={require('../../assets/icons/heart-circle.svg')}
                      />
                    </View>
                    <View>
                      <Text style={styles.countText}>
                        {like}
                      </Text>
                    </View>
                    {/* //=== share */}
                    <View style={{...styles.iconStyle3,marginLeft: 20}}>
                      <Image
                        style={styles.imageStyle}
                        source={require('../../assets/icons/comment.svg')}
                      />
                    </View>
                    <View>
                      <Text style={styles.countText}>
                        {like}
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.iconStyle}
                  //onPress={()=>}
                >
                  <Image
                    style={styles.imageStyle}
                    source={item.active===1? 
                      require('../../assets/icons/verified.svg')
                      : require('../../assets/icons/danger.svg')
                    }
                  />
                </TouchableOpacity>
							</View>
						</View>
					)}}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		);
	}
}
