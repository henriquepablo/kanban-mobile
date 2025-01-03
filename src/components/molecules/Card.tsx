import { Text, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	withTiming,
} from 'react-native-reanimated'
import { ComponentText } from '../atoms/Text'
import { style } from './style'

export const Card: React.FC = () => {
	const pressed = useSharedValue<boolean>(false)
	const offsetX = useSharedValue<number>(0)
	const offsetY = useSharedValue<number>(0)

	const pan = Gesture.Pan()
		.onBegin(() => {
			pressed.value = true
		})
		.onChange((event) => {
			offsetX.value = event.translationX
			offsetY.value = event.translationY
		})
		.onFinalize(() => {
			offsetX.value = withSpring(0)
			offsetY.value = withSpring(0)
			pressed.value = false
		})

	const animatedStyles = useAnimatedStyle(() => ({
		transform: [
			{ translateX: offsetX.value },
			{ translateY: offsetY.value },
			{ scale: withTiming(pressed.value ? 1.2 : 1) },
		],
		backgroundColor: pressed.value ? '#d4d4d4' : '#141b23',
	}))

	return (
		<View>
			<GestureDetector gesture={pan}>
				<Animated.View style={[style.container, animatedStyles]}>
					<ComponentText title="Teste" />
				</Animated.View>
			</GestureDetector>
		</View>
	)
}

export default Card
