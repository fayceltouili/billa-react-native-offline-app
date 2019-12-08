import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';
import SingleAppBarNavigator from '../../Navigators/SingleAppBarNavigator'

const { height, width } = Dimensions.get('window')

const Preview = (props) => {

	const PdfPathFile = props.navigation.getParam('source')

	const source = { uri: `file:///${PdfPathFile}`, cache:true }

	return (
		<>
			<SingleAppBarNavigator title='Preview' />
			<View style={styles.container}>
				<Pdf
					source={source}
					style={styles.pdf}/>
			</View>
		</>
	)
}
 
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	pdf: {
		flex:1,
		width: width,
		height: height,
	}
});


export default Preview
