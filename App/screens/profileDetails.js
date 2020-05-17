import React from "react";
import { View, StyleSheet, Image } from "react-native";
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
  sectionContainer: {
    padding: 8,
  },
  flex: {
    flexDirection: "row",
    marginVertical: 32,
    alignItems: "baseline",
  },
  mediumText: {
    fontSize: 14,
  },
  largeText: {
    fontSize: 28,
    marginRight: 8,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const ProfileDetails = ({ route }) => (
  <ScreenContainer>
    <Image
      source={{
        uri: "https://source.unsplash.com/user/chrisjoelcampbell",
      }}
      style={{ maxHeight: 320, width: null, flex: 1 }}
    />
    <View style={styles.sectionContainer}>
      <View style={styles.flex}>
        <Text style={styles.largeText}>キャサリン</Text>
        <Text style={styles.mediumText}>25歳</Text>
      </View>
      <Text style={styles.mediumText}>
        都内で客室乗務員をやっています。あまりこういうアプリは慣れていないですが、よろしくお願いします。
      </Text>
      <Text style={styles.mediumText}>
        都内で客室乗務員をやっています。あまりこういうアプリは慣れていないですが、よろしくお願いします。
      </Text>
      <Text style={styles.mediumText}>
        都内で客室乗務員をやっています。あまりこういうアプリは慣れていないですが、よろしくお願いします。
      </Text>
    </View>
    <View style={styles.sectionContainer}>
      <Text>基本プロフィール</Text>
    </View>
    <List>
      <ListItem>
        <Left>
          <Text style={styles.mediumText}>身長</Text>
        </Left>
        <Right>
          <Text style={styles.mediumText}>173cm</Text>
        </Right>
      </ListItem>
      <ListItem>
        <Left>
          <Text style={styles.mediumText}>居住地</Text>
        </Left>
        <Right>
          <Text style={styles.mediumText}>ロサンゼルス</Text>
        </Right>
      </ListItem>
      <ListItem>
        <Left>
          <Text style={styles.mediumText}>年収</Text>
        </Left>
        <Right>
          <Text style={styles.mediumText}>800~1000万</Text>
        </Right>
      </ListItem>
    </List>
  </ScreenContainer>
);
