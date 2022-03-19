// import React, { Component } from 'react';
// import { StatusBar, StyleSheet, SafeAreaView, View, TouchableNativeFeedback } from 'react-native';

// import Display from './app/components/Display'
// import Buttons from './app/components/Buttons'

// export default class App extends Component {

//   state = {
//     display: '',
//     result: ''
//   }

//   handleOperation = operation => {
//     if (operation === 'C') {
//       this.setState({
//         display: '',
//         result: ''
//       })
//     }
//     else if (operation === 'DEL'){
//       let save = this.state.display.slice(0, -1)
//       this.setState({
//         display: save,
//         result: eval(save)
//       })
//     }
//     else if(operation === '=') {
//       this.setState({
//         display: this.state.result,
//         result: ''
//       })
//     }
//     else {
//       const display = this.state.display + operation
//       let result = this.state.result
//       try {

//         let fixedOperation = display.split('×').join('*')
//         fixedOperation = fixedOperation.split('÷').join('/')
//         fixedOperation = fixedOperation.split('.').join('.')

//         result = new String(eval(fixedOperation)).toString()

//       }catch(e) {}
//       this.setState({
//         display,
//         result
//       })
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle="light-content" />
//         <Display state={this.state} />
//         <Buttons operation={this.handleOperation} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'stretch',
//     backgroundColor: "salmon",
//   },
// });


import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native'

class Empty extends React.Component {
    constructor(props) {
        super(props);
        console.log("Consrtucting")
        this.state = {
            text: "",
            count: 0,
            check: true,
            mount: false
        };
    }

    componentWillMount() {
      console.log("Component Will Mount");
      }
      componentDidMount() {
      console.log("Component Did Mount");
      }
      componentWillReceiveProps(){
      console.log("Component Will Receive Props")
      }
      shouldComponentUpdate(newProps, newState) {
      return true;
      }
      componentWillUpdate(nextProps, nextState) {
      console.log("Component Will Update")
      }
      componentDidUpdate(PrevProps, PrevState){
      console.log("Component Did Update")
      }
      componentWillUnmount(){
      console.log("Component Will Unmount")
      }
      
      onPress = () => {
        this.state.count += 1
        this.forceUpdate()
      };

      onPresss = () => {
        this.state.count = 0
        this.state.check = false
        this.state.mount = true
        this.forceUpdate()
      };

      onMount = () => {
        this.state.check = true
        this.state.mount = false
        this.forceUpdate()
      }

    render() {
      const { count, check, mount } = this.state;
        return (
            <View style={styles.container}>
                {check && <Text style={{ fontSize: 30 }}>{count}</Text>}
                <View style={{ height: 10 }} />
                <TouchableOpacity style={styles.button} onPress={this.onPress}>
                    {check && <Text style={{ fontSize: 25, color:"blue"}}>INCREMENT</Text>}
                </TouchableOpacity>
                <View style={{ height: 10 }} />
                <TouchableOpacity style={styles.button} onPress={this.onPresss}>
                    {check && <Text style={{ fontSize: 25, color:"blue" }}>UNMOUNT</Text>}
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.onMount}>
                    {mount && <Text style={{ fontSize: 25, color:"blue" }}>MOUNT</Text>}
                </TouchableOpacity>
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
        justifyContent: "center",
    },
    text:{
      fontSize: '100'
    }
});

export default Empty