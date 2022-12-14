import { StyleSheet, View, Text, Image } from 'react-native'
import Card from '../shared/Card'
import { globalStyles, images } from '../styles/global.js'

function ReviewDetails(props) {
	const { navigation, route } = props

	return (
		<View style={globalStyles.container}>
			<Card>
				<Text>{route.params.title}</Text>
				<Text>{route.params.body}</Text>
				<View style={styles.rating}>
					<Text>GameZone Rating: </Text>
					<Image source={images.ratings[route.params.rating]} />
				</View>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	rating: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 16,
		marginTop: 16,
		borderTopWidth: 1,
		borderTopColor: '#eee',
	},
})

export default ReviewDetails
