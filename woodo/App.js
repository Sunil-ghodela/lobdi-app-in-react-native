import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableHighlight,
	Modal,
	Button,
	CameraRoll,
	Image,
	Dimensions,
	ScrollView,
	StyleSheet
} from 'react-native';

import Share from 'react-native-share';
import RNFetchBlob from 'react-native-fetch-blob';
import HomePage from './src/components/HomePage';
import CameraRollDemo from './src/components/CameraRollDemo';

import homePageStyle from './src/styles/homePageStyle';



type Props = {};

const { width } = Dimensions.get('window');
export default class App extends Component<Props> {
	static navigationOptions = {
		title: 'Camera Roll'
	};

	state = {
		modelVisible: false,
		photos: [],
		index: null
	};

	setIndex = (index) => {
		if (index === this.state.index) {
			index = null;
		}
		this.setState({ index });
	};

	getPhotos = () => {
		CameraRoll.getPhotos({
			first: 20,
			assertType: 'ALL'
		})
			.then(r => {
				this.setState({
					photos: r.edges
				})
			})
			.catch((err) => {
				console.log(err);
			});
	}

	toggleModel = () => {

		this.setState({ modelVisible: !this.state.modelVisible });
	}

	navigate = () => {
		const { navigate } = this.props.navigation;
		navigate('CameraRollDemo');
	}

	share = () => {
		const image = this.state.photos[this.state.index].node.image.url;
		RNFetchBlob.fs.readFile(image, 'base64')
			.then((data) => {
				const shareOptions = {
					title: 'anyone here to watch it',
					message: 'check this',
					url: `data:image/jpg;base64,${deta}`
				};
				Share.open(shareOptions)
					.then(res => console.log('success', res))
					.catch(err => console.log('success', err))
			})
	}

	render() {
		return (
			<View style={styles.container}>
				<Button
					title='camera roll'
					onPress={() => {
						this.toggleModel();
						this.getPhotos();
					}}
				/>
				<Button
					title='Browse new image'
					onPress={() => {
						this.navigate;

					}}
				/>

				<Modal
					animationType='slide'
					transparent={false}
					visible={this.state.modelVisible}
					onRequestClose={() => console.log('model close')}
				>
					<View style={styles.modal}>
						<Button
							title='Close'
							onPress={this.this.toggleModel}
						/>
						<ScrollView
							contentContainerStyle={styles.scrollView}
						>
							{this.state.photos.map((photo, index) => {
								return (
									<TouchableHighlight
										style={{ opacity: index === this.state.index ? 0.5 : 1 }}
										onPress={() => this.setIndex(index)}
										key={index}
										underlayColor='transparent'
									>
										<Image
											style={{
												width: width / 3,
												height: width / 3
											}}
											source={{ uri: image.node.uri }}
										>

										</Image>

									</TouchableHighlight>
								)
							})}
						</ScrollView>
						{
							this.state.index !== null && (
								<View style={styles.shareButton}>
									<Button
										title = "Share"
										onPress = {this.share}
									>

									</Button>
								</View>
							)
						}

					</View>
				</Modal>

			</View >
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	scrollView: {
		flexWrap: 'wrap',
		flexDirection: 'row'
	},
	modal: {
		paddingTop: 20,
		flex: 1
	},
	shareButton : {
		position: 'absolute',

	}

})