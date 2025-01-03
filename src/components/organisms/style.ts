import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
	container: {
		width: 200,
		backgroundColor: '#010409',
		minHeight: 100,
		margin: 20,
		borderRadius: 5,
		borderColor: '#1f242c',
		borderWidth: 1,
	},
	header: {
		height: 40,
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textHeader: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})
