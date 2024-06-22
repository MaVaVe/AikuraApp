import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { AuthProvider } from './providers/AuthProvider';
import Router from './routes/Router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  return (
    <GestureHandlerRootView>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
