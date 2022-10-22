import { View, Button } from 'react-native'
import { globalStyles } from '../styles/global.js'
import { Formik } from 'formik'
import * as yup from 'yup'
import { TextInput } from 'react-native-gesture-handler'

const reviewSchema = yup.object({
	title: yup.string().required().min(4),
	body: yup.string().required().min(8),
	rating: yup
		.string()
		.required()
		.test('is-num-1-5', 'Rating must be 1 to 5', (val) => {
			return parseInt(val) < 6 && parseInt(val) > 0
		}),
})

function ReviewForm(props) {
	return (
		<View style={globalStyles.container}>
			<Formik
				validationSchema={reviewSchema}
				initialValues={{ title: '', body: '', rating: '' }}
				onSubmit={(values, action) => {
					props.addReview(values)
					action.resetForm()
				}}>
				{(props) => (
					<View>
						<TextInput
							style={globalStyles.input}
							placeholder='Review Title'
							onChangeText={props.handleChange('title')}
							Value={props.values.title}
						/>
						<TextInput
							multiline
							style={globalStyles.input}
							placeholder='Review Body'
							onChangeText={props.handleChange('body')}
							Value={props.values.body}
						/>
						<TextInput
							style={globalStyles.input}
							placeholder='Review Rating(1-5)'
							onChangeText={props.handleChange('rating')}
							Value={props.values.rating}
							keyboardType='numeric'
						/>
						<Button
							title='Submit'
							color='maroon'
							onPress={props.handleSubmit}
						/>
					</View>
				)}
			</Formik>
		</View>
	)
}

export default ReviewForm
