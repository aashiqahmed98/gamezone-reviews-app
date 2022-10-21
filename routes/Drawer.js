import { createDrawerNavigator } from '@react-navigation/drawer'
import About from '../screens/About'
import HomeStack from './HomeStack'
import { ImageBackground, View, Text, Image, StyleSheet } from 'react-native'

const Drawer = createDrawerNavigator()

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			initialRouteName='HomeStack'
			screenOptions={{
				headerTintColor: 'teal',
				headerStyle: {
					backgroundColor: '#eee',
					height: 80,
				},
				headerTitleAlign: 'center',
				headerTitle: (headerTitleProps) => (
					<View style={styles.headerTitle}>
						<Image
							source={require('../assets/images/heart_logo.png')}
							style={{
								width: 26,
								height: 26,
								marginHorizontal: 10,
							}}
						/>
						<Text style={styles.headerText}>GameZone</Text>
					</View>
				),
				headerBackground: () => (
					<ImageBackground
						source={require('../assets/images/game_bg.png')}
						style={{
							width: '100%',
							height: '100%',
						}}
					/>
				),
			}}>
			<Drawer.Screen
				name='HomeStack'
				options={{
					title: 'Home',
				}}
				component={HomeStack}
			/>
			<Drawer.Screen
				name='About'
				component={About}
				options={{ headerTitle: 'About Gamezone' }}
			/>
		</Drawer.Navigator>
	)
}

export default DrawerNavigator

const styles = StyleSheet.create({
	headerTitle: {
		flexDirection: 'row',
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#333',
		letterSpacing: 1,
	},
})