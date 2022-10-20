import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'

const Stack = createNativeStackNavigator()

function HomeStack() {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerStyle: {
					backgroundColor: '#eee',
				},
				headerTintColor: '#444',
			}}>
			<Stack.Screen
				name='Home'
				component={Home}
				options={{
					title: 'GameZone',
				}}
			/>
			<Stack.Screen
				name='ReviewDetails'
				component={ReviewDetails}
				options={({ route }) => ({
					title: `Review Details - ${route.params.key}`,
				})}
			/>
		</Stack.Navigator>
	)
}

export default HomeStack
