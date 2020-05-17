import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Button,
  Thumbnail,
  Text,
  Icon,
} from "native-base";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Notification = ({ navigation }) => (
  <ScreenContainer>
    <Content>
      <Icon name="home" />
      <Icon
        ios="ios-menu"
        android="md-menu"
        style={{ fontSize: 20, color: "red" }}
      />
      <Icon type="FontAwesome" name="home" />
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail
              source={{
                uri: "https://source.unsplash.com/user/chrisjoelcampbell",
              }}
            />
          </Left>
          <Body>
            <Icon active name="airplane" />
          </Body>
        </ListItem>
      </List>
    </Content>
  </ScreenContainer>
);
