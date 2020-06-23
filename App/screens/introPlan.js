import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import {
  Input,
  Text,
  Item,
  Button,
  Form,
  Textarea,
  Radio,
  ListItem,
  Right,
  Left,
} from "native-base";
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
    color: "#FFF",
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const IntroPlan = ({ navigation }) => {
  const [event, setEvent] = useState("ランチ");
  const [eventDetail, setEventDetail] = useState("");
  return (
    <ScreenContainer>
      <Text style={styles.introHead}>理想のデートを教えてください</Text>
      <Form>
        <Button
          bordered
          outline
          onPress={() => {
            setEvent("ランチ");
            console.log(event);
          }}
          style={[event == "ランチ" ? styles.active : styles.button]}
        >
          <Text style={[event == "ランチ" ? styles.activeText : ""]}>
            ランチ
          </Text>
        </Button>
        <Button
          bordered
          outline
          onPress={() => {
            setEvent("ディナー");
            console.log(event);
          }}
          style={[event == "ディナー" ? styles.active : styles.button]}
        >
          <Text style={[event == "ディナー" ? styles.activeText : ""]}>
            ディナー
          </Text>
        </Button>
        <Button
          bordered
          outline
          onPress={() => {
            setEvent("その他");
            console.log(event);
          }}
          selected={false}
          style={[event == "その他" ? styles.active : styles.button]}
        >
          <Text style={[event == "その他" ? styles.activeText : ""]}>
            その他
          </Text>
          <Radio color={"#f0ad4e"} selectedColor={"#5cb85c"} selected={false} />
        </Button>
        <Text style={styles.introHead}>
          行きたい店やプランがあれば是非教えてください（任意）
        </Text>
        <Textarea
          style={styles.textArea}
          rowSpan={3}
          bordered
          placeholder="例）新宿・叙々苑"
          value={eventDetail}
          onChangeText={(text) => {
            setEventDetail(text);
            console.log(eventDetail);
          }}
        />
        <Button
          style={styles.button}
          onPress={() => navigation.push("IntroPlanDetailStackScreen")}
        >
          <Text>次へ</Text>
        </Button>
      </Form>
    </ScreenContainer>
  );
};
