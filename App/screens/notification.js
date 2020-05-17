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
    width: 100,
    height: 30,
  },
  miniText: {
    fontSize: 14,
  },
  list: {
    height: "100%",
  },
  listItem: {},
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Notification = ({ navigation }) => (
  <ScreenContainer>
    <Content>
      <List style={styles.list}>
        {[0, 1, 2, 3, 4, 5].map((v) => {
          return (
            <ListItem style={styles.listItem} avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri: "https://source.unsplash.com/user/chrisjoelcampbell",
                  }}
                />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
                <Button style={styles.button}>
                  <Text style={styles.miniText}>マッチする</Text>
                </Button>
              </Right>
            </ListItem>
          );
        })}
      </List>
    </Content>
  </ScreenContainer>
);
