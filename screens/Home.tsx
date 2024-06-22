import React, {useEffect, useState} from "react";
import { Button, StyleSheet, View } from "react-native";
import useAuth from "../hooks/useAuth";
import demoService from "../services/demoService";

function Home(){
    const [data, setData] = useState({});

    const { authData, login, logout } = useAuth();


    useEffect(() => {
        (async () => {
            const data = await demoService();
            setData(data);
        })

    }, []);

    useEffect(() => {
        console.log(data);

    }, [data]);

    return (
        <View>
            <Button title="LogOut" onPress={login}></Button>
        </View>
    )
}

const styles = StyleSheet.create({});

export default Home;