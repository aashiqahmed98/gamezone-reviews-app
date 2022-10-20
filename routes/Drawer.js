import { createDrawerNavigator } from '@react-navigation/drawer'
import About from '../screens/About'
import HomeStack from './HomeStack'

const Drawer = createDrawerNavigator()

function DrawerNavigator() {
	return (
		<Drawer.Navigator initialRouteName='HomeStack'>
			<Drawer.Screen name='HomeStack' component={HomeStack} />
			<Drawer.Screen name='About' component={About} />
		</Drawer.Navigator>
	)
}

export default DrawerNavigator
