import React from "react";
import PropTypes from "prop-types";
import { MessageShape } from "../utils/MessageUtils";
import { View, TouchableOpacity, FlatList, Image, StyleSheet, Text } from "react-native";
import MapView from 'react-native-maps';

const keyExtractor = (item) => item.id.toString();
export default class MessageList extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(MessageShape).isRequired,
    onPressMessage: PropTypes.func,
  };
  static defaultProps = {
    onPressMessage: () => {},
  };

  renderMessageBody = ({ type, text, uri, coordinate }) => {
    switch (type) {
      case "text":
        return (
          <View>
            <Text style={styles.text}>{text}</Text>
          </View>
        );
      case "image":
        return <Image style={styles.image} source={{ uri }} />;
      case "location":
        return (
          <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
            <MapView.Marker coordinate={coordinate} />
          </MapView>
        );
      default:
        return null;
    }
  };

  renderMessageItem = ({ item }) => {
    const { onPressMessage } = this.props;

    return (
      <View key={item.id} style={styles.messageRow}>
        <TouchableOpacity onPress={() => onPressMessage(item)}>
          {this.renderMessageBody(item)}
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { messages } = this.props;

    return (
      <FlatList
        style={styles.container}
        inverted
        data={messages}
        renderItem={this.renderMessageItem}
        keyExtractor={keyExtractor}
        keyboardShouldPersistTaps={'handled'}
      />
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "white",
    backgroundColor: "#0084FF",
    padding: 8,
    borderRadius: 50,
  },
  image: {
    width: 150,
    height: 150,
  },
  messageRow: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 5,
  },
  map: {
    width: 200,
    height: 200,
  }
});
