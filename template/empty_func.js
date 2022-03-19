import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native'

export default function App() {
    const [text, setText] = useState("");

    const handleClick = () => {
        
    }

    return (
        <View style={styles.container}>
                
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100vh',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
    },
});
