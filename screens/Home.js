import { useState, useId } from 'react'
import {
	StyleSheet,
	View,
	Text,
	Button,
	FlatList,
	TouchableOpacity,
	Modal,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native'
import { globalStyles } from '../styles/global.js'
import Card from '../shared/Card.js'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './ReviewForm.js'

function Home(props) {
	const [reviews, setReviews] = useState([
		{
			title: 'Zelda, Breath of Fresh Air',
			rating: 5,
			body: 'lorem ipsum',
			id: '1',
		},
		{
			title: 'Gotta Catch Them All (again)',
			rating: 4,
			body: 'lorem ipsum',
			id: '2',
		},
		{
			title: 'Not So "Final" Fantasy',
			rating: 3,
			body: 'lorem ipsum',
			id: '3',
		},
	])
	const [isModalOpen, setIsModalOpen] = useState(false)
	const id = useId()

	const addReview = (review) => {
		review.id = id
		setReviews((prevState) => {
			return [review, ...prevState]
		}, console.log(reviews))
		setIsModalOpen(false)
	}

	return (
		<View style={globalStyles.container}>
			<Modal visible={isModalOpen} animationType='slide'>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.modalContent}>
						<MaterialIcons
							style={[styles.modalToggle, styles.modalClose]}
							name='close'
							size={24}
							onPress={() => setIsModalOpen(false)}
						/>
						<ReviewForm addReview={addReview} />
					</View>
				</TouchableWithoutFeedback>
			</Modal>

			<MaterialIcons
				style={styles.modalToggle}
				name='add'
				size={24}
				onPress={() => setIsModalOpen(true)}
			/>
			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => props.navigation.navigate('ReviewDetails', item)}>
						<Card>
							<Text style={globalStyles.titleText}>{item.title}</Text>
						</Card>
					</TouchableOpacity>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	modalToggle: {
		marginBottom: 10,
		padding: 10,
		borderWidth: 1,
		borderColor: '#f2f2f2',
		borderRadius: 10,
		alignSelf: 'center',
	},
	modalClose: {
		marginTop: 20,
		marginBottom: 0,
	},
	modalContent: {
		flex: 1,
	},
})
