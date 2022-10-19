import { StyleSheet, View, Text } from 'react-native'

function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>Home Screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
	},
	titleText: {
		fontFamily: 'nunito-bold',
		fontSize: 24,
	},
})

export default Home
