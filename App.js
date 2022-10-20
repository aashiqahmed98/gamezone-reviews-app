import 'react-native-gesture-handler'
import { useState } from 'react'
import * as Font from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './routes/Drawer'

export default function App() {
	const [loaded] = Font.useFonts({
		'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
		'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
	})

	if (!loaded) {
		return null
	} else {
		return (
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		)
	}
}
