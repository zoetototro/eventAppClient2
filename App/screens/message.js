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
  Thumbnail,
  Text,
} from "native-base";
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export const Message = ({ navigation }) => (
  <Container>
    <Content>
      <List>
        {[0, 1, 2, 3, 4, 5].map((v) => {
          return (
            <ListItem onPress={() => navigation.push("ChatDetail")} avatar>
              <Left>
                <Thumbnail
                  source={{
                    uri: "https://source.unsplash.com/user/chrisjoelcampbell",
                  }}
                />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          );
        })}
      </List>
    </Content>
  </Container>
);
