import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Text,
  Form,
  Item,
  Picker,
  Icon,
  Input,
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
  item: {
    width: vw(100),
    fontSize: 14,
    margin: 0,
    padding: 0,
  },
  itemWrap: {
    marginVertical: 16,
  },
  register: {
    fontSize: 14,
    color: "#0179fe",
  },
  introHead: {
    width: vw(100),
    fontSize: 14,
    textAlign: "center",
    marginVertical: 16,
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
  const [selected2, setSelected2] = useState("undefined");
  function onValueChange2() {
    setSelected2({
      selected2: value,
    });
  }
  const items = [
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
  ];

  const events = [
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
    { age: 24, description: "初めまして", place: "東京都" },
  ];
  return (
    <ScreenContainer>
      <Form>
        <Text style={styles.introHead}>まずはあなたについて教えてください</Text>
        <Item>
          <Input style={styles.item} placeholder="ニックネーム" />
        </Item>
        <Item picker>
          <Left>
            <Text>職種</Text>
          </Left>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            placeholder="自営業"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            selectedValue={selected2}
            onValueChange={onValueChange2.bind(this)}
          ></Picker>
        </Item>
        <Item picker>
          <Left>
            <Text style={styles.listText}>職場</Text>
          </Left>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="WINDII"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            selectedValue={selected2}
            onValueChange={onValueChange2.bind(this)}
          ></Picker>
        </Item>
        <Item picker>
          <Left style={styles.listText}>
            <Text>年齢</Text>
          </Left>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="28"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            selectedValue={selected2}
            onValueChange={onValueChange2.bind(this)}
          ></Picker>
        </Item>
        <Item picker>
          <Left>
            <Text>身長</Text>
          </Left>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="170"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            selectedValue={selected2}
            onValueChange={onValueChange2.bind(this)}
          ></Picker>
        </Item>
        <Item>
          <Input style={styles.item} placeholder="メールアドレス" />
        </Item>
        <Item>
          <Input style={styles.item} placeholder="パスワード" />
        </Item>
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
