import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../styles/global.js'

function Home() {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>Home Screen</Text>
		</View>
	)
}


export default Home
