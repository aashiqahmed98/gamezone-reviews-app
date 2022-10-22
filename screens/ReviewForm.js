import { View, Button, TextInput, Text } from 'react-native'
import { globalStyles } from '../styles/global.js'
import { Formik } from 'formik'
import * as yup from 'yup'

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
							value={props.values.title}
							onBlur={props.handleBlur('title')}
						/>
						{props.touched.title && (
							<Text style={globalStyles.errorText}>{props.errors.title}</Text>
						)}
						<TextInput
							multiline
							style={globalStyles.input}
							placeholder='Review Body'
							onChangeText={props.handleChange('body')}
							value={props.values.body}
							onBlur={props.handleBlur('body')}
						/>
						<Text style={globalStyles.errorText}>
							{props.touched.body && (
								<Text style={globalStyles.errorText}>{props.errors.body}</Text>
							)}
						</Text>
						<TextInput
							style={globalStyles.input}
							placeholder='Review Rating(1-5)'
							onChangeText={props.handleChange('rating')}
							value={props.values.rating}
							keyboardType='numeric'
							onBlur={props.handleBlur('rating')}
						/>
						{props.touched.rating && (
							<Text style={globalStyles.errorText}>{props.errors.rating}</Text>
						)}
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
