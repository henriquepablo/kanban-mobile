/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BoardPage from './src/components/pages/BoardPage'

function App(): React.JSX.Element {
	return (
		<GestureHandlerRootView style={{ flex: 1, backgroundColor: '#010409' }}>
			<SafeAreaView />
			<StatusBar />
			<BoardPage />
		</GestureHandlerRootView>
	)
}

export default App
