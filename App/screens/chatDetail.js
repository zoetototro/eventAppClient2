import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { Input, Text, Item } from "native-base";
import { GiftedChat } from "react-native-gifted-chat";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const ChatDetail = ({ navigation }) => {
  const [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: "New room created.",
      createdAt: new Date().getTime(),
      system: true,
    },
    // example of chat message
    {
      _id: 1,
      text: "Henlo!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Test User",
      },
    },
  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessage) => handleSend(newMessage)}
      user={{ _id: 1 }}
    />
  );
};
