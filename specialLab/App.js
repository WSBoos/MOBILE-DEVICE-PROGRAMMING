import { StyleSheet, View, Alert, TextInput, Image, Text } from "react-native";
import React from "react";
import Status from "./components/Status";
import MessageList from "./components/MessageList";
import { createImageMessage, createLocationMessage, createTextMessage } from './utils/MessageUtils';

export default class App extends React.Component {
  state = {
    messages: [
      createImageMessage('https://unsplash.it/300/300'),
      createTextMessage('My name is Warangkhana'),
      createTextMessage('World'),
      createTextMessage('Hello'),
      createLocationMessage({
        latitude: 37.78825,
        longitude: -122.4324,
      }),
    ],
  }

  handlePressImage = uri => {
    const { messages } = this.state;

    this.setState({
      messages: [
        createImageMessage(uri),
        ...messages,
      ],
    });
  }

  handleSubmit = text => {
    const { messages } = this.state;

    this.setState({
      messages: [
        createTextMessage(text),
        ...messages,
      ],
    });
  }

  handlePressMessage = ({ id, type }) => {
    switch (type) {
      case 'text':
        Alert.alert(
          'Delete Message?',
          'Are you sure you want to permanently delete this message?',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Delete',
              style: "destructive",
              onPress: () => {
                const { messages } = this.state;
                this.setState({
                  messages: messages.filter(
                    message => message.id !== id,
                  ),
                });
              },
            },
          ],
        );
        break;
      case 'image':
        // this.setState({})
        break;
      default:
        break;
    }
  }

  renderMessageList() {
    const { messages } = this.state;

    return (
      <View style={styles.content}>
        <MessageList
          messages={messages}
          onPressMessage={this.handlePressMessage}
        />
      </View>
      );
  }
  renderInputMethodEditor() {
    return (
      <View style={styles.inputMethodEditor}>
        <Text style={{ color: "white", fontSize: 20 }}>Comming Soon!!</Text>
      </View>
    );
  }
  renderToolbar() {
    return (
        <View style={styles.toolbar}>
          <Image source={ require('./assets/image/camera.png') } style={{ margin: 3 }}/>
          <Image source={ require('./assets/image/pin.png') } style={{ margin: 3 }}/>
          <TextInput placeholder={"Type Something!"} style={styles.input}/>
        </View>
      );
  }
  render() {
    return (
      <View style={styles.container}>
        <Status />
        {this.renderMessageList()}
        {this.renderToolbar()}
        {this.renderInputMethodEditor()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 2,
    backgroundColor: "white",
  },
  inputMethodEditor: {
    display: "none",
    flex: 1.5,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.04)",
    backgroundColor: "white",
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    margin: 3,
    borderWidth: 2,
    borderColor: "#f1f1f1",
    backgroundColor: "#f1f1f1",
    padding: 5,
    borderRadius: 10,
  }
});
