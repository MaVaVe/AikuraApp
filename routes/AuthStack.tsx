import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "../hooks/useAuth";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator()

function AuthStack() {
  const {authData, login, logout} = useAuth()
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
      options={{
        title:'',
        headerStyle:{ backgroundColor:'#043C6C'}
      }
      } />
    </Stack.Navigator>
  )
}

export default AuthStack