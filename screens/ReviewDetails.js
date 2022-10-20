import { StyleSheet, View, Text } from 'react-native'

function ReviewDetails(props) {
	const { navigation, route } = props

	return (
		<View style={styles.container}>
			<Text>{route.params.title}</Text>
			<Text>{route.params.body}</Text>
			<Text>{route.params.rating}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
	},
})

export default ReviewDetails
