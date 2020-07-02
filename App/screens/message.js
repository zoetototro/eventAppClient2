import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { AsyncStorage } from "react-native";
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
import axios from "axios";
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export const Message = ({ navigation }) => {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    const value = await AsyncStorage.getItem("token");
    console.log("storage", value);
    const apiHost = "http://localhost:8000/api";
    try {
      const res = await axios.get(`${apiHost}/auth/message`, {
        headers: { Authorization: `Bearer ${value}` },
      });
      console.log(res);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Container>
      <Content>
        <SwipeListView
          data={data}
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
                  <Text>{data.item.name}</Text>
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
