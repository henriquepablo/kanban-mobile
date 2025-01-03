import { ScrollView, View } from 'react-native'
import Column from '../organisms/Column'
import { style } from './style'

export const Board: React.FC = () => {
	return (
		<ScrollView horizontal>
			<View style={style.container}>
				<Column />
				<Column />
			</View>
		</ScrollView>
	)
}

export default Board
