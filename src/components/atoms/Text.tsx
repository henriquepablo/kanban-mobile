import { Text } from 'react-native'
import { style } from './style'

interface IComponentText {
	title: string
}

export const ComponentText: React.FC<IComponentText> = ({ title }) => {
	return <Text style={style.text}>{title}</Text>
}

export default Text
