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

export default class Draft extends Component {
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
                    {/* === Edit === */}
                    <TouchableOpacity 
                      // onPress={()=>{}}
                      activeOpacity={0.8}
                      style={[styles.rowContainer,styles.buttonStyle]}>
                      <View style={styles.iconStyle2}>
                        <Image
                          style={styles.imageStyle}
                          source={require('../../assets/icons/editable.svg')}
                        />
                      </View>
                      <View>
                        <Text style={styles.buttonText}>
                          Edit
                        </Text>
                      </View>
                    </TouchableOpacity>
                    {/* //=== share */}
                    <TouchableOpacity 
                      // onPress={()=>{}}
                      activeOpacity={0.8}
                      style={[styles.rowContainer,styles.buttonStyle2]}>
                      <View style={styles.iconStyle2}>
                        <Image
                          style={styles.imageStyle}
                          source={require('../../assets/icons/delete.svg')}
                        />
                      </View>
                      <View>
                        <Text style={styles.buttonText}>
                          Delete
                        </Text>
                      </View>
                    </TouchableOpacity>

                  </View>
                </View>
							</View>
						</View>
					)}}
					keyExtractor={(item, index) => index.toString()}
				/>
			</View>
		);
	}
}
