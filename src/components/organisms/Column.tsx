import { Text, View } from 'react-native'
import Card from '../molecules/Card'
import { style } from './style'

export const Column: React.FC = () => {
	return (
		<View style={style.container}>
			<View style={style.header}>
				<Text style={style.textHeader}>Todo</Text>
			</View>

			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</View>
	)
}

export default Column
