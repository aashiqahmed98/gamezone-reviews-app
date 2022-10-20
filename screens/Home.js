import { StyleSheet, View, Text, Button } from 'react-native'
import { globalStyles } from '../styles/global.js'

function Home(props) {
	const pressHandler = () => {
		props.navigation.navigate('ReviewDetails')
	}
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>Home Screen</Text>
			<Button title='Go to Review' onPress={pressHandler} />
		</View>
	)
}

export default Home
