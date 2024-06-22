import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator()

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component = {Home}/>
    </Stack.Navigator>
  )
}
export default AppStack