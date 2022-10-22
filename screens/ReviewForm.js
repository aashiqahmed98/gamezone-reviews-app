import { View, Button } from 'react-native'
import { globalStyles } from '../styles/global.js'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'

function ReviewForm() {
	return (
		<View style={globalStyles.container}>
			<Formik
				initialValues={{ title: '', body: '', rating: '' }}
				onSubmit={(values) => {
					console.log(values)
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
