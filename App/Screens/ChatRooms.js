import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics, Colors } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import firebase from 'firebase';

export default class ChatRooms extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: "Chat Rooms",
      tabBarIcon: ({ tintColor }) => (
        <Entypo name="home"
          size={Metrics.icons.medium}
          color={tintColor} />
      ),
    };
  };

  state = {
    text: "",
    rooms: []
  }

  componentWillMount() {
    //Load from Firebase
  }

  add = () => {
    //Add to Firebase and clear text
  }

  _renderItem = ({item}) => {
    //Should navigate to the room conversation
    return (
      <TouchableOpacity>
        <View style={[styles.addChatContainer,{borderTopWidth: 0, borderBottomWidth: 1}]}>
          <Text style={material.subheading}> {item.roomName} </Text>
          <Text style={material.subheading}> Messages: {item.count} </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}
        behavior={"padding"}
        keyboardVerticalOffset={Metrics.bottomBarHeight}>
        <FlatList
          data={this.state.rooms}
          renderItem={this._renderItem}
          style={styles.container}/>
        <View style={styles.addChatContainer}>
          <TextInput
            style={styles.newRoom}
            value={this.state.text}
            onChangeText={(text) => this.setState({text})}
            placeholder="Create a new chat room..."/>
          <Button
            title="Add"
            onPress={this.add}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addChatContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: Metrics.doubleBaseMargin,
    paddingRight: Metrics.doubleBaseMargin,
    borderTopWidth: Metrics.horizontalLineHeight,
    paddingBottom: Metrics.marginVertical,
    paddingTop: Metrics.marginVertical
  },
  newRoom: {
    borderBottomWidth: Metrics.horizontalLineHeight,
    flex: 1,
    borderBottomColor: Colors.border,
    marginRight: Metrics.marginHorizontal
  },
  listItem: {

  }
});
