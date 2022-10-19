import { StyleSheet, View, Text } from 'react-native'

function About() {
	return (
		<View style={styles.container}>
			<Text>About Screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
	},
})

export default About
