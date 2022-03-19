import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native'

class Empty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }

    handleClick = () => {
        
    }

    render() {
        return (
            <View style={styles.container}>
                
            </View>
        );
    }
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

export default Empty