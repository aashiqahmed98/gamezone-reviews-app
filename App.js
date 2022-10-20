import { useState } from 'react'
import * as Font from 'expo-font'
import Home from './screens/Home'
import ReviewDetails from './screens/ReviewDetails'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

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
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen name='Home' component={Home} />
					<Stack.Screen name='ReviewDetails' component={ReviewDetails} />
				</Stack.Navigator>
			</NavigationContainer>
		)
	}
}
