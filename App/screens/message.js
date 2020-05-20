import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
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

const data = Array(20)
  .fill("")
  .map((_, i) => ({ key: `${i}`, text: `item #${i}` }));

export const Message = ({ navigation }) => {
  const [listViewData, setlistViewData] = useState(data);
  return (
    <Container>
      <Content>
        <SwipeListView
          data={listViewData}
          renderItem={(data, rowMap) => (
            <List>
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
            </List>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}></View>
          )}
          rightOpenValue={-75}
        />
      </Content>
    </Container>
  );
};
