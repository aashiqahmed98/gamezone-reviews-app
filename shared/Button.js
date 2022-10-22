import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function FlatButton(props) {
	const { text, onPress } = props

	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default FlatButton

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		paddingHorizontal: 14,
		paddingVertical: 10,
		backgroundColor: '#f01d71',
		marginVertical: 20,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
})
