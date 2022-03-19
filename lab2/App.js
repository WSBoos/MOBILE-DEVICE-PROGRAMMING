import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./app/assets/IT.png")} />
      <Text style={styles.text}>Hello IT Ladkrabang !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "gray",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    padding: 10,
},
logo:{
  width: 120,
  height: 100
},
text: {
  fontSize: 20,
},

// container: {
//   flex: 1,
//   backgroundColor: '#fff',
//   alignItems: 'center',
//   justifyContent: 'flex-end'
// },

});

//////////////////////////////////ข้อ3
// import React from "react"
// import {StyleSheet , View} from "react-native"
// export default function App() {
//   return (
//     <View style={styles.outer}>
//       <View style={styles.inner}>
//         <View style={[styles.box,{backgroundColor : 'blue'}]}></View>
//         <View style={[styles.box,{backgroundColor: 'red'}]}></View>
//       </View>
//       <View style={[styles.inner, {alignItems: 'flex-end' }]}>
//         <View style={[styles.box,{backgroundColor:'green'}]}></View>
//         <View style={[styles.box,{ backgroundColor :'orange'}]}></View>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
// outer:{
//   flex:1,
//   flexDirection: "row"
// },
// inner:{
//   flex:1,
//   justifyContent:'space-between',
//   flexDirection: "coloumn"
// },
// box:{
//   width: 20,
//   height: 20
// }
// });
//////////////////////////////////ข้อ3

/////////////////////////////////ข้อ4
// import React from "react";
// import { StyleSheet, Text, View, Image } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={{ height: 20 }} />
//       <View style={styles.row}>
//         <Image style={styles.logo} source={require("./app/assets/IT.png")} />
//         <View style={[styles.container, { padding: 10 }]}>
//           <Text style={styles.header}>Mobile Device Programming</Text>
//           <Text numberOfLines={3}>
//             Course about how to write the Mobile App in iOS and Android by using
//             React-Native.
//           </Text>
//         </View>
//       </View>
      
//       <View style={styles.row}>
//         <Image style={styles.logo} source={require("./app/assets/IT.png")} />
//         <View style={[styles.container, { padding: 10 }]}>
//           <Text style={styles.header}>Mobile Device Programming</Text>
//           <Text numberOfLines={3}>
//             Course about how to write the Mobile App in iOS and Android by using
//             React-Native.
//           </Text>
//         </View>
//       </View>

//       <View style={styles.row}>
//         <Image style={styles.logo} source={require("./app/assets/IT.png")} />
//         <View style={[styles.container, { padding: 10 }]}>
//           <Text style={styles.header}>Mobile Device Programming</Text>
//           <Text numberOfLines={3}>
//             Course about how to write the Mobile App in iOS and Android by using
//             React-Native.
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   row: {
//     justifyContent: "flex-start",
//     flexDirection: "row",
//     alignItems: "center",
//     alignContent: "space-around"
//   },
//   header: {
//     fontSize: 20,
//     flexWrap: "wrap",
//   },
//   logo: {
//     width: 100,
//     height: 100,
//   },
// });
/////////////////////////////////ข้อ4


/////////////////////////////////ข้อ5
// import React from "react";
// import { StyleSheet, Text, View, Image, TextInput, Button} from "react-native";
// export default function App() {
//   return (
//     <View style={styles.container}>

//       <View style={styles.inputbox}>
//           <TextInput placeholder="Input Text" style={styles.textinput} />
//             <View style={styles.btncontainer}>
//       <Button title="ADD" /></View></View>

 

//       <View style={styles.logobox}>
//         <Image style={styles.logo} source={require("./app/assets/IT.png")} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   logo: {
//         width: 50,
//         height: 50
//      },
//   logobox:{
//     flex: 1,
//     alignItems: 'flex-end',
//     justifyContent: 'flex-end',
//     padding: '5%'
//   },

//   btncontainer: { width: "20%", backgroundColor: "#1FD8D8", height:"20px"},

//   textinput:{
//    height:"20px",
//     width: "50%",
//     borderWidth: 1,
//     borderColor: "red",
//     margin:"2%"
//   },

//   inputbox:{
//     padding:"5%",
//     flexDirection: "row", 
//     flex:4,
//     justifyContent: 'center',
//   }
// });
/////////////////////////////////ข้อ5
