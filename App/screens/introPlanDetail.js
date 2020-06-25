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
  textArea: {
    marginBottom: 24,
  },
  active: {
    backgroundColor: "#007aff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  button: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  activeText: {
    color: "#007aff",
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const IntroPlanDetail = ({ navigation }) => {
  const [request, setRequest] = useState("");
  return (
    <ScreenContainer>
      <Text style={styles.introHead}>
        初回デートで相手に求めるものはなんですか？
      </Text>
      <Button
        bordered
        outline
        onPress={() => {
          setRequest("奢ってほしい");
          console.log(request);
        }}
        style={[request == "奢ってほしい" ? styles.active : styles.button]}
      >
        <Text style={[request == "奢ってほしい" ? "" : styles.activeText]}>
          奢ってほしい
        </Text>
      </Button>
      <Button
        bordered
        outline
        onPress={() => {
          setRequest("高収入");
          console.log(request);
        }}
        style={[request == "高収入" ? styles.active : styles.button]}
      >
        <Text style={[request == "高収入" ? "" : styles.activeText]}>
          高収入
        </Text>
      </Button>
      <Button
        bordered
        outline
        onPress={() => {
          setRequest("イケメン");
        }}
        style={[request == "イケメン" ? styles.active : styles.button]}
      >
        <Text style={[request == "イケメン" ? "" : styles.activeText]}>
          イケメン
        </Text>
      </Button>
      <Button
        bordered
        outline
        onPress={() => {
          setRequest("面白い");
        }}
        style={[request == "面白い" ? styles.active : styles.button]}
      >
        <Text style={[request == "面白い" ? "" : styles.activeText]}>
          面白い
        </Text>
      </Button>
      <Text style={styles.introHead}>
        他にお相手に求めるものがあれば是非教えてください（任意）
      </Text>
      <Form>
        <Textarea
          style={styles.textArea}
          rowSpan={3}
          bordered
          placeholder="例）筋肉質で頼り甲斐がある"
        />
      </Form>
      <Button
        style={styles.button}
        onPress={() => navigation.push("IntroImageStackScreen")}
      >
        <Text>次へ</Text>
      </Button>
    </ScreenContainer>
  );
};
