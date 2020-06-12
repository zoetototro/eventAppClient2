import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Input, Text, Item, Button, Form, Textarea } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../module/auth/index";
import { vw } from "react-native-expo-viewport-units";
import axios from "axios";

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
  introHead: {
    width: vw(100),
    fontSize: 14,
    textAlign: "center",
    marginVertical: 16,
  },
  textArea: {
    marginBottom: 24,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const IntroPlan = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text style={styles.introHead}>理想のデートを教えてください</Text>
      <Button
        bordered
        outline
        style={styles.login}
        onPress={() => navigation.push("IntroPlanDetailStackScreen")}
      >
        <Text primary>ランチ</Text>
      </Button>
      <Button
        bordered
        outline
        style={styles.login}
        onPress={() => navigation.push("IntroPlanDetailStackScreen")}
      >
        <Text primary>ディナー</Text>
      </Button>
      <Button
        bordered
        outline
        style={styles.login}
        onPress={() => navigation.push("IntroPlanDetailStackScreen")}
      >
        <Text primary>その他</Text>
      </Button>
      <Text style={styles.introHead}>
        行きたい店やプランがあれば是非教えてください（任意）
      </Text>
      <Form>
        <Textarea
          style={styles.textArea}
          rowSpan={3}
          bordered
          placeholder="例）新宿・叙々苑"
        />
      </Form>
      <Button
        style={styles.login}
        onPress={() => navigation.push("IntroPlanDetailStackScreen")}
      >
        <Text>次へ</Text>
      </Button>
    </ScreenContainer>
  );
};
