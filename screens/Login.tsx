import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useAuth from "../hooks/useAuth";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = async () => {
        await login(username, password)
    };


    return (
        <View style={styles.father}>
            <View style={styles.card}>
                <Image source={require('../assets/loginimg.png')} style={styles.login} />

                <Text style={styles.leftAlignedText}>Username</Text>
                <View style={styles.textBox}>
                    <TextInput placeholder="Enter your username" style={{ paddingHorizontal: 15, color: '#B0B9BC' }}
                        onChangeText={(text) => setUsername(text)} />
                </View>

                <Text style={styles.leftAlignedText}>Password</Text>
                <View style={styles.textBox}>
                    <TextInput placeholder="Enter your password" style={{ paddingHorizontal: 15, color: '#B0B9BC' }} secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)} />
                </View>

                <TouchableOpacity>
                    <Text style={styles.underlineText}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogin} style={styles.button} >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.text}>Don't have an account?
                    <TouchableOpacity>
                        <Text style={styles.text2}> Create</Text>
                    </TouchableOpacity>
                </Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F8FF',
        padding: 20,
    },
    father: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF7E8'
    },
    leftAlignedText: {
        alignSelf: 'flex-start',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 20
    },
    login: {
        width: 100,
        height: 100,
        marginBottom: 30,
        marginTop: 50
    },
    card: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 200,
        margin: 40,
        backgroundColor: '#043C6C',
        borderRadius: 20,
        width: '90%',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    card2: {
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textBox: {
        paddingVertical: 20,
        backgroundColor: "white",
        borderRadius: 20,
        marginVertical: 10,
        width: '90%'
    },
    underlineText: {
        textDecorationLine: 'underline',
        color: 'white',
        textAlign: 'right',
        marginStart: 170
    },
    text: {
        color: 'white',
        marginTop: 15
    },
    text2: {
        color: 'white',
        marginTop: 15,
    },
    button: {
        backgroundColor: '#FBCB04',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 110,
        marginTop: 20,
        width: '90%'

    },
    buttonText: {
        color: '#0A262F',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Login;