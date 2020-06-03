import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import {
  Button,
  Text,
  Card,
  CardItem,
  Form,
  Item,
  Picker,
  Icon,
  Textarea,
  Left,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../module/auth/index";
import { vw } from "react-native-expo-viewport-units";
import axios from "axios";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response.status);
    // TODO: アラート
  }
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#fff",
  },
  logoWrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 240,
    height: 240,
  },
  item: {
    width: vw(100),
    fontSize: 14,
  },
  itemWrap: {
    marginVertical: 16,
  },
  register: {
    fontSize: 14,
    color: "#0179fe",
  },
  login: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const ProfileRegister = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Form>
        <Text>まずはあなたについて教えてください</Text>
        <Text>ニックネーム</Text>
        <Textarea style={styles.textarea} rowSpan={1} bordered placeholder="" />
        <Text>性別</Text>
        <Text>生年月日</Text>
        <Text>居住地</Text>
        <Text>メールアドレス</Text>
        <Text>パスワード</Text>
      </Form>
      <Button
        style={styles.login}
        onPress={() => navigation.push("IntroPlanStackScreen")}
      >
        <Text>次へ</Text>
      </Button>
    </ScreenContainer>
  );
};
