import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { List, ListItem, Text, Left, Right, Icon, Button } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import ReactNative, { AsyncStorage } from "react-native";
import { setPlaneDetection } from "expo/build/AR";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export const Profile = ({ navigation }) => {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    const value = await AsyncStorage.getItem("token");
    const apiHost = "http://localhost:8000/api";
    try {
      const res = await axios.post(`${apiHost}/auth/me`, value, {
        headers: { Authorization: `Bearer ${value}` },
      });
      console.log(res);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ScreenContainer>
      <Image
        source={{
          uri: "https://source.unsplash.com/user/chrisjoelcampbell",
        }}
        style={{ maxHeight: 320, width: null, flex: 1 }}
      />
      <Button onPress={() => navigation.push("EditProfile")}>
        <Text>編集</Text>
      </Button>
      <View style={styles.sectionContainer}>
        <View style={styles.flex}>
          <Text style={styles.largeText}>{data.name}</Text>
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
            <Text style={styles.mediumText}>{data.prefecture}</Text>
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text style={styles.mediumText}>年収</Text>
          </Left>
          <Right>
            <Text style={styles.mediumText}>{data.income}</Text>
          </Right>
        </ListItem>
      </List>
    </ScreenContainer>
  );
};
